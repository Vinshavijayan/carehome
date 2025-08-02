import React from 'react'
import Image from 'next/image'
import MainSec from './mainSec'

const FirstSec = () => {
  return (
<div className="relative bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-start justify-center text-center pt-16 md:pt-14 bg-[#E7EEF2]">
       

        <div className="relative z-10 max-w-8xl px-8 md:px-16 mt-8 md:mt-16 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white">
           <span className='text-secondary'>Contact</span>  <span className="text-primary">Us</span>{" "}
          </h1>

         
          <p className="text-xl md:text-2xl mb-8 text-black opacity-90 leading-relaxed max-w-5xl">
We're here to help and answer any questions you may have about our care home services. Reach out to us and we'll respond as soon as we can.    </p>
          
        </div>
      </div>

<MainSec />
      


<div className='p-4 lg:p-10'>

</div>

      </div>
  )
}

export default FirstSec