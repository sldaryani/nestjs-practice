import ProductCard from "@/components/ProductCard";
import { getAllProductRequest } from "@/fetch/product";
import { Product } from "@/types/type";
import Link from "next/link";

const Products = async () => {
  async function fetchAllProducts() {
    const response = await getAllProductRequest();
    const products = response.data;

    return products;
  }

  const products = await fetchAllProducts();
  return (
    <div className="py-8 px-12 max-w-7xl mx-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold ">Products</h1>
        <Link href="/products/action/add">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add Product
          </button>
        </Link>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default Products;
