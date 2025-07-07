"use client";

import { usePosStore } from "../stores/posStore";

export default function ProductGrid() {
  const { products, addToCart } = usePosStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
