interface SyncData {
  sales: any[];
  products: any[];
  lastSync: string;
}

class CloudSyncService {
  private isOnline = navigator.onLine;
  private pendingSync: SyncData[] = [];
  private syncInProgress = false;

  constructor() {
    this.setupNetworkListeners();
  }

  private setupNetworkListeners() {
    window.addEventListener("online", () => {
      this.isOnline = true;
      this.syncPendingData();
    });

    window.addEventListener("offline", () => {
      this.isOnline = false;
    });
  }

  // Simulate cloud API calls
  private async syncToCloud(data: SyncData): Promise<boolean> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, this would be an actual API call
    console.log("Syncing to cloud:", data);

    // Simulate success (90% success rate)
    return Math.random() > 0.1;
  }

  private async fetchFromCloud(): Promise<SyncData | null> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real app, this would fetch from your backend
    console.log("Fetching from cloud...");

    // Simulate cloud data
    return {
      sales: [],
      products: [
        { id: 1, name: "Coffee", price: 3.5, stock: 100 },
        { id: 2, name: "Sandwich", price: 8.99, stock: 50 },
        { id: 3, name: "Pastry", price: 2.75, stock: 30 },
      ],
      lastSync: new Date().toISOString(),
    };
  }

  public async syncPendingData(): Promise<void> {
    if (
      !this.isOnline ||
      this.syncInProgress ||
      this.pendingSync.length === 0
    ) {
      return;
    }

    this.syncInProgress = true;

    try {
      for (const data of this.pendingSync) {
        const success = await this.syncToCloud(data);
        if (success) {
          // Remove from pending sync
          this.pendingSync = this.pendingSync.filter((item) => item !== data);
          console.log("Successfully synced data to cloud");
        } else {
          console.log("Failed to sync data to cloud, will retry later");
        }
      }
    } catch (error) {
      console.error("Sync error:", error);
    } finally {
      this.syncInProgress = false;
    }
  }

  public async syncSales(sales: any[]): Promise<void> {
    const syncData: SyncData = {
      sales,
      products: [],
      lastSync: new Date().toISOString(),
    };

    if (this.isOnline) {
      const success = await this.syncToCloud(syncData);
      if (!success) {
        this.pendingSync.push(syncData);
      }
    } else {
      this.pendingSync.push(syncData);
      console.log("Offline: Data queued for sync when online");
    }
  }

  public async syncProducts(products: any[]): Promise<void> {
    const syncData: SyncData = {
      sales: [],
      products,
      lastSync: new Date().toISOString(),
    };

    if (this.isOnline) {
      const success = await this.syncToCloud(syncData);
      if (!success) {
        this.pendingSync.push(syncData);
      }
    } else {
      this.pendingSync.push(syncData);
      console.log("Offline: Data queued for sync when online");
    }
  }

  public async fetchCloudData(): Promise<SyncData | null> {
    if (!this.isOnline) {
      console.log("Offline: Cannot fetch cloud data");
      return null;
    }

    return await this.fetchFromCloud();
  }

  public getPendingSyncCount(): number {
    return this.pendingSync.length;
  }

  public isOnlineStatus(): boolean {
    return this.isOnline;
  }
}

export const cloudSyncService = new CloudSyncService();
