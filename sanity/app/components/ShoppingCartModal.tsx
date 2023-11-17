"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Swal from "sweetalert2";
const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const [loading, setLoading] = useState(false);
  const handleCheckout = async (e: any) => {
    e.preventDefault();
    if (cartCount === 0) {
      Swal.fire({
        icon: "warning",
        title: "Empty Cart!",
        text: "You have no items in the cart to checkout.",
        position: "top",
        toast: true,
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
    try {
      setLoading(true);
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result", result.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="h-full sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <li className="py-6">You have no items in the cart.</li>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((product) => (
                    <li className="flex py-6" key={product.id}>
                      <div className="h-24 w-24 rounded-md overflow-hidden flex-shrink-0 border border-gray-300">
                        <Image
                          src={product.image as string}
                          alt={product.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="text-gray-900 text-base font-medium flex justify-between">
                            <h3>{product.name}</h3>
                            <p className="ml-4">${product.price}</p>
                          </div>
                          <p className="mt-2 text-gray-500 text-sm line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            QTY: {product.quantity}
                          </p>
                          <div className="flex">
                            <button
                              className="text-red-500 font-medium outline-none hover:text-red-600"
                              type="button"
                              onClick={() => removeItem(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-4">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">
              Shopping and taxes are calculated at checkout.
            </p>
            <div className="mt-4">
              <Button onClick={handleCheckout} className="w-full">
                {loading ? (
                  <span className="loader box-border inline-block border-b-transparent rounded-full border-5 w-6 h-6"></span>
                ) : (
                  "Checkout"
                )}
              </Button>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
