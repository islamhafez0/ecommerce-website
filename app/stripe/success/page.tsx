"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  const { clearCart } = useShoppingCart();
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-50vh mx-auto">
        <CheckCheck className="text-green-600 mx-auto w-16 h-16 my-6" />
      </div>
      <div className="text-center">
        <h2 className="md:text-2xl text-base text-gray-600 font-semibold">
          Payment Done!
        </h2>
        <p className="text-gray-500 my-2">
          Thank you for your purchase hope you enjoyed it.
        </p>
        <p>Have A Great Day!</p>
        <Button asChild className="w-32 mt-5">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
