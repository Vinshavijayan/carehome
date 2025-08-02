import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServeSec from '../landing-section/serve';
import WhyChooseUs from "./chooseUs";
import LandingFooter from "./footer";

const LandingSec = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/landing-1.jpg"
            alt="Background"
            fill
            className="object-cover grayscale-[15%]"
            quality={100}
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,..."
          />
        </div>

        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-opacity-30"></div>

        {/* More opaque white half oval shape at the bottom - responsive height */}
        <div className="absolute bottom-0 left-0 w-full h-34 md:h-76 bg-gradient-to-t from-white via-white to-transparent opacity-100 rounded-t-[50%]"></div>

        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-32">
          {/* Logo */}
          <div className="mb-6 md:mb-8 w-24 h-24 md:w-64 md:h-64 relative">
            <Image
              src="/images/LOGO 2.png"
              alt="Company Logo"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}

<div className="pb-12 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {/* Card 1 */}
      <Link href="/home" passHref>
  <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-all duration-500 lg:hover:-translate-y-2 hover:shadow-xl border -translate-y-2 lg:translate-y-0">
    <Image
      src="/images/web1.jpg"
      alt="Project 1"
      width={400}
      height={300}
      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 lg:group-hover:scale-105 scale-105 lg:scale-100"
    />
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300">
      <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold transition-opacity duration-300 px-2 text-center">
        Good Day Care <br /> Homes LTD
      </span>
    </div>
  </div>
</Link>

      {/* Card 2 */}

     <Link href="/home" passHref>
  <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-all duration-500 lg:hover:-translate-y-2 hover:shadow-xl border -translate-y-2 lg:translate-y-0">
    <Image
      src="/images/web1.jpg"
      alt="Project 1"
      width={400}
      height={300}
      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 lg:group-hover:scale-105 scale-105 lg:scale-100"
    />
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300">
      <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold transition-opacity duration-300 px-2 text-center">
      Alexander Court Nursing Home
      </span>
    </div>
  </div>
</Link>

      {/* Card 3 */}

 <Link href="/home" passHref>
  <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-all duration-500 lg:hover:-translate-y-2 hover:shadow-xl border -translate-y-2 lg:translate-y-0">
    <Image
      src="/images/web1.jpg"
      alt="Project 1"
      width={400}
      height={300}
      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 lg:group-hover:scale-105 scale-105 lg:scale-100"
    />
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300">
      <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold transition-opacity duration-300 px-2 text-center">
   Jubilee Care Home
      </span>
    </div>
  </div>
</Link>

  

      {/* Card 4 */}
      <Link href="/home" passHref>
  <div className="relative group overflow-hidden rounded-lg cursor-pointer transition-all duration-500 lg:hover:-translate-y-2 hover:shadow-xl border -translate-y-2 lg:translate-y-0">
    <Image
      src="/images/web1.jpg"
      alt="Project 1"
      width={400}
      height={300}
      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 lg:group-hover:scale-105 scale-105 lg:scale-100"
    />
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300">
      <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold transition-opacity duration-300 px-2 text-center">
   Jubilee Care Home
      </span>
    </div>
  </div>
</Link>
    </div>
  </div>
</div>

{/* Primary Background Section */}
<div className="bg-primary  relative">
  {/* White Background Section Overlay */}
  <div className="relative -mb-12 md:-mb-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white  shadow-lg p-8 md:p-12 max-w-8xl mx-auto">
        
        <div className="prose prose-lg text-gray-600 max-w-none text-center">
          <p className="mb-8">
          We believe that every individual deserves to be treated with dignity, compassion, and respect. As a leading care associate provider, we are committed to delivering exceptional care services that support not only the physical needs but also the emotional and mental well-being of every person we serve. Our goal is simple: to enhance lives by delivering professional, personalized, and reliable care that makes a meaningful difference.

          </p>
          <p className="mb-6">
          We provide skilled, compassionate, and dependable care associates to healthcare institutions, long-term care facilities, and private homes. Our associates play a vital role in improving patient experiences, promoting independence, and easing the demands on families and medical professionals alike.

          </p>
         
        </div>
      </div>
    </div>
  </div>
</div>

{/* Spacer to ensure content below isn't overlapped */}
<div className="pt-16 md:pt-24"></div>
<ServeSec />
<WhyChooseUs />
<LandingFooter />

    </div>
  );
};

export default LandingSec;