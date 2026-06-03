import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voctrum ",
  description: "A guided ERP web experience for products, services, and teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(  "font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar/>

        <TooltipProvider>  <main className="space-y-12">{children}</main></TooltipProvider>  
        <Toaster richColors position="top-right" /> 

        <Footer/>
         
     </body>
    </html>
  );
}
