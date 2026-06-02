// components/landing/analytics-section.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  BarChart4
} from "lucide-react"

const metrics = [
  {
    label: "Revenue",
    value: "$1.2M",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign
  },
  {
    label: "Users",
    value: "45.2K",
    change: "+8.2%",
    trend: "up",
    icon: Users
  },
  {
    label: "Orders",
    value: "2,345",
    change: "-3.1%",
    trend: "down",
    icon: ShoppingCart
  },
  {
    label: "Conversion",
    value: "3.2%",
    change: "+2.4%",
    trend: "up",
    icon: TrendingUp
  }
]

const chartData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 800 },
  { month: "May", value: 700 },
  { month: "Jun", value: 900 }
]

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              <BarChart4 className="w-3 h-3 mr-1" />
              Analytics
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-Time Analytics at Your Fingertips
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Make data-driven decisions with comprehensive analytics and customizable dashboards. Monitor KPIs, track trends, and identify opportunities instantly.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Customizable dashboards",
                "Real-time data updates",
                "Predictive analytics",
                "Automated reporting"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg">
              Explore Analytics
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right Column - Analytics Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardContent className="p-0">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                      <div key={index} className="p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center justify-between mb-2">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <Badge 
                            variant={metric.trend === "up" ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {metric.trend === "up" ? (
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3 mr-1" />
                            )}
                            {metric.change}
                          </Badge>
                        </div>
                        <div className="text-xl font-bold">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Chart Preview */}
                <div className="h-48 flex items-end justify-between gap-2">
                  {chartData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(item.value / 900) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-1 bg-primary/20 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                        {item.value}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-lg" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  {chartData.map((item, index) => (
                    <span key={index}>{item.month}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}