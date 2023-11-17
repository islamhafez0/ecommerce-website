"use client";
import { ReactNode } from "react";
import { CartProvider as CartProviderComponent } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  const isProduction = process.env.NODE_ENV === "production";
  const successPageUrl = isProduction
    ? "https://ecommerce-website-five-flax.vercel.app/stripe/success"
    : "http://localhost:3000/stripe/success";
  const errorPageUrl = isProduction
    ? "https://ecommerce-website-five-flax.vercel.app/stripe/error"
    : "http://localhost:3000/stripe/error";
  return (
    <CartProviderComponent
      mode="payment"
      cartMode="client-only"
      successUrl={successPageUrl}
      cancelUrl={errorPageUrl}
      billingAddressCollection={false}
      shouldPersist={true}
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      currency="USD"
      language="en-US"
    >
      {children}
    </CartProviderComponent>
  );
}
