import React from "react";
import { client } from "../lib/sanity";
import { SimplifaiedProduct } from "../interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "category",
};

const fecthdata = async (category: string) => {
  const query = `*[_type == "product" && category -> name == "${category}"]{
    _id,
      price,
      name,
      "imageUrl": images[0].asset->url,
      "slug": slug.current,
      "categoryName": category -> name
  }`;
  const data = await client.fetch(query);
  return data;
};

const Category = async ({ params }: { params: { category: string } }) => {
  const data: SimplifaiedProduct[] = await fecthdata(params.category);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our products for {params.category}
          </h2>
          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All
            <ArrowRight />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
          {data.map((product) => (
            <div className="relative group" key={product._id}>
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  priority
                  src={product.imageUrl}
                  alt="product image"
                  width={300}
                  height={300}
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-gray-700 text-sm hover:text-primary transition duration-75">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm text-gray-900 font-medium">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
