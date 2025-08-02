import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MainSec = () => {
  return (
   <div className="container mx-auto px-4 py-6">
    <div>
      <Link href='blog'>
      <span className='font-bold text-xl px-2'>← </span>Back to Blog
      </Link>
    </div>

    {/* New blog content section */}
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
      {/* Category and date row */}
      <div className="flex items-center gap-6 mb-4">
        <span className="bg-[#D4E7FD] text-black px-3 py-2 rounded-md text-sm font-light">
          Technology
        </span>
        <span className="text-gray-500 text-sm">
          Published : June 26, 2023
        </span>
      </div>

      {/* Main title */}
      <h1 className="text-3xl font-bold mb-4 pt-4">The Importance of Social Activities for Elderly Residents</h1>
      
      {/* First paragraph */}
      <p className="text-gray-700 font-light mb-6">
        At Sunset Gardens, we've witnessed firsthand how meaningful social engagement can dramatically improve the quality of life for our residents. Social activities aren't just about passing time they're vital components of comprehensive elderly care that nourish the mind, body, and spirit.
      </p>

      {/* Subtitle */}
      <h2 className="text-2xl font-semibold py-6 text-secondary">The Science Behind Social Connection</h2>
      
      {/* Second paragraph */}
      <p className="text-gray-700 mb-6">
      Research consistently shows that seniors who participate in regular social activities experience
      </p>

      {/* Bullet points */}
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>30% lower risk of developing dementia</li>
        <li>Improved immune system function</li>
        <li>Reduced symptoms of depression and anxiety</li>
        <li>Better cardiovascular health</li>
        <li>Increased longevity</li>
      </ul>


<div className="w-full bg-[#D4E7FD] p-4 rounded-md">
  <div className="flex flex-col">
    <p className="text-black italic ">"The difference in residents who participate in our social programs versus those who don't is night and day. Their eyes light up, they move better, and they simply seem younger."</p>
    <span className="text-secondary self-end">- Sarah Johnson, Activities Director</span>
  </div>
</div>



<div>
  {/* Subtitle */}
  <h2 className="text-2xl font-semibold mb-4 text-secondary pt-8">Our Approach to Social Engagement</h2>
  
  {/* Second paragraph */}
  <p className="text-gray-700 mb-6">
   We've developed a multi-faceted program that addresses different aspects of wellbeing through social interaction:
  </p>

  {/* Cards row */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-8">
    {/* Card 1 */}
    <div className="bg-[#F7F7F7] rounded-lg p-6 px-8 hover:shadow-lg transition-shadow">
  <div className="flex items-start mb-4">
    <div className="text-secondary mr-3 text-2xl">
      <Image 
        src="/images/blog/music.png" // Replace with your actual image path
        alt="AI & Machine Learning Icon"
        width={32}
        height={32}
        className="h-6 w-6 mt-1"
      />
    </div>
    <h3 className="text-lg font-semibold text-secondary">Music & Dance Therapy</h3>
  </div>
  <p className="text-black font-light">
  Weekly music sessions where residents can sing along to familiar tunes or even play simple instruments. Our monthly dance socials get everyone moving, regardless of mobility level.
  </p>
</div>

    {/* Card 2 */}
    <div className="bg-[#F7F7F7] rounded-lg p-6 px-8 hover:shadow-lg transition-shadow">
  <div className="flex items-start mb-4">
    <div className="text-secondary mr-3 text-2xl">
      <Image 
        src="/images/blog/music.png" // Replace with your actual image path
        alt="AI & Machine Learning Icon"
        width={32}
        height={32}
        className="h-6 w-6 mt-1"
      />
    </div>
    <h3 className="text-lg font-semibold text-secondary">Intergenerational Dining</h3>
  </div>
  <p className="text-black font-light">
    Special meals where local school children join our residents, creating meaningful connections across generations and stimulating conversation.
  </p>
</div>

    {/* Card 3 */}
   <div className="bg-[#F7F7F7] rounded-lg p-6 px-8 hover:shadow-lg transition-shadow">
  <div className="flex items-start mb-4">
    <div className="text-secondary mr-3 text-2xl">
      <Image 
        src="/images/blog/music.png" // Replace with your actual image path
        alt="AI & Machine Learning Icon"
        width={32}
        height={32}
        className="h-6 w-6 mt-1"
      />
    </div>
    <h3 className="text-lg font-semibold text-secondary">Memory Sharing Circles</h3>
  </div>
  <p className="text-black font-light">
    Guided sessions where residents share stories from their past, validating their life experiences and creating bonds through shared history.
  </p>
</div>

    {/* Card 4 */}
   <div className="bg-[#F7F7F7] rounded-lg p-6 px-8 hover:shadow-lg transition-shadow">
  <div className="flex items-start mb-4">
    <div className="text-secondary mr-3 text-2xl">
      <Image 
        src="/images/blog/music.png" // Replace with your actual image path
        alt="AI & Machine Learning Icon"
        width={32}
        height={32}
        className="h-6 w-6 mt-1"
      />
    </div>
    <h3 className="text-lg font-semibold text-secondary">Purposeful Volunteering</h3>
  </div>
  <p className="text-black font-light">
    Opportunities for residents to contribute, whether it's knitting blankets for newborns or writing letters to soldiers, maintaining their sense of purpose.
  </p>
</div>
  </div>
</div>

<div>
  {/* Subtitle */}
  <h2 className="text-2xl font-semibold mb-6 text-secondary pt-8">Measuring the Impact</h2>
  
  {/* Second paragraph */}
  <p className="text-gray-700 mb-6">
Since implementing our enhanced social program, we've seen remarkable results:
  </p>

  {/* 6 lines of text with text-xl size */}
  <div className="text-2xl">
    <div className='py-3'>78%</div>
    <div className='py-3'>Increase in resident satisfaction scores</div>
    <div className='py-3'>42%</div>
    <div className='py-3'>Reduction in reported loneliness</div>
    <div className='py-3'>65%</div>
    <div className='py-3'>Fewer behavioral incidents</div>
  </div>

  {/* Additional paragraph */}
  <p className="text-gray-700 mt-6">
 Social connection is not a luxury in elderly care—it's a necessity. At Sunset Gardens, we're committed to creating an environment where every resident feels valued, engaged, and connected to their community.
  </p>
  <p className="text-gray-700 pb-8">
If you'd like to learn more about our social programs or schedule a visit, please don't hesitate to contact us.  </p>

    {/* Full width line */}
  <hr className="w-full border-t border-gray-300 my-6" />
</div>

<div className="flex flex-col md:flex-row items-center gap-6 my-12">
  {/* Rounded Image on Left */}
  <div className="w-20 h-20 md:w-30 md:h-30 relative shrink-0">
    <Image
      src="/images/blog/image.png" // Replace with your image path
      alt="Profile Picture"
      fill
      className="rounded-full object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>

  {/* Text Content on Right */}
  <div className="text-center md:text-left">
    <h3 className="text-2xl font-bold text-gray-800">Dr. Emily Wilson</h3>
    <p className="text-2xl font-light text-gray-600 mt-3">Director of Resident Wellbeing</p>
  </div>
</div>


    </div>
   </div>
  )
}

export default MainSec