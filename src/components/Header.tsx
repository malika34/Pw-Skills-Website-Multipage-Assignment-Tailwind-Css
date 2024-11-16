import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  return (
    <nav className="w-full h-14 bg-indigo-600 flex justify-between items-center px-4 md:px-4">
      {/* Logo section */}
      <Link href="/">
        <Image
          className="w-40 filter invert"
          src="/images/logo.png"
          alt="pw-skills-logo"
          width={160}
          height={40}
        />
      </Link>
      {/* Navigation links for larger screens */}
      <ul className="md:flex hidden justify-around space-x-12 font-medium items-center">
        <li className="text-white">
          <Link
            className="hover:font-bold hover:transition-transform hover:scale-105 hover:underline hover:text-yellow-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="text-white">
          <Link
            className="hover:font-bold hover:transition-transform hover:scale-105 hover:underline hover:text-yellow-300"
            href="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          {/* Login/SignUp button */}
          <div className="bg-green-600 px-4 py-2 rounded-xl text-white font-bold hover:bg-green-700 cursor-pointer hover:scale-105 transition-transform duration-200">
            <button>Login/SignUp</button>
          </div>
        </li>
      </ul>
      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden text-4xl">
        <Sheet>
          <SheetTrigger>&#8801;</SheetTrigger>
          <SheetContent className="bg-white shadow-xl rounded-xl p-8">
            <SheetHeader>
              <SheetTitle className="text-center text-3xl font-extrabold text-indigo-700 mb-6">
                Menu
              </SheetTitle>
              <SheetDescription className="flex flex-col items-center space-y-6 py-10">
                <Link
                  className="text-xl text-indigo-700 hover:text-yellow-400 hover:underline transition-colors duration-200"
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  className="text-xl text-indigo-700 hover:text-yellow-400 hover:underline transition-colors duration-200"
                  href={"/about"}
                >
                  About Us
                </Link>
                <Link
                  className="text-xl text-indigo-700 hover:text-yellow-400 hover:underline transition-colors duration-200"
                  href={"/"}
                >
                  Login/Signup
                </Link>
                {/* Social media links */}
                <div className="flex flex-row mt-10 space-x-5 py-8">
                  <Link
                    href="#"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="Facebook"
                  >
                    <Image
                      className="w-8"
                      src="/svgs/social1.svg"
                      alt="Facebook"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="Twitter"
                  >
                    <Image
                      className="w-8"
                      src="/svgs/social2.svg"
                      alt="Twitter"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="LinkedIn"
                  >
                    <Image
                      className="w-8"
                      src="/svgs/social3.svg"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="Instagram"
                  >
                    <Image
                      className="w-8"
                      src="/svgs/social4.svg"
                      alt="Instagram"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="YouTube"
                  >
                    <Image
                      className="w-8"
                      src="/svgs/social5.svg"
                      alt="YouTube"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="GitHub"
                  >
                    <Image
                      className="w-8"
                      src="/svgs/social6.svg"
                      alt="GitHub"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="Pinterest"
                  >
                    <Image
                      className="w-8"
                      src="/svgs/social7.svg"
                      alt="Pinterest"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
