import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="mb-8 sm:mb-0">
            <h2 className="font-bold text-xl mb-4">Company</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Contact us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Privacy policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="font-bold text-xl mb-4">Products</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Product 1
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Product 2
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Product 3
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Product 4
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="font-bold text-xl mb-4">Resources</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Case studies
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Whitepapers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">Connect</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  Twitter
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-gray-500">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-8 border-t border-gray-800 pt-8">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-gray-500">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-500">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-500">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
