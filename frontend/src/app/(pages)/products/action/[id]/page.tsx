"use client";
import { createProductRequest, getOneProductRequest, updateProductRequest } from "@/fetch/product";
import { Product } from "@/types/type";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { useEffect, useState } from "react";

type PageProps = {
  params: {
    id: number | string;
  };
};

const Page = ({ params }: PageProps) => {
  const id = params.id;
  const [product, setProduct] = useState<Product>({} as Product);
  const handleSubmit = async (values: Product) => {
    const response = id === "add" ? await createProductRequest(values) : await updateProductRequest({ ...values, id: id as number });
    if (response.status === 201 || response.status === 200) {
      window.location.href = "/products";
    }
  };

  const fetchOneProduct = async (resetForm: Function) => {
    const response = await getOneProductRequest(id as number);
    if (response.status === 200) {
      setProduct(response.data);
      // Reset the form with the fetched product data
      resetForm({
        values: {
          name: response.data.name || "",
          description: response.data.description || "",
          price: response.data.price || "",
        },
      });
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-12">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">
            {id === "add" ? "Add Product" : "Edit Product"}
          </h1>
        </div>
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: 0.0,
          } as Product}
          // validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ resetForm, dirty }) => {
            useEffect(() => {
              if (id !== "add") {
                fetchOneProduct(resetForm);
              }
            }, [id, resetForm]);
            return (
              <Form>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required
                  />
                  <ErrorMessage
                    component="a"
                    className="mt-1 text-red-500"
                    name="name"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <Field
                    type="decimal"
                    id="price"
                    name="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Price"
                    required
                  />
                  <ErrorMessage
                    component="a"
                    className="mt-1 text-red-500"
                    name="price"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <Field
                    type="text"
                    id="description"
                    name="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Description"
                    required
                  />
                  <ErrorMessage
                    component="a"
                    className="mt-1 text-red-500"
                    name="description"
                  />
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={!dirty}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                      !dirty
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100 cursor-pointer"
                    }`}
                  >
                    Add Product
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Page;
