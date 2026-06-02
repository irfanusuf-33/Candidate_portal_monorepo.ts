// components/landing/integrations-section.tsx
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  SiTiktok, 
  SiYoutube, 
  SiFacebook, 
  SiInstagram,
  SiGitter,
  SiLinkerd,
  SiShopify,
  SiSalesforce
} from "react-icons/si"

const integrations = [
  { name: "TikTok", icon: SiTiktok, color: "#000000" },
  { name: "YouTube", icon: SiYoutube, color: "#FF0000" },
  { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
  { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
  { name: "Twitter", icon: SiGitter, color: "#1DA1F2" },
  { name: "LinkedIn", icon: SiLinkerd, color: "#0A66C2" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" }
]

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Integrations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect Your Favorite Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            Seamlessly integrate with popular platforms and APIs to centralize your data
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-background group-hover:scale-110 transition-transform">
                        <Icon 
                          className="w-8 h-8" 
                          style={{ color: integration.color }}
                        />
                      </div>
                    </div>
                    <h3 className="font-semibold">{integration.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">Integrated</p>
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
          <Badge variant="secondary" className="text-sm px-4 py-2">
            + 50+ more integrations available
          </Badge>
        </motion.div>
      </div>
    </section>
  )
}