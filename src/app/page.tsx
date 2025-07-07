import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <Layout title="POS - Point of Sale">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Products</h1>
          <ProductGrid />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </Layout>
  );
}
