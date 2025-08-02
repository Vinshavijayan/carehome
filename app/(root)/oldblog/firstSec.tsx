import React from 'react'
import Image from 'next/image'
import MainSec from './mainSec'
import BlogsSec from './blogs'

const FirstSec = () => {
  return (
<div className="relative bg-gray-100">
      {/* Hero Section */}
     <div className="relative w-full h-[300px] md:h-[400px] flex items-start justify-center text-center pt-16 md:pt-14 bg-[#E7EEF2]">
  <div className="relative z-10 max-w-8xl px-8 md:px-16 mt-8 md:mt-16">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white">
      <span className='text-secondary'>Good Day Care Home </span>  <span className="text-black">Insights & Resources</span>{" "}
    </h1>

    <p className="text-lg md:text-xl mb-8 text-primary opacity-90 leading-relaxed max-w-5xl">
      Discover helpful articles, expert advice, and heartwarming stories about senior care and living.
    </p>
    
    {/* Search option */}
 <div className="relative max-w-3xl mx-auto">
  <input
    type="text"
    placeholder="Search articles..."
    className="w-full py-4 px-6 pr-12 rounded-full bg-white shadow-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-lg md:text-xl placeholder:text-lg md:placeholder:text-xl"
  />
  <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-secondary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</div>

    
  </div>
</div>

<MainSec />
<BlogsSec />
      


<div className='p-4 lg:p-10'>

</div>

      </div>
  )
}

export default FirstSec