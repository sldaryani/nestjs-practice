import ProductCard from "@/components/ProductCard";
import { getAllProductRequest } from "@/fetch/product";
import { Product } from "@/types/type";
import Link from "next/link";

const Home = async () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center">
        <h1 className="text-3xl font-bold">{"Welcome to my store!"}</h1>
        <Link href="/products" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{"Click me"}</Link>
      </main>
    </div>
  );
};

export default Home;
