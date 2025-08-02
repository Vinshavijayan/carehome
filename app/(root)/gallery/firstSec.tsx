import React from 'react'
import Image from 'next/image'
import MainSec from './mainSec'

const FirstSec = () => {
  return (
<div className="relative bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-start justify-center text-center pt-16 md:pt-14">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/gallery/bg.jpg"
            alt="Elderly care background"
            fill
            className="object-cover object-center brightness-90"
            quality={100}
            priority
            style={{
                objectPosition: 'center 30%' 
              }}
          />
        </div>

        <div className="relative z-10 max-w-8xl px-8 md:px-16 mt-8 md:mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white">
           Our  <span className="text-primary">Gallery</span>{" "}
          </h1>

         
          <p className="text-xl md:text-2xl mb-8 text-white opacity-90 leading-relaxed">
Take a glimpse into the warm, caring environment we provide for our residents.          </p>
          
        </div>
      </div>

<MainSec />
      


<div className='p-4 lg:p-10'>

</div>

      </div>
  )
}

export default FirstSec