"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React,{useState,useEffect} from "react";
import { getRequest } from "@/api";

interface Contact {
  logo: string;
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

export default function LgHeader() {

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

  const pathname = usePathname();

  // Helper function to determine if link is active
  const isActive = (href: string) => {
    // Handle home page separately
    if (href === '/home') return pathname === '/' || pathname === '/home';
    return pathname.startsWith(href);
  };

  // Navigation items with their hrefs
  const leftNavItems = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' }
  ];

  const rightNavItems = [
    { name: 'Newsletter', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="hidden md:block">
      <header className="sticky top-0 z-50 w-full bg-[#2f899f] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="container mx-auto flex h-30 items-center px-4">
          {/* Left side navigation - Home, Services, About Us */}
          <nav className="hidden md:flex flex-1 items-center justify-start gap-6 md:gap-10 lg:gap-20 text-lg md:text-xl pl-0 md:pl-10 lg:pl-14">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors font-bold hover:drop-shadow-lg ${
                  isActive(item.href)
                    ? 'text-secondary underline underline-offset-8 decoration-3'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Center logo - always visible but might adjust size */}
          <div className="flex flex-1 md:flex-none items-center justify-center">
            <Link href="/home" className="flex items-center hover:drop-shadow-2xl">
              <div className="rounded-full overflow-hidden">
                {loading || !contact?.logo ? (
                  <div className="h-16 md:h-20 lg:h-24 w-16 md:w-20 lg:w-24 bg-gray-300 animate-pulse rounded-full" />
                ) : (
                  <Image
                    src={contact.logo}
                    alt="Logo"
                    width={140}
                    height={140}
                    className="h-16 md:h-20 lg:h-24 w-auto object-cover"
                    priority
                  />
                )}
              </div>
            </Link>
          </div>

          {/* Right side navigation - Blog, Gallery, Contact */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-6 md:gap-10 lg:gap-20 text-lg md:text-xl">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors font-bold hover:drop-shadow-2xl ${
                  isActive(item.href)
                  ? 'text-secondary underline underline-offset-8 decoration-3'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div> 
  );
}