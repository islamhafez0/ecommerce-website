"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="border-b mb-8">
      <div className="flex justify-between items-center px-4 max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-2xl md:text-4xl">
          Swift<span className="text-primary">Commerce</span>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <Link
                  className="text-primary text-lg font-semibold"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-gray-600 text-lg font-semibold"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            variant={"ghost"}
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className="font-semibold hidden text-xs text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
