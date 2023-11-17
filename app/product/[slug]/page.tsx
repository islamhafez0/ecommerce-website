import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/Checkout";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "product",
};

async function fetchData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category -> name,
          price_id,
      }`;
  const data = await client.fetch(query);
  return data;
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await fetchData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-1">
              <span className="mb-0.5 text-gray-500 inline-block">
                {data.categoryName}
              </span>
              <h2 className="font-bold text-2xl text-gray-900 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <Button className="gap-x-2 rounded-full">
                <span className="text-sm"> 4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-small text-gray-500 transition duration-75">
                60 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="text-red-500 text-sm line-through mb-0.5 ms-1">
                  ${data.price + 30}
                </span>
              </div>
              <span className="tex-sm text-gray-500">
                Incl. vat plus shipping
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-gray-500">
              <Truck className="h-6 w-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>
            <div className="flex gap-2 5">
              <AddToBag
                currency="USD"
                price={data.price}
                description={data.description}
                name={data.name}
                image={data.images[0]}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                price={data.price}
                description={data.description}
                name={data.name}
                image={data.images[0]}
                key={data._id}
                price_id={data.price_id}
              />
            </div>
            <p className="text-base tracking-wide text-gray-500 mt-10">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
