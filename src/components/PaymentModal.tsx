import { useState } from "react";
import { usePosStore } from "../stores/posStore";

interface PaymentModalProps {
  total: number;
  onClose: () => void;
}

export default function PaymentModal({ total, onClose }: PaymentModalProps) {
  const { completeSale } = usePosStore();
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handlePayment = () => {
    completeSale(paymentMethod);
    onClose();
    alert("Payment completed successfully!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-bold mb-4">Complete Payment</h3>

        <div className="mb-4">
          <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="mobile">Mobile Payment</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
}
