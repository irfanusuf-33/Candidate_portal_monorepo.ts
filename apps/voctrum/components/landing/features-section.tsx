    // components/landing/features-section.tsx
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  LineChart, 
  Users, 
  Database, 
  Lock, 
  Cloud, 
  Zap,
  BarChart3,
  TrendingUp
} from "lucide-react"

const features = [
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "Real-time insights and predictive analytics to drive data-backed decisions",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools for distributed teams and departments",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Centralized data hub with automated workflows and validation",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level security with role-based access and encryption",
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Scalable cloud infrastructure with 99.9% uptime guarantee",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Instant data processing and synchronization across all modules",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  }
]

const stats = [
  { label: "Active Users", value: "10K+", icon: Users },
  { label: "Data Points", value: "1M+", icon: Database },
  { label: "Processing", value: "99.9%", icon: Zap },
  { label: "ROI Increase", value: "40%", icon: TrendingUp }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Scale Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive ERP solutions designed to streamline operations and drive growth
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-primary">
                      <span>Learn more</span>
                      <BarChart3 className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}