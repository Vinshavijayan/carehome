import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

interface ContactData {
  logo: string;
  name: string;
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

interface ApiResponse {
  error: boolean;
  message: string;
  data: ContactData;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

async function fetchSiteData(): Promise<ApiResponse> {
  try {
    const response = await fetch('https://carehome.infartechnologies.com/get_contact_api', {
      next: { revalidate: 3600 } 
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch site data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching site data:', error);
    throw error;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await fetchSiteData();
    
    return {
      title: data.name || "Good Day Care Homes",
      description: data.description || "A society that cares for its senior citizens",
      icons: {
        icon:  "/images/favicon.ico",
      },
      openGraph: {
        title: data.name,
        description: data.description,
        images: [{
          url: data.logo,
          width: 800,
          height: 600,
          alt: data.name,
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: data.name,
        description: data.description,
        images: [data.logo],
      },
    };
  } catch (error) {
    return {
      title: "Good Day Care Homes",
      description: "A society that cares for its senior citizens",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let siteData: ContactData | null = null;
  
  try {
    const response = await fetchSiteData();
    siteData = response.data;
  } catch (error) {
    console.error('Error in layout:', error);
  }

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}