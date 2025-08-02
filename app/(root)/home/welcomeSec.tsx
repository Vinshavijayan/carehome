'use client';
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { getRequest } from "@/api";

interface Contact {
  logo: string;
  name:string;
  address: string;
  email: string;
  MainLine: string;
  admissions: string;
  fax: string;
  map: string;
  our_worktime: string;
  description: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

const WelcomeSec = () => {

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchReview = async () => {
        try {
          setLoading(true);
          // setError(false);
          const res = await getRequest(`/get_contact_api`);
          console.log(res.data);
          setContact(res.data);
        } catch (err) {
          console.error("Failed to fetch contact:", err);
          // setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchReview();
    }, []);

  return (
    <div className=''>


<div className="container px-4 py-2 md:p-1 md:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight mt-14 text-center">
              <span className="text-primary">Welcome to</span>{" "}
              <span className="text-secondary">{contact?.name}</span>{" "}
              <br className="hidden md:block" />{" "}
              <span className="text-primary">at Rotherham</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl lg:text-lg py-4 max-w-5xl mx-auto leading-relaxed">
              "At {contact?.name}, we believe in providing exceptional care
              and support to help individuals maintain their independence and
              quality of life in the comfort of their own homes. Located in
              Rotherham, our dedicated team of caregivers is committed to
              delivering personalized, compassionate, and professional care
              tailored to meet the unique needs of each client."
            </p>
            <div className="mt-8 mx-auto w-full max-w-5xl">
              <div className="relative overflow-hidden rounded-xl shadow-2xl h-[300px] md:h-[400px]">
                <Image
                  src="/images/home-1.jpg"
                  alt="care home"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover object-center transition-opacity duration-300 hover:opacity-95"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/home-bg.png"
                alt="Elderly care background"
                fill
                className="object-cover grayscale-[35%]"
                quality={80}
                priority={true}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-white/80"></div>
            </div>

           
          </div>


    </div>
  )
}

export default WelcomeSec