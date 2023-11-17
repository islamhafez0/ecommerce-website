import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Oops! Something Went Wrong",
};

const ErrorPage = () => {
  return (
    <div className="py-10 text-center">
      <AlertCircle className="text-red-600 mx-auto w-16 h-16 my-6" />
      <h2 className="md:text-2xl text-base text-gray-600 font-semibold">
        Oops! Something Went Wrong
      </h2>
      <p className="text-gray-500 my-2">
        It seems there was an issue processing your payment.
      </p>
      <Button asChild className="w-32 mt-5">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
