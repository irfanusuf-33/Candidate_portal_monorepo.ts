// app/products/erp/pricing/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  BadgeDollarSign, 
  ShieldCheck, 
  CheckCircle2,
  HelpCircle,
  Calendar,
  Users,
  Building2,
  CreditCard,
  ArrowRight,
  Zap,
  Sparkles,
  Award,
  Clock,
  Globe,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  Download,
  Percent,
  Layers,
  Rocket,
  BarChart3,
  TrendingUp,
  Lock,
  Headphones
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CTASection from "@/components/shared/cta-section"

const tiers = [
  {
    name: "Starter",
    price: 18,
    annualPrice: 15.84,
    summary: "For early teams standardizing on core modules.",
    description: "Perfect for small businesses and startups getting started with digital operations.",
    icon: Rocket,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    includes: [
      "Up to 50 users",
      "IAM, Ticketing, CRM, Calendar",
      "Basic reports and dashboards",
      "Email support (24hr response)",
      "5GB storage",
      "Community access"
    ],
    limitations: [
      "No inventory management",
      "No HRM module",
      "Basic automation only"
    ],
    cta: "Start with Starter",
    popular: false
  },
  {
    name: "Growth",
    price: 32,
    annualPrice: 28.16,
    summary: "For growing ops with inventory + finance needs.",
    description: "Ideal for scaling businesses that need inventory management and HR capabilities.",
    icon: TrendingUp,
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
    includes: [
      "Up to 250 users",
      "All Starter modules + Inventory + HRM",
      "Advanced workflow automations",
      "Priority support (8x5, 4hr response)",
      "25GB storage",
      "API access (1000 calls/day)",
      "Custom reporting"
    ],
    limitations: [
      "No advanced accounting",
      "No lead management"
    ],
    cta: "Start with Growth",
    popular: true
  },
  {
    name: "Scale",
    price: 48,
    annualPrice: 42.24,
    summary: "For multi-entity rollouts with compliance requirements.",
    description: "Enterprise-grade solution for large organizations with complex compliance needs.",
    icon: Award,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    includes: [
      "Unlimited users",
      "All modules incl. Accounts & Lead Management",
      "Advanced audit trails + SSO/SCIM",
      "Dedicated CSM & 24x7 support (1hr response)",
      "Unlimited storage",
      "Unlimited API calls",
      "SLA guarantee (99.9% uptime)",
      "Custom integrations"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  },
]

const addOns = [
  { 
    label: "Additional module", 
    price: "$6", 
    unit: "per user/month",
    detail: "Add any module to your existing plan",
    icon: Layers,
    color: "text-blue-500"
  },
  { 
    label: "Sandbox environment", 
    price: "$250", 
    unit: "per month",
    detail: "Isolated testing environment for development",
    icon: FileText,
    color: "text-green-500"
  },
  { 
    label: "Implementation pack", 
    price: "From $4,000", 
    unit: "one-time",
    detail: "Guided setup, data migration, and training",
    icon: Rocket,
    color: "text-orange-500"
  },
  { 
    label: "API add-on", 
    price: "$99", 
    unit: "per month",
    detail: "Enhanced API rate limits and webhooks",
    icon: Zap,
    color: "text-purple-500"
  },
  { 
    label: "Premium support", 
    price: "$299", 
    unit: "per month",
    detail: "24/7 phone support with 30min response",
    icon: Headphones,
    color: "text-red-500"
  },
  { 
    label: "Data export", 
    price: "$199", 
    unit: "one-time",
    detail: "Custom data export and migration assistance",
    icon: Download,
    color: "text-yellow-500"
  }
]

const moduleRates = [
  { slug: "iam", name: "IAM", price: "$0", unit: "included", detail: "Authentication, SSO/SCIM, and role management bundled in every plan.", icon: ShieldCheck, color: "text-blue-500", free: true },
  { slug: "ticketing", name: "Ticketing", price: "$6", unit: "/user/mo", detail: "Queues, SLAs, and routing for internal or customer requests.", icon: MessageSquare, color: "text-green-500", free: false },
  { slug: "calendar", name: "Calendar", price: "$6", unit: "/user/mo", detail: "Shared calendars for launches, maintenance, and team scheduling.", icon: Calendar, color: "text-orange-500", free: false },
  { slug: "crm", name: "CRM", price: "$8", unit: "/user/mo", detail: "Pipelines, activities, and revenue stages with dashboard rollups.", icon: Users, color: "text-purple-500", free: false },
  { slug: "hrm", name: "HRM", price: "$8", unit: "/user/mo", detail: "People data, PTO workflows, onboarding checklists, and approvals.", icon: Building2, color: "text-yellow-500", free: false },
  { slug: "inventory", name: "Inventory", price: "$10", unit: "/user/mo", detail: "Replenishment rules, lots/serials, transfers, and adjustments.", icon: Layers, color: "text-red-500", free: false },
  { slug: "accounts", name: "Accounts", price: "$12", unit: "/user/mo", detail: "GL, AP/AR, banking sync, and close checklist support.", icon: CreditCard, color: "text-emerald-500", free: false },
  { slug: "leads", name: "Lead Management", price: "$6", unit: "/user/mo", detail: "Lead capture, scoring, routing, and nurture sequences.", icon: TrendingUp, color: "text-pink-500", free: false },
  { slug: "service-desk", name: "Service Desk", price: "$6", unit: "/user/mo", detail: "Knowledge base, incident playbooks, and status updates.", icon: Headphones, color: "text-indigo-500", free: false },
]

const faqs = [
  {
    question: "How does per-user pricing work?",
    answer: "You're billed for each active user in your workspace. Inactive users (suspended/archived) aren't charged. Volume discounts are available for teams over 500 users."
  },
  {
    question: "What's included in the annual discount?",
    answer: "Annual contracts receive a 12% discount on the monthly rate, billed yearly. You also get priority support and early access to new features."
  },
  {
    question: "Can I mix and match modules?",
    answer: "Yes! Our modular approach lets you start with core modules and add others as you grow. IAM is always free."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card required. You'll have full access to all modules during the trial."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual contracts. Invoices are generated automatically each month."
  },
  {
    question: "How does implementation work?",
    answer: "We offer guided implementation with data migration, team training, and dedicated support during your first 30 days. Custom implementation packages available."
  }
]

const comparisons = [
  { feature: "User limit", starter: "50", growth: "250", scale: "Unlimited" },
  { feature: "Storage", starter: "5GB", growth: "25GB", scale: "Unlimited" },
  { feature: "API calls", starter: "1,000/day", growth: "10,000/day", scale: "Unlimited" },
  { feature: "Support response", starter: "24hr", growth: "4hr", scale: "1hr" },
  { feature: "SSO/SCIM", starter: "❌", growth: "✅", scale: "✅" },
  { feature: "Audit logs", starter: "❌", growth: "✅", scale: "✅" },
  { feature: "Custom reporting", starter: "❌", growth: "✅", scale: "✅" },
  { feature: "Dedicated CSM", starter: "❌", growth: "❌", scale: "✅" },
]

const testimonials = [
  {
    name: "David Chen",
    role: "CTO, TechFlow",
    content: "The pricing model is transparent and scales with our needs. We started with Growth and added modules as we expanded.",
    tier: "Growth",
    avatar: "DC"
  },
  {
    name: "Sarah Martinez",
    role: "COO, EduFirst",
    content: "Annual discount saved us 12% and the implementation support was worth every penny.",
    tier: "Scale",
    avatar: "SM"
  },
  {
    name: "James Wilson",
    role: "Founder, StartupLab",
    content: "Starter plan was perfect for our early stage. Easy to upgrade when we needed more.",
    tier: "Starter",
    avatar: "JW"
  }
]

export default function PricingPage() {
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
              <BadgeDollarSign className="w-3 h-3 mr-1" />
              Products / ERP / Pricing
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Pricing built to{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                scale with usage
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Per-user, per-month pricing in USD. Choose a tier and add modules or services as you grow. 
              Annual contracts receive a <span className="font-bold text-primary">12% discount</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/products/register">
                  Start with Growth
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to sales</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="#comparison">
                  Compare plans
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Percent className="h-4 w-4 text-primary" />
                <span>12% annual discount</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>Multi-currency support</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>No long-term contracts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle (Annual/Monthly) */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Card className="inline-flex p-1">
              <div className="flex gap-1">
                <Button variant="default" size="sm" className="rounded-md">Monthly</Button>
                <Button variant="ghost" size="sm" className="rounded-md">Annual (Save 12%)</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {tiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`relative h-full hover:shadow-xl transition-all hover:-translate-y-1 ${tier.popular ? 'border-primary border-2' : ''}`}>
                    {tier.popular && (
                      <>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge className="bg-primary text-primary-foreground px-4 py-1">
                            <Zap className="h-3 w-3 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                      </>
                    )}
                    
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg ${tier.bgColor} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${tier.iconColor}`} />
                        </div>
                        <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {tier.summary}
                      </CardDescription>
                      <div className="mt-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold">${tier.price}</span>
                          <span className="text-sm text-muted-foreground">/user/mo</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          or ${tier.annualPrice}/user/mo billed annually
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground border-l-2 border-primary pl-3 italic">
                        {tier.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          What's included
                        </h4>
                        <ul className="space-y-2">
                          {tier.includes.map((item) => (
                            <li key={item} className="text-sm flex items-start gap-2">
                              <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {tier.limitations.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold flex items-center gap-2 text-muted-foreground">
                            <HelpCircle className="h-4 w-4" />
                            Not included
                          </h4>
                          <ul className="space-y-1">
                            {tier.limitations.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-muted-foreground">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Separator />

                      <Button 
                        className="w-full" 
                        variant={tier.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link href={tier.name === "Scale" ? "/contact" : "/products/register"}>
                          {tier.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>

                      {tier.name === "Starter" && (
                        <p className="text-xs text-center text-muted-foreground">
                          Free 14-day trial • No credit card required
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <BarChart3 className="w-3 h-3 mr-1" />
              Plan Comparison
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find the right plan for your team
            </h2>
            <p className="text-lg text-muted-foreground">
              Compare features across all tiers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-4 gap-4 p-6 bg-muted/50 font-semibold border-b">
                  <div className="col-span-1">Feature</div>
                  <div className="text-center">Starter</div>
                  <div className="text-center">Growth</div>
                  <div className="text-center">Scale</div>
                </div>
                {comparisons.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-6 border-b last:border-0">
                    <div className="col-span-1 font-medium">{item.feature}</div>
                    <div className="text-center">{item.starter}</div>
                    <div className="text-center">{item.growth}</div>
                    <div className="text-center">{item.scale}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
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
              <Zap className="w-3 h-3 mr-1" />
              Add-ons
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Extend your plan with targeted options
            </h2>
            <p className="text-lg text-muted-foreground">
              Customize your subscription with additional capabilities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {addOns.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className={`h-5 w-5 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold">{item.label}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {item.price}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{item.unit}</p>
                          <p className="text-sm text-muted-foreground">{item.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Module Pricing */}
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
              <Layers className="w-3 h-3 mr-1" />
              Module Pricing (A La Carte)
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pick and choose what you need
            </h2>
            <p className="text-lg text-muted-foreground">
              Anchor links line up with the module cards on the ERP page
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {moduleRates.map((module, index) => {
              const Icon = module.icon
              return (
                <motion.div
                  key={module.slug}
                  id={module.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                          <Icon className={`h-5 w-5 ${module.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold">{module.name}</h3>
                            <div className="text-right">
                              <span className="font-bold text-primary">{module.price}</span>
                              <span className="text-xs text-muted-foreground"> {module.unit}</span>
                            </div>
                          </div>
                          {module.free && (
                            <Badge variant="outline" className="text-green-500 border-green-500 text-xs mb-2">
                              Free Forever
                            </Badge>
                          )}
                          <p className="text-xs text-muted-foreground">{module.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-24">
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
              Customer Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by businesses like yours
            </h2>
            <p className="text-lg text-muted-foreground">
              See how companies are scaling with Voctrum
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4">
                      {testimonial.tier} Plan
                    </Badge>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* FAQ Section */}
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
              <HelpCircle className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about pricing and billing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Globe className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p>Prices shown in USD. Annual contracts receive a 12% discount applied to the monthly rate.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p>Volume pricing and multi-entity discounts available above 500 users. Contact sales for custom quotes.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Rocket className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p>Implementation fees vary by scope; see the Services page for detailed stages and pricing.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p>All plans include a 14-day free trial. No credit card required to start.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
                <CTASection/>
    </div>
  )
}