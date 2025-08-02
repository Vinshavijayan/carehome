'use client';
import React, { useEffect, useState } from "react";
import { getRequest } from "@/api";
import Image from "next/image";

interface Services {
  pic: string;
  name: string;
  discription: string; 
}

const FirstSec = () => {
    const [services, setServices] = useState<Services[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);


      useEffect(() => {
        const fetchReview = async () => {
          try {
            setLoading(true);
            setError(false);
            const res = await getRequest(`/get_services_api`);
            console.log(res.data);
            setServices(res.data);
          } catch (err) {
            console.error("Failed to fetch services:", err);
            setError(true);
          } finally {
            setLoading(false);
          }
        };
    
        fetchReview();
      }, []);

       useEffect(() => {
        if (typeof window !== 'undefined' && !loading) {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    // Delay slightly to ensure DOM is fully rendered
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                        // Add a highlight effect
                        element.classList.add('highlight');
                        setTimeout(() => {
                            element.classList.remove('highlight');
                        }, 2000);
                    }, 100);
                }
            }
        }
    }, [loading]);
    

    
      if (loading) return <div className="w-full text-center py-4">Loading services...</div>;
      if (error) return <div className="w-full text-center py-4 text-red-500">Failed to load services</div>;
      if (services.length === 0) return <div className="w-full text-center py-4">No services available</div>;

 


  return (
<div className="relative bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-start justify-center text-center pt-16 md:pt-14">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/Services/bg-img.jpg"
            alt="Elderly care background"
            fill
            className="object-cover object-center brightness-50"
            quality={100}
            priority
            style={{
                objectPosition: 'center 30%' 
              }}
          />
        </div>

        <div className="relative z-10 max-w-8xl px-8 md:px-16 mt-8 md:mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white">
           Our  <span className="text-primary">Services</span>{" "}
          </h1>

         
          <p className="text-xl md:text-2xl mb-8 text-white opacity-90 leading-relaxed">
          Providing exceptional, personalized care services for your loved ones
          </p>
          
        </div>
      </div>


      <div className="relative z-20 max-w-8xl mx-auto px-4 md:px-16">

        {/* Blue section (now taller and narrower) */}
        <div className="relative -mt-16 md:-mt-34 lg:-mt-34 bg-primary rounded-xl shadow-lg mx-auto max-w-6xl h-26 md:h-34 lg:h-80">
          {/* Empty blue container - just for visual appearance */}
        </div>

 {/* Image at the center of the overlapping portion */}
            <div className="absolute left-1/2 transform -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 z-40 w-18 h-18 md:w-38 md:h-38 lg:w-52 lg:h-52 -mt-30 md:-mt-30 lg:-mt-69">
              <Image
                src="/images/icons/Group 128.png" 
                alt="Overlapping Image"
                width={90} 
                height={90} 
                className=" object-cover  "
                priority
              />
            </div>

        {/* White section (positioned over the blue one) */}
        <div className="relative z-30 -mt-24 md:-mt-32 lg:-mt-78 bg-white rounded-xl  mx-auto max-w-7xl py-6">
          <div className="container px-4 md:p-1 md:px-4 ">
           
            <p className="text-gray-600 text-lg md:text-xl lg:text-lg py-10 max-w-5xl mx-auto leading-relaxed text-center">
            we understand that each resident has unique needs. Our range of services is designed to provide the highest quality care while promoting independence, dignity, and well-being. Our trained staff are available 24/7 to ensure all needs are met with compassion and professionalism.
            </p>


{/* Dynamic services rendering */}
                        {services.map((service, index) => (
                            <div key={index} id={`service-${index}`}  className='max-w-6xl mx-auto rounded-xl overflow-hidden lg:py-8'>
                                <div className='flex flex-col lg:flex-row'>
                                    {/* Alternate layout for even/odd indexes */}
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className='w-full lg:w-[60%] bg-[#EDF4F8] p-8 rounded-xl lg:rounded-r-none flex items-center h-[350px] lg:mt-10 mt-4'>
                                                <div className='lg:-mt-[50px]'>
                                                    <h2 className='text-2xl font-bold mb-4 text-secondary'>{service.name}</h2>
                                                    <p className='text-sm md:text-base text-black'>{service.discription}</p>
                                                </div>
                                            </div>
                                            <div className='w-full lg:w-[40%] relative h-[450px] hidden lg:block'>
                                                <Image
                                                    src={service.pic}
                                                    alt={service.name}
                                                    fill
                                                    className='object-cover rounded-xl'
                                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                                    priority
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='w-full lg:w-[40%] relative h-[450px] hidden lg:block'>
                                                <Image
                                                    src={service.pic}
                                                    alt={service.name}
                                                    fill
                                                    className='object-cover rounded-xl'
                                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                                    priority
                                                />
                                            </div>
                                            <div className='w-full lg:w-[60%] bg-[#EDF4F8] p-8 rounded-xl lg:rounded-l-none flex items-center h-[350px] mt-4 lg:mt-10'>
                                                <div className='lg:-mt-[50px]'>
                                                    <h2 className='text-2xl font-bold mb-4 text-secondary'>{service.name}</h2>
                                                    <p className='text-sm md:text-base text-black'>{service.discription}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}



            
          </div>

         

        
        </div>







      </div>


<div className='p-4 lg:p-10'>

</div>

      </div>
  )
}

export default FirstSec