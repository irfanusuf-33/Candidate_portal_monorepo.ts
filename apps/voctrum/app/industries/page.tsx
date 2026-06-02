// app/industries/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Factory, 
  PackageCheck, 
  Truck, 
  GraduationCap,
  ShoppingCart,
  BookOpen,
  Globe,
  Users,
  Building2,
  School,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Award,
  BarChart3,
  Layers,
  Zap,
  Heart,
  Wallet,
  FileText,
  Settings,
  DollarSign,
  UserCheck
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CTASection from "@/components/shared/cta-section"

const industries = [
  {
    id: "education",
    title: "Education & Training",
    icon: GraduationCap,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Complete ERP for colleges, RTOs, and educational course providers.",
    longDescription: "Manage student lifecycle, compliance, and operations with purpose-built tools for education.",
    focus: [
      "Student management and enrollment",
      "Course and curriculum development",
      "RTO compliance tracking (ASQA)",
      "VET Student Loans processing",
      "Timetabling and resource allocation"
    ],
    outcomes: [
      "30% faster enrollment processing",
      "Real-time compliance reporting",
      "Automated AVETMISS reporting",
      "Improved student retention"
    ],
    clients: ["TAFE Institutes", "Private RTOs", "Universities", "Online course providers"],
    penetration: "High",
    regions: ["Australia", "New Zealand", "UK"]
  },
  // {
  //   id: "manufacturing",
  //   title: "Manufacturing",
  //   icon: Factory,
  //   iconColor: "text-orange-500",
  //   bgColor: "bg-orange-500/10",
  //   description: "Plan production, track batches, and control costs with real-time inventory visibility.",
  //   longDescription: "Streamline manufacturing operations from raw materials to finished goods with full traceability.",
  //   focus: [
  //     "MRP light and production planning",
  //     "Batch and serial number tracking",
  //     "Shop-floor alerts and dashboards",
  //     "Quality control and testing",
  //     "Costing and profitability analysis"
  //   ],
  //   outcomes: [
  //     "25% reduction in waste",
  //     "99.9% batch traceability",
  //     "Real-time production monitoring",
  //     "Optimized inventory levels"
  //   ],
  //   clients: ["Electronics manufacturers", "Food & beverage", "Pharmaceuticals", "Automotive suppliers"],
  //   penetration: "Medium",
  //   regions: ["Australia", "SE Asia", "North America"]
  // },
  // {
  //   id: "distribution",
  //   title: "Distribution & Logistics",
  //   icon: Truck,
  //   iconColor: "text-green-500",
  //   bgColor: "bg-green-500/10",
  //   description: "Orchestrate purchasing, warehousing, and last-mile with SLA-driven exceptions.",
  //   longDescription: "End-to-end supply chain management with multi-warehouse support and carrier integrations.",
  //   focus: [
  //     "Multi-warehouse inventory",
  //     "ASN and GRN processing",
  //     "Carrier integrations",
  //     "Route optimization",
  //     "SLA monitoring and alerts"
  //   ],
  //   outcomes: [
  //     "40% faster order fulfillment",
  //     "99.5% inventory accuracy",
  //     "Reduced shipping costs",
  //     "Real-time tracking for customers"
  //   ],
  //   clients: ["3PL providers", "Wholesale distributors", "E-commerce fulfillment", "Retail chains"],
  //   penetration: "High",
  //   regions: ["Australia", "Asia Pacific", "Europe"]
  // },
  {
    id: "services",
    title: "Professional Services",
    icon: Briefcase,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Quote-to-cash for project-based work with time, expenses, and milestone billing.",
    longDescription: "Complete project management and financials for service-based businesses.",
    focus: [
      "Project profitability tracking",
      "Resource utilization",
      "Milestone billing",
      "Time and expense capture",
      "Client portals"
    ],
    outcomes: [
      "35% improvement in utilization",
      "Faster invoice generation",
      "Real-time project profitability",
      "Enhanced client collaboration"
    ],
    clients: ["Consulting firms", "IT services", "Architecture firms", "Marketing agencies"],
    penetration: "Medium",
    regions: ["Australia", "UK", "North America"]
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    icon: ShoppingCart,
    iconColor: "text-pink-500",
    bgColor: "bg-pink-500/10",
    description: "Omnichannel commerce with inventory sync, order management, and customer insights.",
    longDescription: "Connect your online and physical stores with real-time inventory and unified customer data.",
    focus: [
      "Multi-channel inventory sync",
      "Order management system",
      "Customer insights and segmentation",
      "Returns and refunds",
      "Promotion management"
    ],
    outcomes: [
      "50% reduction in overselling",
      "Unified customer view",
      "Faster returns processing",
      "Increased average order value"
    ],
    clients: ["Online retailers", "Brick-and-mortar chains", "D2C brands", "Marketplace sellers"],
    penetration: "Growing",
    regions: ["Australia", "Asia", "Global"]
  },
  {
    id: "curriculum",
    title: "Curriculum & Content Development",
    icon: BookOpen,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description: "End-to-end tools for curriculum developers and educational content creators.",
    longDescription: "Create, manage, and distribute educational content with version control and collaboration.",
    focus: [
      "Curriculum mapping and design",
      "Content version control",
      "Collaborative authoring",
      "Learning outcome tracking",
      "Digital asset management"
    ],
    outcomes: [
      "60% faster content development",
      "Version control for all materials",
      "Seamless publishing to LMS",
      "Reusable learning objects"
    ],
    clients: ["Universities", "Publishers", "RTOs", "Corporate training"],
    penetration: "High",
    regions: ["Australia", "NZ", "UK"]
  },
  {
    id: "erp",
    title: "ERP Market",
    icon: Layers,
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    description: "Comprehensive ERP solutions for organizations seeking to modernize operations.",
    longDescription: "Replace legacy systems with modern, flexible ERP that grows with your business.",
    focus: [
      "Legacy system migration",
      "Modular implementation",
      "Custom integrations",
      "Process automation",
      "Real-time analytics"
    ],
    outcomes: [
      "40% lower TCO than legacy ERPs",
      "Faster implementation (3-6 months)",
      "Better user adoption",
      "Mobile-first experience"
    ],
    clients: ["Mid-market enterprises", "Growing businesses", "Non-profits", "Government"],
    penetration: "Growing",
    regions: ["Australia", "Asia Pacific", "Global"]
  }
]

const stats = [
  { label: "Industries Served", value: "7+", icon: Building2 },
  { label: "Active Clients", value: "200+", icon: Users },
  { label: "Countries", value: "12", icon: Globe },
  { label: "Avg. ROI", value: "312%", icon: TrendingUp }
]

const compliance = [
  {
    title: "Approvals",
    description: "Spend, pricing, and exception approvals mapped to job roles.",
    icon: Shield,
    color: "text-blue-500"
  },
  {
    title: "Audit evidence",
    description: "Exports and logs ready for auditors with minimal clicks.",
    icon: FileText,
    color: "text-green-500"
  },
  {
    title: "Data posture",
    description: "Backups, residency options, and SSO supported out of the box.",
    icon: Settings,
    color: "text-purple-500"
  },
  {
    title: "Regulatory compliance",
    description: "AVETMISS, ASQA, GST, and industry-specific standards.",
    icon: Award,
    color: "text-orange-500"
  }
]

const successStories = [
  {
    company: "Australian Soverign  College",
    industry: "Education",
    challenge: "Manual student administration across 3 campuses",
    solution: "Implemented full ERP with student management",
    result: "50% reduction in admin time, real-time compliance reporting",
    icon: School
  },
  {
    company: "Tec",
    industry: "Distribution",
    challenge: "Tec visibility across 5 states",
    solution: "Multi-warehouse inventory with carrier integration",
    result: "99.5% inventory accuracy, 40% faster fulfillment",
    icon: PackageCheck
  },
  {
    company: "Rto Specialist",
    industry: "Education",
    challenge: "CRICOS AND ELICOS",
    solution: "Reporting and student management",
    result: "100% compliance, saved 20 hours per week",
    icon: GraduationCap
  }
]

export default function IndustriesPage() {
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
              <Target className="w-3 h-3 mr-1" />
              Industries
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Vertical playbooks{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                ready to tailor
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Each industry card highlights workflows, controls, and KPIs that ship as defaults for that vertical. 
              From education to manufacturing, we've built solutions for your unique needs.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Book a vertical demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  See our services
                  <Briefcase className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div> */}

            {/* Key Markets */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <Badge variant="secondary" className="px-3 py-1">Colleges & Universities</Badge>
              <Badge variant="secondary" className="px-3 py-1">RTOs (Australia)</Badge>
              <Badge variant="secondary" className="px-3 py-1">E-commerce</Badge>
              <Badge variant="secondary" className="px-3 py-1">Educational Course Providers</Badge>
              <Badge variant="secondary" className="px-3 py-1">ERP Market</Badge>
              <Badge variant="secondary" className="px-3 py-1">Curriculum Developers</Badge>
              <Badge variant="secondary" className="px-3 py-1">Resource Developers</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
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
              <Building2 className="w-3 h-3 mr-1" />
              Industries We Serve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deep expertise across verticals
            </h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built solutions for your industry's unique challenges
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-lg ${industry.bgColor} flex items-center justify-center mb-3`}>
                          <Icon className={`h-6 w-6 ${industry.iconColor}`} />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {industry.penetration} penetration
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{industry.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-3">
                        {industry.longDescription}
                      </p>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                          Key focus areas
                        </h4>
                        <ul className="space-y-1">
                          {industry.focus.slice(0, 4).map((item, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                              <CheckCircle2 className={`h-3 w-3 ${industry.iconColor} shrink-0 mt-0.5`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                          Sample clients
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {industry.clients.slice(0, 3).map((client, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {client}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          <Globe className="h-3 w-3 inline mr-1" />
                          {industry.regions.join(", ")}
                        </div>
                        <Button size="sm" variant="outline" className="group" asChild>
                          <Link href={`/contact?industry=${industry.id}`}>
                            Learn more
                            <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Education Deep Dive */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4">
                <GraduationCap className="w-3 h-3 mr-1" />
                Education & Training
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete solution for RTOs and colleges
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From student enrollment to AVETMISS reporting, we handle the complexity so you can focus on education.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Student Management System (SMS)",
                  "Automated AVETMISS reporting",
                  "VET Student Loans processing",
                  "Course and curriculum management",
                  "Trainer and assessor portals",
                  "Compliance dashboard (ASQA ready)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?industry=education">
                    Talk to education team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products/lms">
                    View LMS product
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">Trusted by leading institutions</h3>
              <div className="space-y-4">
                {[
                  { name: "Sydney Metro College", students: "5,000+", type: "RTO" },
                  { name: "TechSkills Australia", students: "3,200+", type: "Private RTO" },
                  { name: "Global Learning Institute", students: "8,500+", type: "University" },
                  { name: "Career Development Centre", students: "2,100+", type: "RTO" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.type} • {item.students} students</p>
                    </div>
                    <Badge variant="outline" className="text-green-500">Active</Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Compliance & Controls */}
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
              <Shield className="w-3 h-3 mr-1" />
              Compliance + Controls
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Audit trails, approvals, and role templates
            </h2>
            <p className="text-lg text-muted-foreground">
              Adjusted per industry to meet regulatory requirements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {compliance.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-24">
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
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real results across industries
            </h2>
            <p className="text-lg text-muted-foreground">
              See how we've helped organizations transform their operations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {successStories.map((story, index) => {
              const Icon = story.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <Badge variant="outline">{story.industry}</Badge>
                      </div>
                      <CardTitle className="text-lg">{story.company}</CardTitle>
                      <CardDescription className="text-sm">
                        <span className="font-semibold">Challenge:</span> {story.challenge}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">
                        <span className="font-semibold">Solution:</span> {story.solution}
                      </p>
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-green-600 dark:text-green-400">Result</p>
                        <p className="text-sm">{story.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section> */}

      {/* Regional Presence */}
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
              <Globe className="w-3 h-3 mr-1" />
              Global Presence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving clients worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              With deep expertise in  compliance and growing global footprint
              {/* Australian RTO */}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { region: "Australia", flag: "🇦🇺", clients: "150+", focus: "RTOs, Colleges, Manufacturing" },
              { region: "New Zealand", flag: "🇳🇿", clients: "30+", focus: "Education, Distribution" },
              { region: "UK & Europe", flag: "🇬🇧", clients: "25+", focus: "Professional Services, E-commerce" },
              { region: "Asia Pacific", flag: "🌏", clients: "20+", focus: "Manufacturing, Education" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{item.flag}</div>
                  <h3 className="font-semibold mb-1">{item.region}</h3>
                  {/* <p className="text-2xl font-bold text-primary mb-1">{item.clients}</p> */}
                  {/* <p className="text-xs text-muted-foreground">active clients</p> */}
                  <p className="text-xs text-muted-foreground mt-2">{item.focus}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
        <CTASection/>
    
    </div>
  )
}