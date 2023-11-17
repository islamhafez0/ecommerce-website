"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
interface iAppProps {
  images: any;
}

const ImageGallery = ({ images }: iAppProps) => {
  const [singleImage, setSingleImage] = useState(images[0]);
  const handleClick = (image: any) => {
    setSingleImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div className="overflow-hidden rounded-lg bg-gray-100" key={index}>
            <Image
              src={urlFor(image).url()}
              alt="product image item"
              width={200}
              height={200}
              className="object-cover object-center w-full h-full cursor-pointer"
              onClick={() => handleClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative rounded-lg bg-gray-100 lg:col-span-4 overflow-hidden">
        <Image
          src={urlFor(singleImage).url()}
          className="object-center object-cover w-full h-full"
          alt="product image"
          width={300}
          height={300}
        />
        <span className="absolute text-white px-3 py-1.5 bg-red-500 rounded-br-lg text-sm uppercase tracking-wider top-0 left-0">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
