import React from "react";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SmScreen from "@/components/whatsapp/smScreen";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 
      <main>
        <Header />
        {children}
        <SmScreen />
        <Footer />
      </main>

  );
}
