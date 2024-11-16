import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section>
      {/* Header section containing responsive images for different screen sizes */}
      <header className="w-full h-auto">
        {/* Image for desktop view, hidden on smaller screens */}
        <Image
          className="w-full hidden md:block"
          src="/images/web-banner.jpg"
          alt=""
          layout="responsive"
          width={1920}
          height={1080}
        />
        {/* Image for mobile view, visible only on smaller screens */}
        <Image
          className="w-full md:hidden"
          src="/images/mobile-banner.jpg"
          alt=""
          layout="responsive"
          width={1080}
          height={1920}
        />
      </header>
    </section>
  );
};

export default Hero;
