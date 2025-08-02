import React from 'react'
import Image from 'next/image'
import MainSec from './mainSec'
import RelatedSec from './related'

interface SingleBlogProps {
  encrypted_id: string;
}


const SingleBlog = ({ encrypted_id }: SingleBlogProps) => {

  console.log(encrypted_id); 
  
  return (
<div className="relative bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-start justify-center text-center pt-16 md:pt-14">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/blog/blog.jpg"
            alt="Elderly care background"
            fill
            className="object-cover object-center brightness-40"
            quality={100}
            priority
            style={{
                objectPosition: 'center 50%' 
              }}
          />
        </div>

  
      </div>


      <MainSec encrypted_id={encrypted_id}/>
      <RelatedSec encrypted_id={encrypted_id}/>


<div className='p-4 lg:p-10'>

</div>

      </div>
  )
}

export default SingleBlog