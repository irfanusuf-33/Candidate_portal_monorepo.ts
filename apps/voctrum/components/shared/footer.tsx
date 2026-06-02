// components/landing/footer.tsx
import { Instagram,  LinkedinIcon,  X } from "lucide-react"
import Link from "next/link"
import { SiFacebook } from "react-icons/si"
import Logo  from "@/public/Logo.png"

export default function Footer() {
  return (

    <>
      <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 b rounded flex items-center justify-center">
                 <img src={Logo.src}/>
              </div>
              <span className="font-bold">Voctrum</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Next-generation ERP solutions for modern businesses
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="#integrations" className="hover:text-primary">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/legal/terms" className="hover:text-primary">Terms</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-primary">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Voctrum Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/voctrumglobal/" target="_blank" rel="noopener noreferrer">
              <SiFacebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/company/voctrum/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/voctrumofficial/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  
  )
}   