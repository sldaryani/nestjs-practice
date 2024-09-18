"use client";
import { Product } from "@/types/type";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  product: Product;
  key: number;
};

const ProductCard = ({ key, product }: ProductCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
    >
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
        {product.description}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        ₹{product.price}
      </p>
      <a
        href=""
        onClick={() => alert("Coming soon...")}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Buy Now
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default ProductCard;
