import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="bg-gray-900 text-white">
        {/* About Section */}
        <div className="flex flex-col items-center text-center p-16">
          <div className="w-full mb-10">
            <h2 className="text-indigo-700 font-bold text-4xl md:text-2xl">
              Our Mission
            </h2>
            <div className="w-40 h-1 border-b-4 border-yellow-300 rounded-2xl my-4 mx-auto"></div>
            <p className="text-gray-400 text-lg md:text-xl">
              At PW Skills, we aim to empower students by providing
              high-quality, affordable courses that enable them to excel in
              their careers. With a focus on hands-on learning and
              industry-aligned training, our goal is to create a brighter future
              for all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4">
              <Image src="/svgs/hard1.svg" alt="" width={100} height={100} />
              <p className="text-white text-3xl font-bold mt-4">
                Affordable Courses
              </p>
              <p className="text-gray-500 font-medium">
                High-quality education at prices everyone can afford.
              </p>
            </div>
            <div className="flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4">
              <Image src="/svgs/hard2.svg" alt="" width={100} height={100} />
              <p className="text-white text-3xl font-bold mt-4">
                Industry Experts
              </p>
              <p className="text-gray-500 font-medium">
                Learn from professionals with years of real-world experience.
              </p>
            </div>
            <div className="flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4">
              <Image src="/svgs/hard3.svg" alt="" width={100} height={100} />
              <p className="text-white text-3xl font-bold mt-4">
                Hands-On Projects
              </p>
              <p className="text-gray-500 font-medium">
                Gain practical skills with 500+ real-world projects.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-indigo-700 text-white py-16 px-8 text-center">
          <h2 className="text-4xl font-bold">Our Vision</h2>
          <div className="w-40 h-1 border-b-4 border-yellow-300 rounded-2xl my-4 mx-auto"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            To be the leading online learning platform, empowering students and
            professionals worldwide with knowledge, skills, and opportunities
            that transform their lives and the industries they work in.
          </p>
        </div>

        {/* Team Section */}
        <div className="py-16 px-8">
          <h2 className="text-indigo-700 font-bold text-4xl text-center">
            Meet Our Team
          </h2>
          <div className="w-40 h-1 border-b-4 border-yellow-300 rounded-2xl my-4 mx-auto"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/images/team1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-bold">David Kumar</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/team2.jpeg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-bold">Ayushman Mishra</h3>
              <p className="text-gray-400">CTO</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/team3.jpeg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-bold">Hitesh Nitesh</h3>
              <p className="text-gray-400">Lead Instructor</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-800 text-white py-16 px-8">
          <h2 className="text-4xl font-bold text-center">
            What Our Students Say
          </h2>
          <div className="w-40 h-1 border-b-4 border-yellow-300 rounded-2xl my-4 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg text-center">
              <Image
                src="/images/student1.jpeg"
                alt="Testimonial 1"
                className="w-20 h-20 rounded-full mx-auto mb-4"
                width={80}
                height={80}
              />
              <p className="text-gray-300 italic">
                "PW Skills has completely changed my career! The courses are
                easy to follow, and the projects helped me build a strong
                portfolio."
              </p>
              <h3 className="text-yellow-300 font-bold mt-4">- Gaurav Varma</h3>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg text-center">
              <Image
                src="/images/student2.png"
                alt="Testimonial 2"
                className="w-20 h-20 rounded-full mx-auto mb-4"
                width={80}
                height={80}
              />
              <p className="text-gray-300 italic">
                "I was able to land my dream job thanks to the skills I gained
                here. Highly recommend PW Skills to everyone!"
              </p>
              <h3 className="text-yellow-300 font-bold mt-4">- Deepak Kumar</h3>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg text-center">
              <Image
                src="/images/student3.jpeg"
                alt="Testimonial 3"
                className="w-20 h-20 rounded-full mx-auto mb-4"
                width={80}
                height={80}
              />
              <p className="text-gray-300 italic">
                "The instructors are very knowledgeable, and the course content
                is up-to-date with industry standards."
              </p>
              <h3 className="text-yellow-300 font-bold mt-4">- Deepti</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
