"use client";

import { useState } from "react";
import { usePosStore } from "../stores/posStore";
import PaymentModal from "./PaymentModal";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = usePosStore();
  const [showPayment, setShowPayment] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 ml-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={clearCart}
            className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
          >
            Clear Cart
          </button>
          <button
            onClick={() => setShowPayment(true)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      </div>

      {showPayment && (
        <PaymentModal total={total} onClose={() => setShowPayment(false)} />
      )}
    </div>
  );
}
