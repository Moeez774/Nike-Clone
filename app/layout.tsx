import type { Metadata } from "next";
import "./globals.css";
import Header  from '../components/PcComponents/Header'
import AllHeaders from "@/components/PcComponents/AllHeaders";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nike. Just Do It. Nike.com",
  description: "Just Do It",
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body
      >

        <div>
          <AllHeaders />
        </div>
        <div>
          {children}
        </div>

        <div className="my-20 mx-6 mdx:mx-12">
          <Footer />
        </div>
      </body>
    </html>
  );
}
