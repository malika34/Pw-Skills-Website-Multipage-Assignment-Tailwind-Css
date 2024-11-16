import React from "react";
import Image from "next/image";
import Link from "next/link";

const Students: React.FC = () => {
  return (
    <section className="bg-gray-900">
      {/* Main container for the section with centered content */}
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-16">
        {/* Container for the motivational quote */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center p-2">
          <p className="text-indigo-700 font-bold text-4xl md:text-2xl">
            "Pure Hardwork, and No Shortcuts!"
          </p>
        </div>
        {/* Decorative border line below the quote */}
        <div className="w-40 h-1 border-b-4 border-yellow-300 rounded-2xl"></div>
        {/* Container for the statistics cards */}
        <div className="flex justify-evenly flex-wrap w-full">
          {/* Card for the number of different courses */}
          <div className="w-46 flex items-center flex-col mb-12">
            <Image src="/svgs/hard1.svg" alt="" width={100} height={100} />
            <p className="text-3xl text-white font-bold">600+</p>
            <p className="text-2xl text-gray-500 font-medium">
              Different Courses
            </p>
          </div>
          {/* Card for the number of students enrolled */}
          <div className="w-46 flex items-center flex-col mb-12">
            <Image src="/svgs/hard2.svg" alt="" width={100} height={100} />
            <p className="text-3xl text-white font-bold">700,000+</p>
            <p className="text-2xl text-gray-500 font-medium">
              Students Enrolled
            </p>
          </div>
          {/* Card for the number of successful transitions */}
          <div className="w-46 flex items-center flex-col mb-12">
            <Image src="/svgs/hard3.svg" alt="" width={100} height={100} />
            <p className="text-3xl text-white font-bold">10,000+</p>
            <p className="text-2xl text-gray-500 font-medium">
              Sucessful Transition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
