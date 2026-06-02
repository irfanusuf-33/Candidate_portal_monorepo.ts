// import Link from "next/link";
// import {
//   ArrowRight,
//   BarChart3,
//   ShieldCheck,
//   Sparkles,
//   Users,
//   Workflow,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// const flows = [
//   {
//     title: "Products",
//     href: "/products",
//     description: "Explore core ERP modules and feature highlights.",
//     icon: <BarChart3 className="size-5 text-primary" />,
//   },
//   {
//     title: "Services",
//     href: "/services",
//     description: "See how we implement, migrate, and support teams.",
//     icon: <Workflow className="size-5 text-primary" />,
//   },
//   {
//     title: "Industries",
//     href: "/industries",
//     description: "Vertical-specific playbooks and sample workflows.",
//     icon: <ShieldCheck className="size-5 text-primary" />,
//   },
//   {
//     title: "Careers",
//     href: "/carrers",
//     description: "Meet the team, culture, and open roles.",
//     icon: <Users className="size-5 text-primary" />,
//   },
// ];

// const modules = [
//   {
//     title: "Finance & Billing",
//     description:
//       "Invoice automation, revenue recognition, and role-based approvals out of the box.",
//   },
//   {
//     title: "Inventory & Fulfillment",
//     description:
//       "Track stock, batches, and shipments with real-time exceptions surfaced in dashboards.",
//   },
//   {
//     title: "Projects & Services",
//     description:
//       "Plan capacity, capture time, and tie delivery milestones to revenue.",
//   },
// ];

// const milestones = [
//   {
//     title: "Discover",
//     detail: "Assess current tools, map critical paths, and align on success metrics.",
//   },
//   {
//     title: "Configure",
//     detail: "Stand up environments, connect data sources, and tailor roles & permissions.",
//   },
//   {
//     title: "Rollout",
//     detail: "Pilot with a core team, document playbooks, then scale to business units.",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="space-y-10">
//       <section className="grid gap-6 rounded-2xl border border-border/70 bg-background/70 p-8 shadow-sm lg:grid-cols-[1.15fr_0.85fr]">
//         <div className="space-y-4">
//           <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
//             <Sparkles className="size-3.5" />
//             Guided ERP tour
//           </div>
//           <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
//             Everything you need to see the Voctrum ERP flow in one place.
//           </h1>
//           <p className="max-w-2xl text-lg text-muted-foreground">
//             Jump between product modules, implementation steps, and contact points without losing the story.
//           </p>
//           <div className="flex flex-wrap gap-3">
//             <Button asChild>
//               <Link href="/products" className="inline-flex items-center gap-2">
//                 Start with products
//                 <ArrowRight className="size-4" />
//               </Link>
//             </Button>
//             <Button variant="outline" asChild>
//               <Link href="/contact">Talk to us</Link>
//             </Button>
//           </div>
//         </div>

//         <Card className="border-border/80 bg-card/80">
//           <CardHeader>
//             <CardTitle className="text-lg">How the walkthrough works</CardTitle>
//             <CardDescription>
//               Follow these stops to understand the app structure.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ol className="space-y-4 text-sm text-muted-foreground">
//               <li className="flex items-start gap-3">
//                 <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
//                 <div>
//                   <p className="font-medium text-foreground">Explore modules</p>
//                   <p>Review the core product areas and key KPIs.</p>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
//                 <div>
//                   <p className="font-medium text-foreground">Map services</p>
//                   <p>See how we implement, migrate, and support teams.</p>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
//                 <div>
//                   <p className="font-medium text-foreground">Pick your path</p>
//                   <p>Jump to industries or contact to plan your rollout.</p>
//                 </div>
//               </li>
//             </ol>
//           </CardContent>
//         </Card>
//       </section>

//       <section className="space-y-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-wide text-primary">Navigation</p>
//             <h2 className="text-2xl font-semibold">See the main areas</h2>
//             <p className="text-sm text-muted-foreground">
//               Each card jumps into a page with more detail.
//             </p>
//           </div>
//         </div>
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//           {flows.map((flow) => (
//             <Card key={flow.title} className="h-full border-border/70 bg-card/70">
//               <CardHeader className="flex flex-row items-center gap-3">
//                 {flow.icon}
//                 <div>
//                   <CardTitle>{flow.title}</CardTitle>
//                   <CardDescription>{flow.description}</CardDescription>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <Button variant="outline" size="sm" asChild>
//                   <Link href={flow.href} className="inline-flex items-center gap-2">
//                     Open
//                     <ArrowRight className="size-3.5" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       <section className="space-y-4">
//         <p className="text-xs font-semibold uppercase tracking-wide text-primary">
//           Product modules
//         </p>
//         <div className="grid gap-4 md:grid-cols-3">
//           {modules.map((module) => (
//             <Card key={module.title} className="h-full border-border/70 bg-card/70">
//               <CardHeader>
//                 <CardTitle>{module.title}</CardTitle>
//                 <CardDescription>{module.description}</CardDescription>
//               </CardHeader>
//               <CardContent className="text-sm text-muted-foreground">
//                 <p>Dashboards, automations, and approvals ship ready for teams.</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       <section className="space-y-4">
//         <p className="text-xs font-semibold uppercase tracking-wide text-primary">
//           Implementation path
//         </p>
//         <div className="grid gap-4 md:grid-cols-3">
//           {milestones.map((milestone, index) => (
//             <Card key={milestone.title} className="border-border/70 bg-card/70">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
//                     {index + 1}
//                   </span>
//                   {milestone.title}
//                 </CardTitle>
//                 <CardDescription>{milestone.detail}</CardDescription>
//               </CardHeader>
//             </Card>
//           ))}
//         </div>
//       </section>

//       <Card className="border-border/70 bg-primary text-primary-foreground">
//         <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
//           <div>
//             <CardTitle className="text-xl">Ready to see your data in Voctrum?</CardTitle>
//             <CardDescription className="text-primary-foreground/80">
//               Share your current stack and we will propose a migration path within 48 hours.
//             </CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="pt-0">
//           <Button variant="secondary" asChild>
//             <Link href="/contact">Book a demo</Link>
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




// app/page.tsx

import AnalyticsSection from "@/components/landing/analytics-section"
import IntegrationsSection from "@/components/landing/integrations-section"
import PricingSection from "@/components/landing/pricing-section"
import TestimonialsSection from "@/components/landing/testimonials-section"

import HeroSection from "@/components/landing/hero-section"
import FeaturesSection from "@/components/landing/features-section"
import CTASection from "@/components/shared/cta-section"



export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AnalyticsSection />
      <IntegrationsSection />
      {/* <PricingSection /> */}
      {/* <TestimonialsSection />s */}
      <CTASection />
    </main>
  )
}