import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cloudSyncService } from "../services/cloudSync";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface Sale {
  id: number;
  items: CartItem[];
  total: number;
  paymentMethod: string;
  timestamp: string;
}

interface PosStore {
  products: Product[];
  cart: CartItem[];
  sales: Sale[];
  isOnline: boolean;
  pendingSyncCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  completeSale: (paymentMethod: string) => void;
  syncWithCloud: () => Promise<void>;
  updateOnlineStatus: () => void;
}

export const usePosStore = create<PosStore>()(
  persist(
    (set, get) => ({
      products: [
        { id: 1, name: "Coffee", price: 3.5, stock: 100 },
        { id: 2, name: "Sandwich", price: 8.99, stock: 50 },
        { id: 3, name: "Pastry", price: 2.75, stock: 30 },
      ],
      cart: [],
      sales: [],
      isOnline: navigator.onLine,
      pendingSyncCount: 0,

      addToCart: (product: Product) => {
        const cart = get().cart;
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (productId: number) => {
        set({ cart: get().cart.filter((item) => item.id !== productId) });
      },

      updateQuantity: (productId: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
        } else {
          set({
            cart: get().cart.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          });
        }
      },

      clearCart: () => set({ cart: [] }),

      completeSale: async (paymentMethod: string) => {
        const cart = get().cart;
        const total = cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        const sale: Sale = {
          id: Date.now(),
          items: cart,
          total,
          paymentMethod,
          timestamp: new Date().toISOString(),
        };

        set({
          sales: [...get().sales, sale],
          cart: [],
        });

        // Sync to cloud
        await cloudSyncService.syncSales([...get().sales, sale]);
        set({ pendingSyncCount: cloudSyncService.getPendingSyncCount() });
      },

      syncWithCloud: async () => {
        const cloudData = await cloudSyncService.fetchCloudData();
        if (cloudData) {
          set({
            products: cloudData.products,
            sales: cloudData.sales,
          });
        }
        await cloudSyncService.syncPendingData();
        set({ pendingSyncCount: cloudSyncService.getPendingSyncCount() });
      },

      updateOnlineStatus: () => {
        set({
          isOnline: cloudSyncService.isOnlineStatus(),
          pendingSyncCount: cloudSyncService.getPendingSyncCount(),
        });
      },
    }),
    {
      name: "pos-storage",
    }
  )
);
