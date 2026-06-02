// app/about/page.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Building2, 
  Gauge, 
  Users, 
  Globe, 
  Target, 
  Heart, 
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import CTASection from "@/components/shared/cta-section"


const pillars = [
  {
    title: "Built for operators",
    description: "Workflows designed with finance, operations, and delivery teams in mind. Every feature solves a real problem.",
    icon: Gauge,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    features: ["Custom workflows", "Role-based views", "Automated approvals"]
  },
  {
    title: "Implementation first",
    description: "Guided rollout plans with data migration, training, and hyper-care baked in from day one.",
    icon: Building2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    features: ["Structured onboarding", "Data migration", "Team training"]
  },
  {
    title: "People-centered",
    description: "Role clarity, approvals, and notifications tailored to how teams actually work, not how software thinks they should.",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    features: ["Team collaboration", "Smart notifications", "Clear accountability"]
  }
]

const milestones = [
  { 
    label: "Founded", 
    value: "2019", 
    icon: Building2,
    description: "Started with a vision to transform ERP"
  },
  { 
    label: "Customers", 
    value: "120+", 
    icon: Users,
    description: "Trusted by businesses worldwide"
  },
  { 
    label: "Deployments", 
    value: "7", 
    icon: Globe,
    description: "Countries with active implementations"
  }
]

const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that anticipate tomorrow's challenges.",
    icon: Sparkles,
    color: "text-yellow-500"
  },
  {
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping you achieve your business goals.",
    icon: TrendingUp,
    color: "text-green-500"
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security protocols ensure your data remains protected at all times.",
    icon: Shield,
    color: "text-red-500"
  },
  {
    title: "Rapid Innovation",
    description: "We move fast to bring you the latest features and improvements continuously.",
    icon: Zap,
    color: "text-blue-500"
  }
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former ERP consultant with 15+ years of experience in enterprise software.",
    avatar: "SC",
    social: "linkedin"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    bio: "Tech visionary who built scalable systems for Fortune 500 companies.",
    avatar: "MR",
    social: "linkedin"
  },
  {
    name: "David Kim",
    role: "Head of Product",
    bio: "Product leader focused on creating intuitive experiences for complex workflows.",
    avatar: "DK",
    social: "linkedin"
  },
  {
    name: "Emily Watson",
    role: "Customer Success",
    bio: "Dedicated to ensuring every client achieves their desired outcomes.",
    avatar: "EW",
    social: "linkedin"
  }
]

const stats = [
  { label: "Years of Experience", value: "15+", suffix: "years" },
  { label: "Team Members", value: "50+", suffix: "experts" },
  { label: "Data Processed", value: "1M+", suffix: "records/day" },
  { label: "Customer Satisfaction", value: "99%", suffix: "satisfaction" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6">
              <Target className="w-3 h-3 mr-1" />
              About Voctrum
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              A focused team building{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                pragmatic ERP experiences
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We craft opinionated defaults so your teams can go live faster, with less risk and clearer accountability. 
              No bloated features. Just solutions that work.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group">
                View Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Meet the Team
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
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 bg-transparent shadow-none">
                <CardContent className="p-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground/60 mt-1">
                    {stat.suffix}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Our Pillars */}
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
              Our Foundation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built on Three Core Pillars
            </h2>
            <p className="text-lg text-muted-foreground">
              Every decision we make is guided by these principles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${pillar.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${pillar.color}`} />
                      </div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      <CardDescription className="text-base">
                        {pillar.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pillar.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className={`h-4 w-4 ${pillar.color}`} />
                            <span className="text-muted-foreground">{feature}</span>
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

      {/* Our Values */}
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
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that shape our culture and guide our decisions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                  <Card className="h-full text-center hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Icon className={`h-6 w-6 ${value.color}`} />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid gap-6 rounded-2xl border bg-card p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-4">Our Journey</Badge>
                <h2 className="text-3xl font-bold mb-2">Key Milestones</h2>
                <p className="text-muted-foreground">Growing stronger every year</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {milestones.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <p className="text-sm font-medium text-primary mb-1">{item.label}</p>
                      <p className="text-3xl font-bold mb-1">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  )
                })}
              </div>

              <Separator className="my-6" />

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  <Award className="h-4 w-4 inline mr-1 text-primary" />
                  Recognized as a leading ERP solution provider
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the People Behind Voctrum
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced leaders dedicated to your success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarFallback className="text-lg bg-primary/10 text-primary">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-2">
                      <Button variant="ghost" size="sm" className="text-xs">
                        LinkedIn
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Twitter
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

          <CTASection/>
    </div>
  )
}