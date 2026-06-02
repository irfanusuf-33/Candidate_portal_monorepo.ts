// app/products/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  GraduationCap, 
  Headphones, 
  Layers, 
  Rocket,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  BookOpen,
  PhoneCall,
  LineChart,
  Shield,
  Zap,
  Globe,
  Clock,
  CreditCard,
  Award
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CTASection from "@/components/shared/cta-section"

const products = [
  {
    id: "erp",
    title: "ERP (Core)",
    icon: Layers,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Unified finance, operations, and service delivery with role-based access, dashboards, and automation.",
    longDescription: "The foundation of your business operations. Our core ERP brings together all essential functions in one unified platform, eliminating data silos and manual processes.",
    bullets: [
      "Modules: IAM, Ticketing, CRM, HRM, Inventory, Accounts",
      "Built-in audit trails, SSO/SCIM, approval flows",
      "Per-module pricing; IAM is free and always on",
    ],
    features: [
      "Real-time financial reporting",
      "Automated workflow approvals",
      "Multi-currency support",
      "Custom role-based permissions"
    ],
    href: "/products/erp",
    ctaLabel: "Explore ERP",
    popular: true
  },
  {
    id: "lms",
    title: "LMS (Education)",
    icon: GraduationCap,
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Student-centric learning platform for cohorts, self-paced tracks, and skills validation.",
    longDescription: "Transform education delivery with our comprehensive learning management system designed for modern learners and educators.",
    bullets: [
      "Course builder with quizzes, rubrics, and certifications",
      "Cohort analytics: attendance, progression, engagement scoring",
      "Integrates with CRM for enrollment and payments",
    ],
    features: [
      "Interactive course content",
      "Automated grading",
      "Student progress tracking",
      "Mobile learning support"
    ],
    href: "/products",
    ctaLabel: "Explore LMS",
    popular: false
  },
  {
    id: "sales",
    title: "Inbound/Outbound Sales",
    icon: Headphones,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Revenue engine for education providers running admissions and enterprise outreach.",
    longDescription: "Drive enrollment and revenue with our purpose-built sales engine for education providers.",
    bullets: [
      "Dialer + email sequencing with SLA timers and dispositions",
      "Lead routing and scoring tied to campaigns and territories",
      "Playbooks for admissions counseling and renewals",
    ],
    features: [
      "Smart lead scoring",
      "Automated follow-ups",
      "Call recording & analytics",
      "Pipeline management"
    ],
    href: "/products",
    ctaLabel: "Explore Sales",
    popular: false
  },
  {
    id: "resource-dev",
    title: "Resource Development",
    icon: Rocket,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Talent and content pipeline management for training providers and academies.",
    longDescription: "Optimize your most valuable assets - people and content - with intelligent resource management.",
    bullets: [
      "Recruit instructor/mentor pool with availability calendaring",
      "Content lifecycle: briefs, drafts, reviews, versioning",
      "Costing + margin views across programs and cohorts",
    ],
    features: [
      "Resource scheduling",
      "Content version control",
      "Budget tracking",
      "Performance analytics"
    ],
    href: "/products",
    ctaLabel: "Explore Resource Dev",
    popular: false
  },
]

const analytics = [
  {
    title: "Live dashboards",
    description: "Role-aware dashboards with drill-downs into source transactions.",
    icon: LineChart,
    color: "text-blue-500"
  },
  {
    title: "Data layer",
    description: "Warehouse-friendly models and event streams for custom reporting.",
    icon: BarChart3,
    color: "text-green-500"
  },
  {
    title: "Controls",
    description: "Audit-ready logs, segregation of duties, and exportable evidence.",
    icon: Shield,
    color: "text-orange-500"
  },
]

const features = [
  {
    title: "Unified Platform",
    description: "All modules work together seamlessly, sharing data and workflows",
    icon: Layers,
    color: "text-blue-500"
  },
  {
    title: "Real-time Analytics",
    description: "Make decisions with up-to-the-minute data and insights",
    icon: TrendingUp,
    color: "text-green-500"
  },
  {
    title: "Team Collaboration",
    description: "Built-in tools for teams to work together effectively",
    icon: Users,
    color: "text-purple-500"
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security with role-based access control",
    icon: Shield,
    color: "text-red-500"
  }
]

const stats = [
  { label: "Active Users", value: "10,000+", icon: Users },
  { label: "Data Processed", value: "1M+", icon: Zap },
  { label: "Countries", value: "15+", icon: Globe },
  { label: "Avg. ROI", value: "312%", icon: TrendingUp }
]

const integrations = [
  "Salesforce", "HubSpot", "Slack", "Microsoft Teams",
  "Zoom", "Google Workspace", "Stripe", "QuickBooks"
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
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
              <Rocket className="w-3 h-3 mr-1" />
              Our Products
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Product lineup for{" "}
              <span className="bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                modern operations
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              ERP is our core; education-focused solutions layer on the same platform for learner, 
              sales, and resource workflows.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/products/erp">
                  Explore ERP
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to us</Link>
              </Button>
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
                <Card key={index} className="text-center border-0 bg-transparent shadow-none">
                  <CardContent className="p-4">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </section> */}

      {/* Products Grid */}
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
              Our Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose the right tool for your needs
            </h2>
            <p className="text-lg text-muted-foreground">
              Each product integrates seamlessly with our core ERP platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer ${product.popular ? 'border-primary border-2' : ''}`}>
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-lg ${product.bgColor} flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${product.iconColor}`} />
                        </div>
                        {product.popular && (
                          <Badge className="bg-primary text-primary-foreground">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                        <CardDescription className="text-base">
                          {product.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground border-l-2 border-primary pl-3 italic">
                        {product.longDescription}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                              <CheckCircle2 className={`h-3 w-3 ${product.iconColor}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Includes:</h4>
                        <ul className="space-y-1">
                          {product.bullets.map((bullet, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 flex flex-wrap gap-2">
                        <Button size="sm" className="group" asChild>
                          <Link href={product.href}>
                            {product.ctaLabel}
                            <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        {product.id === "erp" && (
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/products/erp">View Pricing</Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <BarChart3 className="w-3 h-3 mr-1" />
                Analytics
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Built-in analytics across all products</h2>
              <p className="text-muted-foreground">
                Every product includes powerful analytics to help you make data-driven decisions
              </p>
            </div>

            <div className="grid gap-6 rounded-2xl border bg-card p-8 md:p-12 md:grid-cols-3">
              {analytics.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Platform Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to scale
            </h2>
            <p className="text-lg text-muted-foreground">
              Common across all our products for a seamless experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
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
                          <Icon className={`h-6 w-6 ${feature.color}`} />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
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
              Integrations
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Connect with your favorite tools</h2>
            <p className="text-muted-foreground">
              Seamless integration with the tools you already use
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {integrations.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


        <CTASection/>
    
    </div>
  )
}