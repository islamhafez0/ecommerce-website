import Link from "next/link";
import React from "react";
import Image from "next/image";
import goglePlayImage from "../assets/play.jpg";
import playStoreImage from "../assets/app.jpg";
import cardsImage from "../assets/cards.png";
import { Twitter, Instagram, Facebook, Copyright } from "lucide-react";
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 border-t-2 py-8">
      <Link href="/" className="font-bold text-2xl md:text-4xl">
        Shop<span className="text-primary">pr</span>
      </Link>
      <div className="grid mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
        <div>
          <h4 className="text-gray-800 mt-8 mb-4 text-xl font-bold">Contact</h4>
          <ul>
            <li className="text-gray-600 mt-2">
              {" "}
              <span className="font-bold text-gray-800 text-sm">
                Address:
              </span>{" "}
              Egypt, Itay
            </li>
            <li className="text-gray-600 mt-2">
              {" "}
              <span className="font-bold text-gray-800 text-sm">
                Phone:
              </span>{" "}
              +20 1097423297
            </li>
            <li className="text-gray-600 mt-2">
              <span className="font-bold text-gray-800 text-sm">Email:</span>{" "}
              Mail@ex.com
            </li>
            <li className="text-gray-600 mt-2">
              <span className="font-bold text-gray-800 text-sm">Website:</span>{" "}
              <a href="https://eslamhafez-portfolio.web.app" target="_blank">
                EslamHafez
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <Twitter className="cursor-pointer" />
            <Facebook className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="text-gray-800 mt-8 mb-4 text-xl font-bold">About</h4>
          <ul className="flex flex-col">
            <Link href="/" className="text-gray-600">
              About Us
            </Link>
            <Link href="/" className="text-gray-600 mt-2">
              Delivery Information
            </Link>
            <Link href="/" className="text-gray-600 mt-2">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-600 mt-2">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-gray-600 mt-2">
              Contact Us
            </Link>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-800 mt-8 mb-4 text-xl font-bold">Links</h4>
          <ul className="flex flex-col">
            <Link href="/" className="text-gray-600">
              Home
            </Link>
            <Link href="/Men" className="text-gray-600 mt-2">
              Men
            </Link>
            <Link href="/Women" className="text-gray-600 mt-2">
              Women
            </Link>
            <Link href="/Teens" className="text-gray-600 mt-2">
              Teens
            </Link>
            <Link href="/all" className="text-gray-600 mt-2">
              All
            </Link>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-800 mt-8 mb-4 text-xl font-bold">
            Install App
          </h4>
          <ul>
            <li className="text-gray-600 mt-2 mb-3">
              App Store Or Google Play
            </li>
            <Link href="/">
              <Image
                className="border-primary border border-solid rounded mb-2"
                src={goglePlayImage}
                alt="pay"
                width={200}
                height={100}
              />
              <Image
                className="border-primary border border-solid rounded mb-2"
                src={playStoreImage}
                alt="pay"
                width={200}
                height={100}
              />
            </Link>
            <small>Secured Payment Gateways</small>
            <Link href="/">
              <Image
                className="mt-8"
                src={cardsImage}
                alt="pay"
                width={230}
                height={100}
              />
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-1 text-gray-400 lg:justify-start lg:mt-0 justify-center mt-5">
        <Copyright size={20} /> <span>Eslam Hafez {currentYear}</span>
      </div>
    </div>
  );
};

export default Footer;
