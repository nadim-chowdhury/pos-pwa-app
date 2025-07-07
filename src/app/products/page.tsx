"use client";

import Layout from "@/components/Layout";
import { usePosStore } from "@/stores/posStore";

export default function Products() {
  const { products, addToCart } = usePosStore();

  return (
    <Layout title="Products">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <span className="text-sm text-gray-500">
                  Stock: {product.stock}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-2xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products available</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
