import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="bg-slate-900">
      {/* Main container for the products section */}
      <div className="flex flex-wrap flex-col items-center text-center p-10 h-auto w-full">
        {/* Header section for the products title */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center p-2">
          <p className="text-indigo-700 font-bold text-4xl md:text-2xl">
            Our Products
          </p>
        </div>
        {/* Decorative line under the title */}
        <div className="w-40 h-1 border-b-4 border-yellow-300 rounded-2xl"></div>
        {/* Grid container for product items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full mt-10">
          {/* Product item: PW Skills Lab */}
          <div className="flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4">
            <Image src="/svgs/product1.svg" alt="" width={100} height={100} />
            <p className="text-white text-xl font-bold mt-4">PW SKills Lab</p>
            <p className="text-gray-500 font-bold">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          {/* Product item: Job Portal */}
          <div className="flex flex-col items-center mb-12 border-white border- rounded-xl p-4">
            <Image src="/svgs/product2.svg" alt="" width={100} height={100} />
            <p className="text-white text-xl font-bold mt-4">Job Portal</p>
            <p className="text-gray-500 font-bold">
              Use exceptional templates for a stand-out resume minus the sign up
              process.
            </p>
          </div>
          {/* Product item: Experience Portal */}
          <div className="flex flex-col items-center mb-12 border-white border- rounded-xl p-4">
            <Image src="/svgs/product3.svg" alt="" width={100} height={100} />
            <p className="text-white text-xl font-bold mt-4">
              Experience Portal
            </p>
            <p className="text-gray-500 font-bold">
              PW Skills's self-paced experience portal prioritises hands-on
              training with 570+ internship projects.
            </p>
          </div>
          {/* Product item: Become an Affiliate */}
          <div className="flex flex-col items-center mb-12 border-white border- rounded-xl p-4">
            <Image src="/svgs/product4.svg" alt="" width={100} height={100} />
            <p className="text-white text-xl font-bold mt-4">
              Become an Affiliate
            </p>
            <p className="text-gray-500 font-bold">
              Explore affiliate marketing opportunities with PW Skills and
              attain financial freedom.
            </p>
          </div>
          {/* Product item: Hall of Fame */}
          <div className="flex flex-col items-center mb-12 border-white border- rounded-xl p-4">
            <Image src="/svgs/product5.svg" alt="" width={100} height={100} />
            <p className="text-white text-xl font-bold mt-4">Hall of Fame</p>
            <p className="text-gray-500 font-bold">
              Our student placements and 100K+ career transitions speak volumes
              about our courses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
