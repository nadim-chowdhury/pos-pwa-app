"use client";

import Layout from "@/components/Layout";
import { usePosStore } from "@/stores/posStore";
import { format } from "date-fns";

interface Sale {
  id: number;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  paymentMethod: string;
  timestamp: string;
}

export default function Sales() {
  const { sales } = usePosStore();

  return (
    <Layout title="Sales History">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Sales History</h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {sales.map((sale: Sale) => (
              <li key={sale.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Sale #{sale.id}
                    </p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(sale.timestamp), "PPpp")}
                    </p>
                    <p className="text-sm text-gray-500">
                      Payment: {sale.paymentMethod}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      ${sale.total.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {sale.items.length} items
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
