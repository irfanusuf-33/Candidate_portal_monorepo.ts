// app/services/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Headset, 
  LayoutTemplate, 
  Megaphone, 
  MonitorSmartphone, 
  Palette, 
  Rocket, 
  Workflow,
  Code,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Target,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Briefcase,
  Award,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Calendar,
  Cpu,
  GitBranch,
  Layers,
  Lightbulb,
  PenTool
} from "lucide-react"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CTASection from "@/components/shared/cta-section"



const services = [
  {
    id: "product-dev",
    title: "IT Product Development & Support",
    icon: Rocket,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Full-cycle product builds plus steady-state support and SRE.",
    longDescription: "From concept to scale, we build enterprise-grade products with modern architecture, robust testing, and 24/7 operational excellence.",
    outcomes: [
      "Product discovery, specs, and architecture",
      "Agile delivery with QA automation",
      "24/7 monitoring, incident response, and SLOs",
      "Scalable cloud infrastructure (AWS/Azure/GCP)",
      "Performance optimization and security audits"
    ],
    features: [
      "Custom software development",
      "Legacy system modernization",
      "API design and integration",
      "DevOps and infrastructure",
      "SRE and production support"
    ],
    cta: { label: "Start a build", href: "/contact?interest=product-dev" },
    popular: true
  },
  {
    id: "web-dev",
    title: "Website Development",
    icon: MonitorSmartphone,
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Marketing, documentation, and portal sites with performance baked in.",
    longDescription: "High-performance websites built with modern frameworks, optimized for SEO, conversion, and exceptional user experience.",
    outcomes: [
      "Next.js / Jamstack builds",
      "SEO + analytics setup",
      "CMS handoff and training",
      "Performance optimization (Core Web Vitals)",
      "Maintenance and hosting"
    ],
    features: [
      "Responsive design",
      "Headless CMS integration",
      "E-commerce solutions",
      "Blog and content platforms",
      "Documentation portals"
    ],
    cta: { label: "Plan your site", href: "/contact?interest=web-dev" },
    popular: false
  },
  {
    id: "design",
    title: "Graphics Design",
    icon: Palette,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Brand, illustration, and campaign visuals across digital and print.",
    longDescription: "Visual storytelling that captures your brand essence and engages your audience across every touchpoint.",
    outcomes: [
      "Brand kits and templates",
      "Campaign assets",
      "Motion and micro-animations",
      "Print collateral",
      "Social media graphics"
    ],
    features: [
      "Logo and brand identity",
      "Illustration and iconography",
      "Marketing materials",
      "Presentation design",
      "Infographics"
    ],
    cta: { label: "Book a design sprint", href: "/contact?interest=design" },
    popular: false
  },
  {
    id: "ux",
    title: "UI/UX Solutions",
    icon: LayoutTemplate,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Research-driven UX with component libraries that scale.",
    longDescription: "User-centered design that drives engagement and conversion through research, testing, and iterative improvement.",
    outcomes: [
      "User research and journey maps",
      "Design systems + tokens",
      "Prototypes and usability tests",
      "Accessibility audits (WCAG)",
      "Interaction design"
    ],
    features: [
      "User research",
      "Wireframing",
      "Interactive prototyping",
      "Design systems",
      "Usability testing"
    ],
    cta: { label: "Schedule a UX review", href: "/contact?interest=ux" },
    popular: false
  },
  {
    id: "customer-service",
    title: "Customer Service Solutions",
    icon: Headset,
    iconColor: "text-red-500",
    bgColor: "bg-red-500/10",
    description: "Support desk setup, playbooks, and tooling to meet SLAs.",
    longDescription: "Transform your customer support with modern tools, automated workflows, and data-driven insights.",
    outcomes: [
      "Omni-channel intake",
      "Macros, automations, and QA",
      "Training and runbooks",
      "SLA tracking and reporting",
      "Customer feedback loops"
    ],
    features: [
      "Help desk setup",
      "Knowledge base creation",
      "Chatbot integration",
      "Support analytics",
      "Team training"
    ],
    cta: { label: "Improve support", href: "/contact?interest=cs" },
    popular: false
  },
  {
    id: "marketing",
    title: "Marketing & Social Media Management",
    icon: Megaphone,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description: "Campaign strategy, content calendars, and performance reporting.",
    longDescription: "Data-driven marketing that builds brand awareness, generates leads, and drives customer engagement.",
    outcomes: [
      "Channel strategy + calendars",
      "Creative production & posting",
      "Analytics and optimization",
      "Community management",
      "Campaign reporting"
    ],
    features: [
      "Content strategy",
      "Social media management",
      "Email marketing",
      "Paid advertising",
      "Analytics & reporting"
    ],
    cta: { label: "Kick off a campaign", href: "/contact?interest=marketing" },
    popular: false
  },
]

const stats = [
  { label: "Projects Delivered", value: "150+", icon: Rocket },
  { label: "Active Clients", value: "45+", icon: Users },
  { label: "Avg. NPS Score", value: "72", icon: Award },
  { label: "Uptime SLA", value: "99.9%", icon: Shield }
]

const process = [
  {
    phase: "Discovery",
    description: "We learn about your business, users, and goals",
    icon: Lightbulb,
    color: "text-blue-500",
    deliverables: ["User research", "Requirements docs", "Technical architecture"]
  },
  {
    phase: "Design",
    description: "Create solutions that solve real problems",
    icon: PenTool,
    color: "text-purple-500",
    deliverables: ["Wireframes", "Prototypes", "Design systems"]
  },
  {
    phase: "Development",
    description: "Build with quality and scalability in mind",
    icon: Code,
    color: "text-green-500",
    deliverables: ["Sprints", "Code reviews", "QA automation"]
  },
  {
    phase: "Launch",
    description: "Deploy with confidence and monitor closely",
    icon: Rocket,
    color: "text-orange-500",
    deliverables: ["Deployment", "Monitoring", "Documentation"]
  },
  {
    phase: "Scale",
    description: "Optimize, iterate, and grow together",
    icon: TrendingUp,
    color: "text-red-500",
    deliverables: ["Performance tuning", "Feature additions", "Scale planning"]
  }
]

const technologies = [
  { name: "React/Next.js", category: "Frontend", icon: Code },
  { name: "Node.js", category: "Backend", icon: Cpu },
  { name: "TypeScript", category: "Language", icon: Layers },
  { name: "AWS/Azure", category: "Cloud", icon: Globe },
  { name: "Tailwind CSS", category: "Styling", icon: Palette },
  { name: "GraphQL", category: "API", icon: GitBranch },
  { name: "PostgreSQL", category: "Database", icon: Layers },
  { name: "Figma", category: "Design", icon: PenTool }
]

const caseStudies = [
  {
    title: "ERP Implementation for TechCorp",
    description: "Modernized legacy systems with custom ERP solution",
    results: ["40% efficiency gain", "99.9% uptime", "$2M cost savings"],
    industry: "Technology",
    icon: Briefcase
  },
  {
    title: "E-commerce Platform for RetailCo",
    description: "Built headless commerce platform with Next.js",
    results: ["200% faster load times", "35% conversion lift", "International expansion"],
    industry: "Retail",
    icon: Smartphone
  },
  {
    title: "Customer Service Portal for EduFirst",
    description: "Omni-channel support desk with AI automation",
    results: ["50% faster response", "90% CSAT", "24/7 coverage"],
    industry: "Education",
    icon: Headset
  }
]

const engagement = [
  {
    title: "Weekly",
    items: ["Standups with delivery leads", "Issue triage", "Release planning", "Sprint reviews"],
    icon: Calendar,
    color: "text-blue-500"
  },
  {
    title: "Monthly",
    items: ["Usage reviews", "Adoption metrics", "Backlog alignment", "ROI analysis"],
    icon: BarChart3,
    color: "text-green-500"
  },
  {
    title: "Quarterly",
    items: ["Roadmap checkpoints", "Value realization", "Strategic planning", "Business reviews"],
    icon: Target,
    color: "text-purple-500"
  }
]

export default function ServicesPage() {
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
              <Rocket className="w-3 h-3 mr-1" />
              Services
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Services that ship{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                outcomes, not just headcount
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pick a track—product, web, design, UX, customer service, or marketing—and we'll tailor 
              the team and playbooks to your specific needs and goals.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Book a services call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products/erp">
                  See ERP products
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
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              <Zap className="w-3 h-3 mr-1" />
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              End-to-end solutions for your business
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy to execution, we deliver measurable results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full hover:shadow-xl transition-all hover:-translate-y-1 group ${service.popular ? 'border-primary border-2 relative' : ''}`}>
                    {service.popular && (
                      <div className="absolute -top-3 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-3`}>
                          <Icon className={`h-6 w-6 ${service.iconColor}`} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-3">
                        {service.longDescription}
                      </p>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                          Key outcomes
                        </h4>
                        <ul className="space-y-1">
                          {service.outcomes.slice(0, 4).map((item, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                              <CheckCircle2 className={`h-3 w-3 ${service.iconColor} shrink-0 mt-0.5`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {service.features.length} capabilities
                        </Badge>
                        <Button size="sm" className="group" asChild>
                          <Link href={service.cta.href}>
                            {service.cta.label}
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

      {/* Our Process */}
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
              <Workflow className="w-3 h-3 mr-1" />
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How we bring ideas to life
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that delivers results, every time
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-4"
          >
            {process.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="text-center h-full">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 rounded-full ${phase.color.replace('text', 'bg')}/10 flex items-center justify-center mx-auto mb-3`}>
                        <Icon className={`h-6 w-6 ${phase.color}`} />
                      </div>
                      <h3 className="font-semibold mb-1">{phase.phase}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{phase.description}</p>
                      <div className="text-left space-y-1">
                        {phase.deliverables.map((item, i) => (
                          <p key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1 h-1 bg-primary rounded-full" />
                            {item}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
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
              <Cpu className="w-3 h-3 mr-1" />
              Our Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modern tools for modern problems
            </h2>
            <p className="text-lg text-muted-foreground">
              We use the best technologies to build scalable, performant solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">{tech.name}</p>
                      <p className="text-xs text-muted-foreground">{tech.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
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
              Case Studies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results that speak for themselves
            </h2>
            <p className="text-lg text-muted-foreground">
              Real outcomes from real partnerships
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {caseStudies.map((study, index) => {
              const Icon = study.icon
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
                        <Badge variant="outline">{study.industry}</Badge>
                      </div>
                      <CardTitle className="text-lg">{study.title}</CardTitle>
                      <CardDescription>{study.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Engagement Rhythm */}
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
              <Calendar className="w-3 h-3 mr-1" />
              Engagement Rhythm
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How we work together
            </h2>
            <p className="text-lg text-muted-foreground">
              A cadence designed for transparency and alignment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {engagement.map((item, index) => {
              const Icon = item.icon
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
                      <div className="flex items-center gap-2">
                        <Icon className={`h-5 w-5 ${item.color}`} />
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
    <CTASection/>
    </div>
  )
}