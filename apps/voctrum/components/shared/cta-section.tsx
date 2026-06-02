// components/landing/cta-section.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Mail } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600" />
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to transform your operations?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book a personalized walkthrough today and see how Voctrum can help your business scale
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link href="#schedule">
                  Schedule a demo
                  <Calendar className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="mailto:contact@voctrum.com">
                  Email us
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-4">
              Typical response time: &lt; 24 hours
            </p>
          </motion.div>
        </div>
      </section>
  )
}