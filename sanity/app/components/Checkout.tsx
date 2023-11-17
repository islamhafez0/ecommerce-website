"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";
import { useState } from "react";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const [loading, setLoading] = useState(false);
  const { checkoutSingleItem } = useShoppingCart();

  async function buyNow(priceId: string) {
    try {
      setLoading(true);
      await checkoutSingleItem(priceId);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      {loading ? "Loading....." : "Checkout Now"}
    </Button>
  );
}
