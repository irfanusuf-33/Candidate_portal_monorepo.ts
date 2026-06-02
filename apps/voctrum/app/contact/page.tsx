// app/contact/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  CalendarClock, 
  Inbox, 
  MessageSquare, 
  Phone,
  MapPin,
  Clock,
  Users,
  Building2,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Send,
  Mail,
  Headphones,
  Globe,
  Shield,
  HelpCircle,
  Download,
  Calendar,
  User,
  FileText,
  Briefcase
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CTASection from "@/components/shared/cta-section"

const channels = [
  {
    title: "Book a walkthrough",
    description: "Choose a 30-minute slot to see the product with your data flows in mind.",
    longDescription: "Personalized demo tailored to your usec cases . We'll walk through relevant modules and answer your questions.",
    icon: CalendarClock,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    action: "Schedule time",
    href: "#schedule",
    availability: "Next available: Today"
  },
  {
    title: "Email the team",
    description: "Send questions or requirements; we respond within one business day.",
    longDescription: "Perfect for detailed inquiries, feature requests, or sharing documentation. Our team reviews every message.",
    icon: Inbox,
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
    action: "contact@voctrum.com  ",
    href: "mailto:contact@voctrum.com",
    availability: "Response: < 24 hours"
  },
  {
    title: "Chat with us",
    description: "Open a quick thread for lightweight questions about modules or pricing.",
    longDescription: "Real-time chat for quick questions. Get instant answers about features, pricing, or implementation.",
    icon: MessageSquare,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    action: "Start chat",
    href: "#chat",
    availability: "Online: 9am-5pm EST"
  },
]

const faqs = [
  {
    question: "How quickly do you respond?",
    answer: "Email inquiries receive a response within 24 hours. Chat is typically instant during business hours. Demo requests are confirmed within 2 hours."
  },
  {
    question: "Do you offer implementation support?",
    answer: "Yes! We provide guided implementation with data migration, team training, and dedicated support during your first 30 days."
  },
  {
    question: "Can I see a demo with my own data?",
    answer: "Absolutely. During your walkthrough, we can incorporate sample data from your workflows to make the demo more relevant."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work with education providers, professional services, manufacturing, and technology companies of all sizes."
  }
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
  { day: "Sunday", hours: "Closed" }
]

const teamMembers = [
  { name: "Sarah Chen", role: "Solutions Architect", expertise: "ERP Implementation", available: true },
  { name: "Michael Rodriguez", role: "Product Specialist", expertise: "LMS & Education", available: true },
  { name: "David Kim", role: "Technical Support", expertise: "Integrations & API", available: false }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6">
              <Headphones className="w-3 h-3 mr-1" />
              Get in Touch
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Tell us what you need{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                to see
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your stack, processes, and stakeholders so we can tailor the walkthrough 
              to your specific needs. We're here to help you succeed.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="#channels">
                  Book a demo
                  <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="/products">
                  Download overview
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>24hr response</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Dedicated team</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>Global support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Channels */}
      <section id="channels" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <MessageSquare className="w-3 h-3 mr-1" />
              Contact Channels
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose how you'd like to connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to reach us — pick the one that works best for you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {channels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-lg ${channel.bgColor} flex items-center justify-center mb-3`}>
                          <Icon className={`h-6 w-6 ${channel.iconColor}`} />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {channel.availability}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{channel.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {channel.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-3">
                        {channel.longDescription}
                      </p>
                      <Button 
                        className="w-full group" 
                        variant="outline"
                        asChild
                      >
                        <Link href={channel.href}>
                          {channel.action}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="firstName" placeholder="First Name" className="pl-9" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Second Name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Your email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="contactEmail" type="email" placeholder="you@something.com" className="pl-9" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="company" placeholder="Acme Corp" className="pl-9" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="erp">ERP Core</SelectItem>
                        <SelectItem value="lms">LMS (Education)</SelectItem>
                        <SelectItem value="sales">Sales Platform</SelectItem>
                        <SelectItem value="resource">Resource Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your needs, timeline, and any specific questions..." 
                      rows={4}
                    />
                  </div>

                  <Button className="w-full h-11 text-base group" size="lg">
                    Send message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* What to Prepare */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">What to prepare</CardTitle>
                      <CardDescription>
                        Optional but useful details to speed up the conversation
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      {
                        label: "Current tools",
                        description: "ERP, finance, or operations systems we should know about.",
                        icon: Briefcase
                      },
                      {
                        label: "Key processes",
                        description: "Purchasing, fulfillment, project delivery, or billing flows.",
                        icon: Rocket
                      },
                      {
                        label: "Stakeholders",
                        description: "Teams who will join the walkthrough or sign off.",
                        icon: Users
                      },
                      {
                        label: "Timeline",
                        description: "Target go-live dates and must-hit milestones.",
                        icon: Calendar
                      }
                    ].map((item, i) => {
                      const Icon = item.icon
                      return (
                        <div key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                          <Icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Clock className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Office hours</CardTitle>
                      <CardDescription>
                        When our team is available to help
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Team Availability */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Users className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Team availability</CardTitle>
                      <CardDescription>
                        Specialists ready to help
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {/* <CardContent>
                  <div className="space-y-3">
                    {teamMembers.map((member, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role} • {member.expertise}</p>
                        </div>
                        <Badge variant={member.available ? "default" : "secondary"} className="text-xs">
                          {member.available ? "Available" : "In a meeting"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent> */}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <HelpCircle className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common inquiries
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <MapPin className="w-3 h-3 mr-1" />
              Our Locations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global presence, local support
            </h2>
            {/* <p className="text-lg text-muted-foreground">
              Find us in these cities
            </p> */}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                city: "San Francisco",
                address: "548 Market St, Suite 123",
                timezone: "PST",
                phone: "+1 (415) 555-0123"
              },
              {
                city: "New York",
                address: "20 W 34th St, Floor 15",
                timezone: "EST",
                phone: "+1 (212) 555-0456"
              },
              {
                city: "London",
                address: "123 Oxford St, Suite 45",
                timezone: "GMT",
                phone: "+44 20 7946 0123"
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle>{location.city}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">{location.address}</p>
                    <p className="text-muted-foreground">{location.timezone}</p>
                    <p className="font-medium text-primary">{location.phone}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>

            <CTASection/>
    </div>
  )
}