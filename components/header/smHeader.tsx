"use client";
import React,{useState,useEffect} from "react";
import { getRequest } from "@/api";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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

export default function SmHeader() {

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to determine if link is active
  const isActive = (href: string) => {
    if (href === '/home') return pathname === '/' || pathname === '/home';
    return pathname.startsWith(href);
  };

  // Combined navigation items
  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Newsletter', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="md:hidden">
      <header className="sticky top-0 z-50 w-full bg-[#2f899f] text-white shadow-lg">
        <div className="container mx-auto flex h-20 items-center px-4 justify-between">
          {/* Logo on the left */}
          <Link href="/home" className="flex items-center hover:drop-shadow-2xl">
            <div className="rounded-full overflow-hidden">
              {loading || !contact?.logo ? (
                <div className="h-12 w-12 bg-gray-300 animate-pulse rounded-full" />
              ) : (
                <Image
                  src={contact.logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="h-12 w-auto object-cover"
                  priority
                />
              )}
            </div>
          </Link>

          {/* Hamburger menu button on the right */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#2f899f] shadow-lg z-50">
            <nav className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-center py-2 text-lg font-bold ${
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
        )}
      </header>
    </div>
  );
}