import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const commonLinkClass =
    "text-accent dark:text-secondary hover:bg-blue-100 hover:dark:bg-gray-700  rounded text-md  p-2";
  const topBorder = "border-t-[.5px] dark:border-gray-600";
  return (
    <footer
      className={`bg-secondary dark:bg-accent text-accent dark:secondary ${topBorder}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="mb-8 sm:mb-0">
            <h2 className="font-bold text-xl mb-4">Company</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Contact us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Privacy policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="font-bold text-xl mb-4">Products</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Product 1
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Product 2
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Product 3
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Product 4
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="font-bold text-xl mb-4">Resources</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Case studies
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Whitepapers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">Connect</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  Twitter
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className={`${commonLinkClass}`}>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`flex justify-between mt-8 ${topBorder} pt-8`}>
          <p>&copy; 2023 Job Management. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className={`${commonLinkClass}`}>
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className={`${commonLinkClass}`}>
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" className={`${commonLinkClass}`}>
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
