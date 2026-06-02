// app/products/erp/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  CalendarClock, 
  ClipboardList, 
  GitBranch, 
  HandCoins, 
  HardHat, 
  Headset, 
  LayoutDashboard, 
  Package, 
  Users,
  Shield,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Globe,
  Clock,
  CreditCard,
  BarChart3,
  FileText,
  Settings,
  Lock,
  Database,
  Cloud,
  Phone,
  Mail,
  MessageSquare,
  Download,
  Play,
  BookOpen,
  Award,
  Sparkles
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CTASection from "@/components/shared/cta-section"


const modules = [
  {
    title: "IAM",
    description: "Roles, permissions, and SSO/SCIM user lifecycle.",
    longDescription: "Complete identity and access management with enterprise-grade security features including SSO, SCIM provisioning, and granular role-based access control.",
    icon: Users,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    slug: "iam",
    price: "$0 (included)",
    features: [
      "Single Sign-On (SSO)",
      "SCIM provisioning",
      "Role-based access control",
      "Audit logs",
      "Multi-factor authentication"
    ],
    popular: false,
    free: true
  },
  {
    title: "Ticketing",
    description: "Issue intake, assignment, SLA timers, and triage views.",
    longDescription: "Streamlined ticket management with automated workflows, SLA tracking, and customizable triage views for efficient issue resolution.",
    icon: ClipboardList,
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
    slug: "ticketing",
    price: "$6 per user / mo",
    features: [
      "Automated ticket routing",
      "SLA tracking",
      "Priority matrix",
      "Custom workflows",
      "SLA breach notifications"
    ],
    popular: true,
    free: false
  },
  {
    title: "Calendar",
    description: "Shared calendars for go-lives, maintenance, and team rotations.",
    longDescription: "Collaborative calendar management for team scheduling, project milestones, and resource allocation with real-time updates.",
    icon: CalendarClock,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
    slug: "calendar",
    price: "$6 per user / mo",
    features: [
      "Team availability",
      "Resource booking",
      "Event templates",
      "Calendar sync",
      "Automated reminders"
    ],
    popular: false,
    free: false
  },
  {
    title: "CRM",
    description: "Accounts, contacts, pipelines, and revenue stages.",
    longDescription: "Customer relationship management with pipeline tracking, contact management, and revenue forecasting.",
    icon: LayoutDashboard,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    slug: "crm",
    price: "$8 per user / mo",
    features: [
      "Pipeline management",
      "Contact scoring",
      "Activity tracking",
      "Deal forecasting",
      "Email integration"
    ],
    popular: false,
    free: false
  },
  {
    title: "HRM",
    description: "People records, time-off, onboarding checklists, and approvals.",
    longDescription: "Human resource management with employee records, leave tracking, onboarding workflows, and performance reviews.",
    icon: HardHat,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    slug: "hrm",
    price: "$8 per user / mo",
    features: [
      "Employee directory",
      "Leave management",
      "Onboarding checklists",
      "Performance reviews",
      "Document management"
    ],
    popular: false,
    free: false
  },
  {
    title: "Inventory",
    description: "Stock, lots/serials, reorder points, and warehouse transfers.",
    longDescription: "Real-time inventory tracking with lot/serial number control, automated reordering, and multi-warehouse management.",
    icon: Package,
    iconColor: "text-red-500",
    bgColor: "bg-red-500/10",
    slug: "inventory",
    price: "$10 per user / mo",
    features: [
      "Stock tracking",
      "Lot/serial control",
      "Reorder automation",
      "Warehouse transfers",
      "Inventory forecasting"
    ],
    popular: false,
    free: false
  },
  // {
  //   title: "Accounts",
  //   description: "GL, AP/AR, banking, and close checklists.",
  //   longDescription: "Financial management with general ledger, accounts payable/receivable, bank reconciliation, and month-end closing workflows.",
  //   icon: HandCoins,
  //   iconColor: "text-emerald-500",
  //   bgColor: "bg-emerald-500/10",
  //   slug: "accounts",
  //   price: "$12 per user / mo",
  //   features: [
  //     "General ledger",
  //     "AP/AR management",
  //     "Bank reconciliation",
  //     "Financial reporting",
  //     "Audit trails"
  //   ],
  //   popular: false,
  //   free: false
  // },
  // {
  //   title: "Lead Management",
  //   description: "Lead capture, scoring, routing, and nurturing journeys.",
  //   longDescription: "Intelligent lead management with automated capture, scoring algorithms, smart routing, and personalized nurturing campaigns.",
  //   icon: GitBranch,
  //   iconColor: "text-pink-500",
  //   bgColor: "bg-pink-500/10",
  //   slug: "leads",
  //   price: "$6 per user / mo",
  //   features: [
  //     "Lead capture forms",
  //     "Automated scoring",
  //     "Smart routing",
  //     "Nurture campaigns",
  //     "Conversion tracking"
  //   ],
  //   popular: false,
  //   free: false
  // },
  // {
  //   title: "Service Desk",
  //   description: "Incident playbooks, KB, and customer-facing status updates.",
  //   longDescription: "Customer service platform with incident management, knowledge base, and real-time status updates for end users.",
  //   icon: Headset,
  //   iconColor: "text-indigo-500",
  //   bgColor: "bg-indigo-500/10",
  //   slug: "service-desk",
  //   price: "$6 per user / mo",
  //   features: [
  //     "Incident tracking",
  //     "Knowledge base",
  //     "SLA management",
  //     "Customer portal",
  //     "Status updates"
  //   ],
  //   popular: false,
  //   free: false
  // },
]

const stats = [
  { label: "Active Users", value: "100+", icon: Users, change: "+25% this year" },
  { label: "Tickets Resolved", value: "50K+", icon: ClipboardList, change: "98% satisfaction" },
  { label: "Data Processed", value: "1M+", icon: Database, change: "Per day" },
  { label: "Uptime SLA", value: "99.9%", icon: Cloud, change: "Enterprise grade" }
]

const benefits = [
  {
    title: "Unified Platform",
    description: "All modules work together seamlessly, sharing data and workflows",
    icon: LayoutDashboard,
    color: "text-blue-500"
  },
  {
    title: "Real-time Analytics",
    description: "Make decisions with up-to-the-minute data and insights",
    icon: TrendingUp,
    color: "text-green-500"
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security with role-based access control",
    icon: Lock,
    color: "text-purple-500"
  },
  {
    title: "Scalable Architecture",
    description: "Grows with your business from startup to enterprise",
    icon: Database,
    color: "text-orange-500"
  }
]

const integrations = [
  { name: "Slack", icon: MessageSquare, category: "Communication" },
  { name: "Microsoft Teams", icon: Users, category: "Communication" },
  { name: "Zoom", icon: Phone, category: "Video" },
  { name: "Google Workspace", icon: Mail, category: "Productivity" },
  { name: "Salesforce", icon: TrendingUp, category: "CRM" },
  { name: "Stripe", icon: CreditCard, category: "Payments" },
  { name: "QuickBooks", icon: HandCoins, category: "Accounting" },
  { name: "Zapier", icon: Zap, category: "Automation" }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "COO, TechCorp",
    content: "The ERP platform has transformed how we manage operations. The module flexibility is unmatched.",
    avatar: "SJ",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
    content: "Implementation was smooth and the support team has been exceptional. Highly recommended.",
    avatar: "MC",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director",
    content: "The analytics and reporting capabilities have given us insights we never had before.",
    avatar: "ER",
    rating: 5
  }
]

const faqs = [
  {
    question: "Can I use modules individually?",
    answer: "Yes! You can start with any module and add more as you grow. IAM is always free."
  },
  {
    question: "Is there a minimum commitment?",
    answer: "No minimum commitment. Month-to-month billing with annual discounts available."
  },
  {
    question: "How does pricing work?",
    answer: "Per-user per-month pricing with volume discounts. Contact us for enterprise pricing."
  },
  {
    question: "What about data migration?",
    answer: "We offer guided migration support and tools to help you move your existing data."
  }
]

export default function ErpPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge variant="outline" className="mb-6">
              <LayoutDashboard className="w-3 h-3 mr-1" />
              Products / ERP
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              ERP workspace{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                blueprint
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              High-level view of modules available in Voctrum. Each module links into deeper flows 
              you can prototype and customize for your business needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/products/register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Book Demo</Link>
              </Button>
              {/* <Button size="lg" variant="ghost" asChild>
                <Link href="#modules">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Overview
                </Link>
              </Button> */}
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                <span>SOC2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-0 bg-transparent shadow-none">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-xs text-primary mt-1">{stat.change}</div>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </section> */}

      {/* Quick Actions */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://erp.voctrum.com/login">
                <Lock className="mr-2 h-4 w-4" />
                Login to Demo
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/register">
                <Users className="mr-2 h-4 w-4" />
                Register
              </Link>
            </Button>
            {/* <Button variant="outline" size="lg" asChild>
              <Link href="/products/erp/pricing">
                <CreditCard className="mr-2 h-4 w-4" />
                View Pricing
              </Link>
            </Button> */}
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact?subject=ERP%20Demo">
                <CalendarClock className="mr-2 h-4 w-4" />
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section id="modules" className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Package className="w-3 h-3 mr-1" />
              ERP Modules
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to run your business
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from 6 integrated modules. Start with what you need, add more as you grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <motion.div
                  key={module.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full hover:shadow-xl transition-all hover:-translate-y-1 group ${module.popular ? 'border-primary border-2 relative' : ''}`}>
                    {module.popular && (
                      <div className="absolute -top-3 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Zap className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-lg ${module.bgColor} flex items-center justify-center mb-3`}>
                          <Icon className={`h-6 w-6 ${module.iconColor}`} />
                        </div>
                        {module.free && (
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            Free Forever
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-3">
                        {module.longDescription}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {module.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                              <CheckCircle2 className={`h-3 w-3 ${module.iconColor}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        {/* <div>
                          <p className="text-xs text-muted-foreground">Starting at</p>
                          <p className="text-lg font-bold text-primary">{module.price}</p>
                        </div> */}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            {/* <Link href={`/products/erp/pricing#${module.slug}`}> */}
                              <Link href={`/contact`}>
                              Request a Quote
                            </Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link href="/products/register">
                              Demo
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              IAM is always free for all users
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Award className="w-3 h-3 mr-1" />
              Why Choose Voctrum
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for modern businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Our ERP platform combines enterprise power with startup agility
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Icon className={`h-6 w-6 ${benefit.color}`} />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <GitBranch className="w-3 h-3 mr-1" />
              Integrations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect with your stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Seamless integration with the tools you already use
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-md transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">{integration.name}</p>
                      <p className="text-xs text-muted-foreground">{integration.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <MessageSquare className="w-3 h-3 mr-1" />
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by industry leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers say about us
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))} */}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <BookOpen className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our ERP platform
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="text-center">
                <Badge variant="outline" className="mb-4 mx-auto">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Next Steps
                </Badge>
                <CardTitle className="text-2xl md:text-3xl">
                  Ready to dive deeper?
                </CardTitle>
                <CardDescription className="text-base max-w-2xl mx-auto">
                  Sketch sub-routes per module to demo end-to-end flows. Consider adding data mocks, 
                  KPIs, and user roles for each module to illustrate how navigation and permissions work together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Data Mocks</h3>
                    <p className="text-sm text-muted-foreground">Realistic sample data for demos</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="font-semibold mb-2">KPIs</h3>
                    <p className="text-sm text-muted-foreground">Key metrics per module</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="font-semibold mb-2">User Roles</h3>
                    <p className="text-sm text-muted-foreground">Role-based access examples</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center mt-8">
                  <Button size="lg" className="group" asChild>
                    <Link href="/products/register">
                      Start Building
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

     <CTASection/>
    </div>
  )
}