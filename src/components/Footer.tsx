import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white pt-8 md:px-12">
      {/* Main container for footer content */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-8 px-8">
        {/* Logo and contact information */}
        <div className="flex flex-col items-start mb-6">
          <Image
            className="w-40 h-16 mb-4"
            src="/images/light-logo.png"
            alt="PW Skills Logo"
            width={160}
            height={64}
          />

          {/* Email contact section */}
          <div className="flex flex-row mb-10">
            <Image
              className="w-5 mx-2 filter invert"
              src="/svgs/mail-icon.svg"
              alt=""
              width={20}
              height={20}
            />
            <p>Email us: support@pwskills.com</p>
          </div>

          {/* Social media links */}
          <div className="flex flex-row mb-8">
            <Link
              href="#"
              className="mx-2 hover:scale-110 transition-transform duration-200"
              aria-label="Facebook"
            >
              <Image
                className="w-7 filter invert"
                src="/svgs/social1.svg"
                alt="Facebook"
                width={28}
                height={28}
              />
            </Link>
            <Link
              href="#"
              className="mx-2 hover:scale-110 transition-transform duration-200"
              aria-label="Twitter"
            >
              <Image
                className="w-7 filter invert"
                src="/svgs/social2.svg"
                alt="Twitter"
                width={28}
                height={28}
              />
            </Link>
            <Link
              href="#"
              className="mx-2 hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn"
            >
              <Image
                className="w-7 filter invert"
                src="/svgs/social3.svg"
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </Link>
            <Link
              href="#"
              className="mx-2 hover:scale-110 transition-transform duration-200"
              aria-label="Instagram"
            >
              <Image
                className="w-7 filter invert"
                src="/svgs/social4.svg"
                alt="Instagram"
                width={28}
                height={28}
              />
            </Link>
            <Link
              href="#"
              className="mx-2 hover:scale-110 transition-transform duration-200"
              aria-label="YouTube"
            >
              <Image
                className="w-7 filter invert"
                src="/svgs/social5.svg"
                alt="YouTube"
                width={28}
                height={28}
              />
            </Link>
            <Link
              href="#"
              className="mx-2 hover:scale-110 transition-transform duration-200"
              aria-label="GitHub"
            >
              <Image
                className="w-7 filter invert"
                src="/svgs/social6.svg"
                alt="GitHub"
                width={28}
                height={28}
              />
            </Link>
            <Link
              href="#"
              className="mx-2 hover:scale-110 transition-transform duration-200"
              aria-label="Pinterest"
            >
              <Image
                className="w-7 filter invert"
                src="/svgs/social7.svg"
                alt="Pinterest"
                width={28}
                height={28}
              />
            </Link>
          </div>

          {/* ISO certification logo */}
          <Image
            className="w-32 h-32"
            src="/svgs/iso-logo.svg"
            alt="ISO Certification"
            width={128}
            height={128}
          />
        </div>

        {/* Links Section 1 */}
        <div>
          <h2 className="font-bold text-xl mt-4">PW Skills</h2>
          <div className="w-16 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <ul className="space-y-2">
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                About Us
              </li>
            </Link>
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                FAQs
              </li>
            </Link>
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                Privacy Policy
              </li>
            </Link>
          </ul>
        </div>

        {/* Links Section 2 */}
        <div>
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-16 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <ul className="space-y-2">
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                PW Skills Lab
              </li>
            </Link>
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                Job Portal
              </li>
            </Link>
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                Experience Portal
              </li>
            </Link>
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                Become an Affiliate
              </li>
            </Link>
          </ul>
        </div>

        {/* Links Section 3 */}
        <div>
          <h2 className="font-bold text-xl mt-4">Company</h2>
          <div className="w-16 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <ul className="space-y-2">
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                Contact Us
              </li>
            </Link>
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                Terms of Service
              </li>
            </Link>
            <Link href="#">
              <li className="hover:text-yellow-300 transition duration-200">
                Careers
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full text-center border-t border-gray-700 py-4 mt-8">
        <p className="text-sm text-gray-400">
          &copy; 2024 PW Skills. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Crafted with ❤️ by{" "}
          <span className="text-yellow-300 font-bold hover:underline">
            Malik Musadiq Ahmed
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
