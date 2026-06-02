// app/careers/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  HandHeart, 
  Lightbulb, 
  Users, 
  Rocket,
  Globe,
  Coffee,
  Heart,
  Award,
  Clock,
  Home,
  Laptop,
  BookOpen,
  Target,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  MapPin,
  Calendar,
  Code,
  Figma,
  Database,
  GitBranch,
  Smartphone,
  Palette,
  MessageSquare,
  Headphones
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CTASection from "@/components/shared/cta-section"



const values = [
  {
    title: "Bias for clarity",
    description: "We document decisions and default to async to keep teams aligned across time zones.",
    longDescription: "No meetings for meetings' sake. We write things down, share openly, and make sure everyone has context.",
    icon: Lightbulb,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    benefits: ["Async-first culture", "Documentation by default", "Transparent decisions"]
  },
  {
    title: "Care for customers",
    description: "We sit with users, watch them work, and ship updates that remove friction.",
    longDescription: "Our customers are our north star. We build features they actually need, not what's trendy.",
    icon: HandHeart,
    iconColor: "text-red-500",
    bgColor: "bg-red-500/10",
    benefits: ["User research sessions", "Customer advisory board", "Rapid feedback loops"]
  },
  {
    title: "Grow together",
    description: "Pairing, mentorship, and demos keep us learning from each other.",
    longDescription: "We believe the best work happens when we learn from each other. Knowledge sharing is in our DNA.",
    icon: Users,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    benefits: ["Weekly knowledge shares", "Mentorship program", "Conference budget"]
  },
]

const perks = [
  // {
  //   title: "Remote-first",
  //   description: "Work from anywhere. We're distributed across 7 countries and 12 time zones.",
  //   icon: Globe,
  //   color: "text-green-500",
  //   bgColor: "bg-green-500/10"
  // },
  {
    title: "Flexible hours",
    description: "Async culture means you own your schedule. Focus on output, not hours.",
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Home office stipend",
    description: "Annual budget for your home office setup and equipment.",
    icon: Home,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  // {
  //   title: "Learning budget",
  //   description: "$2,000 yearly for courses, conferences, and learning materials.",
  //   icon: BookOpen,
  //   color: "text-purple-500",
  //   bgColor: "bg-purple-500/10"
  // },
  {
    title: "Health & wellness",
    description: "Comprehensive health coverage and wellness stipend for gym or meditation apps.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  // {
  //   title: "Team retreats",
  //   description: "Bi-annual in-person retreats to connect, plan, and have fun together.",
  //   icon: Coffee,
  //   color: "text-yellow-500",
  //   bgColor: "bg-yellow-500/10"
  // }
]

const roles = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "We're looking for a senior frontend developer to lead our UI architecture and build complex third-party integrations.",
    longDescription: "You'll work on our core ERP platform, building responsive interfaces and integrating with APIs from major platforms including TikTok, YouTube, Facebook, and more.",
    icon: Code,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    requirements: [
      "3+ years of experience with HTML, CSS, and JavaScript",
      "Expert-level React.js and TypeScript",
      "Experience with complex third-party API integrations",
      "Understanding of modern frontend tooling (Webpack, Vite, etc.)",
      "Experience with state management (Redux, Zustand, etc.)",
      "Knowledge of responsive design and cross-browser compatibility",
      "Experience with authentication flows (OAuth, JWT, etc.)"
    ],
    niceToHave: [
      "Experience with shadcn/ui and Tailwind CSS",
      "Knowledge of Next.js or similar frameworks",
      "Experience with real-time integrations (WebSockets)",
      "Contributions to open source",
      "Experience in ERP or enterprise software"
    ],
    team: "Frontend Platform Team",
    reportsTo: "Head of Engineering",
    postedDate: "2 days ago"
  },
  // {
  //   title: "Implementation Specialist",
  //   department: "Customer Success",
  //   location: "Remote",
  //   type: "Full-time",
  //   experience: "3+ years",
  //   description: "Guide customers through successful ERP implementation and onboarding.",
  //   icon: Rocket,
  //   iconColor: "text-purple-500",
  //   bgColor: "bg-purple-500/10",
  //   requirements: [
  //     "Experience in customer implementation",
  //     "Strong project management skills",
  //     "Technical aptitude for APIs and integrations",
  //     "Excellent communication skills"
  //   ],
  //   niceToHave: ["ERP experience", "Training delivery", "Documentation skills"],
  //   postedDate: "1 week ago"
  // },
  // {
  //   title: "Product Designer",
  //   department: "Product",
  //   location: "Hybrid - Bengaluru",
  //   type: "Full-time",
  //   experience: "4+ years",
  //   description: "Design intuitive interfaces for complex enterprise workflows.",
  //   icon: Palette,
  //   iconColor: "text-pink-500",
  //   bgColor: "bg-pink-500/10",
  //   requirements: [
  //     "Experience designing complex B2B applications",
  //     "Proficiency in Figma",
  //     "Understanding of design systems",
  //     "User research experience"
  //   ],
  //   niceToHave: ["Motion design", "Frontend basics", "Design system contribution"],
  //   postedDate: "3 days ago"
  // },
  // {
  //   title: "Full-stack Engineer",
  //   department: "Engineering",
  //   location: "Remote",
  //   type: "Contract",
  //   experience: "4+ years",
  //   description: "Build and maintain features across our entire stack.",
  //   icon: Database,
  //   iconColor: "text-green-500",
  //   bgColor: "bg-green-500/10",
  //   requirements: [
  //     "Experience with Node.js",
  //     "React expertise",
  //     "Database design (PostgreSQL)",
  //     "API design and development"
  //   ],
  //   niceToHave: ["TypeScript", "Cloud experience", "DevOps knowledge"],
  //   postedDate: "2 weeks ago"
  // }
]

const stats = [
  { label: "Team Members", value: "50+", icon: Users },
  { label: "Countries", value: "7", icon: Globe },
  { label: "Women in Tech", value: "42%", icon: Heart },
  { label: "Years Avg Tenure", value: "3.2", icon: Award }
]

const teamMembers = [
  { name: "Sarah Chen", role: "Head of Engineering", avatar: "SC", expertise: "Frontend Architecture" },
  { name: "Michael Rodriguez", role: "Senior Frontend Lead", avatar: "MR", expertise: "React & TypeScript" },
  { name: "Priya Patel", role: "Frontend Developer", avatar: "PP", expertise: "UI Components" },
  { name: "David Kim", role: "Product Manager", avatar: "DK", expertise: "ERP Products" }
]

const benefits = [
  "Competitive salary & equity",
  "Health insurance",
  "401(k) with match",
  "Unlimited PTO",
  "Home office stipend",
  "Learning budget",
  "Wellness stipend",
  "Team retreats"
]

export default function CareersPage() {
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
              <Users className="w-3 h-3 mr-1" />
              Careers at Voctrum
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Join the team building{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                practical ERP experiences
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We are a multi-disciplinary crew of <span className="font-bold text-primary">50+ engineers, operators, and designers</span> 
              focused on measurable impact. Join us in transforming how businesses operate.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="#open-roles">
                  View open roles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#values">
                  See our values
                  <Heart className="ml-2 h-4 w-4" />
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

      {/* Values Section */}
      <section id="values" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Target className="w-3 h-3 mr-1" />
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What drives us forward
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide how we work, build, and grow together
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${value.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${value.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {value.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-3">
                        {value.longDescription}
                      </p>
                      <div className="space-y-2">
                        {value.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className={`h-4 w-4 ${value.iconColor}`} />
                            <span>{benefit}</span>
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

      {/* Why Join Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Why Join Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                More than just a job
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're building something meaningful together. Here's what you can expect when you join the Voctrum team.
              </p>
              
              <div className="space-y-4">
                {[
                  "Work with a passionate, distributed team",
                  "Solve challenging problems at scale",
                  "Direct impact on product direction",
                  "Learn from experienced mentors",
                  "Build your career with clear growth paths"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#open-roles">
                    Join our team
                    <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {/* {teamMembers.map((member, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="pt-6">
                    <Avatar className="w-16 h-16 mx-auto mb-3">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-xs text-primary">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))} */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
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
              <Award className="w-3 h-3 mr-1" />
              Perks & Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We take care of our team
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive benefits designed to support your life and work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {perks.map((perk, index) => {
              const Icon = perk.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 rounded-lg ${perk.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${perk.color}`} />
                      </div>
                      <h3 className="font-semibold mb-2">{perk.title}</h3>
                      <p className="text-sm text-muted-foreground">{perk.description}</p>
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
            className="mt-12 text-center"
          >
            <Card className="inline-block">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {benefits.map((benefit, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Briefcase className="w-3 h-3 mr-1" />
              Open Roles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join us in building the future of ERP
            </h2>
            <p className="text-lg text-muted-foreground">
              We're looking for passionate people to join our growing team
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {roles.map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`hover:shadow-xl transition-all hover:-translate-y-1 ${role.title.includes("Senior Frontend") ? 'border-primary border-2' : ''}`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg ${role.bgColor} flex items-center justify-center`}>
                            <Icon className={`h-6 w-6 ${role.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{role.title}</h3>
                            <div className="flex flex-wrap items-center gap-3 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {role.department}
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {role.location}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {role.type}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center">
                                <Briefcase className="h-3 w-3 mr-1" />
                                {role.experience}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Posted {role.postedDate}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4">
                        {role.description}
                      </p>

                      {/* Requirements */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {role.requirements.slice(0, 4).map((req, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                <CheckCircle2 className={`h-3 w-3 ${role.iconColor} shrink-0 mt-0.5`} />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {role.niceToHave && (
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Nice to have:</h4>
                            <ul className="space-y-1">
                              {role.niceToHave.map((item, i) => (
                                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                  <Sparkles className="h-3 w-3 text-yellow-500 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Senior Frontend Role - Full Details */}
                      {role.title.includes("Senior Frontend") && (
                        <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                          <h4 className="text-sm font-semibold mb-3">Complete requirements:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs font-medium text-primary mb-2">Technical Skills</p>
                              <ul className="space-y-1">
                                {role.requirements.map((req, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <CheckCircle2 className="h-3 w-3 text-blue-500 shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-primary mb-2">Nice to Have</p>
                              <ul className="space-y-1">
                                {role.niceToHave?.map((item, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <Sparkles className="h-3 w-3 text-yellow-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t">
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium">Team:</span> {role.team || role.department}
                          {role.reportsTo && (
                            <> • <span className="font-medium">Reports to:</span> {role.reportsTo}</>
                          )}
                        </div>
                        <Button size="sm" className="group" asChild>
                          <Link href="/contact">
                            Apply now
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

      {/* Life at Voctrum */}
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
              <Coffee className="w-3 h-3 mr-1" />
              Life at Voctrum
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More than just work
            </h2>
            <p className="text-lg text-muted-foreground">
              We build together, learn together, and celebrate together
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Weekly demos",
                description: "Share what you're building with the whole team every Friday",
                icon: MessageSquare
              },
              {
                title: "Pair programming",
                description: "Learn from peers through regular pairing sessions",
                icon: Users
              },
              // {
              //   title: "Remote retreats",
              //   description: "Meet up twice a year in amazing locations",
              //   icon: Globe
              // }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </section>


            <CTASection/>
      {/* CTA Section
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
              Ready to build the future of ERP?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join a team of 50+ passionate people working to transform how businesses operate
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link href="#open-roles">
                  View open roles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">
                  Get in touch
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-4">
              We typically respond within 48 hours
            </p>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}