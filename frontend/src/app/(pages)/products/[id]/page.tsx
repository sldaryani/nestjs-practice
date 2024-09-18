import { getOneProductRequest } from "@/fetch/product";
import Link from "next/link";

type PageProps = {
  params: {
    id: number;
  };
};

const Page = async ({ params }: PageProps) => {
  const response = await getOneProductRequest(params.id);
  const product = response.data;
  if (response.status !== 200) {
    return (
      <div>
        <h1>Not Found</h1>
        <Link href="/products" className="text-blue-500">
          Go Back
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto">
      <main className="py-8 px-12">
        <div className="flex justify-between mb-4 items-center">
          <Link href="/products" className="text-blue-500">
            Go Back
          </Link>
          <Link href={`/products/action/${product.id}`}className="text-white inline-flex w-fit items-center mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit Product
          </Link>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg font-medium">{product.description}</p>
          <p className="text-lg font-medium">Price: <b>₹{product.price}</b></p>
          <Link
            href="/products"
            className="text-white inline-flex w-fit items-center mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Page;
