// components/landing/navbar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "radix-ui"
import { useRouter } from "next/navigation"
import Logo  from "@/public/Logo.png"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

 const navItems = [
  {name: "Home", href: "/" },
  {name: "Products", href: "/products" },
  {name: "Services", href: "/services" },
  {name: "Industries", href: "/industries" },
  {name: "About", href: "/about" },
  { name: "Careers", href: "/carrers" },
  {name: "Contact", href: "/contact" },
];

const router = useRouter()

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                  <img src={Logo.src}/>
                </div>
            {/* <span className="font-bold text-xl">Voctrum</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={()=>{router.push("https://erp.voctrum.com/login")}}>
              Sign In
            </Button>
            <Button size="sm" onClick={()=>{router.push("/products/register")}}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>


            <SheetContent side="right" className="w-75 sm:w-100">


              <div className="flex flex-col h-full p-5">


                <div className="flex items-center justify-between mb-8 ">


                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                       <img src={Logo.src}/>
                    </div>
                    {/* <span className="font-bold text-xl">Voctrum</span> */}
                  </Link>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"  >
                      {item.name}
                    </Link>
                  ))}


                  {/* <Separator className="my-4" /> */}
                  <Button variant="outline" className="w-full justify-start" onClick={()=>{router.push("https://erp.voctrum.com/login")}}>
                    Sign In
                  </Button>
                  <Button className="w-full justify-start" onClick={()=>{router.push("/products/register")}}>
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>



        </div>
      </div>
    </nav>
  )
}