"use client";
import { ReactNode } from "react";
import { CartProvider as CartProviderComponent } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <CartProviderComponent
      mode="payment"
      cartMode="client-only"
      successUrl="http://localhost:3000//stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
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
