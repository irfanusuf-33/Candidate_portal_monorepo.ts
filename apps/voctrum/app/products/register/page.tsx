// app/products/register/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  UserPlus,
  Mail,
  Building2,
  User,
  ArrowRight,
  Sparkles,
  Github,
  Chrome,
  CheckCircle2,
  Clock,
  Globe,
  Lock,
  Rocket,
  Users,
  CreditCard,
  Calendar,
  HelpCircle
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

import { ChangeEvent, useState } from "react"
import { axiosInstance } from "@/lib/axiosInstance"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


export default function RegisterPage() {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    "fName": "",
    "lName": "",
    "email": "",
    "pwd": "",
    "tenantId": ""

  })

  const router = useRouter()



  const handlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      const form = formData
      const response = await axiosInstance.post("/auth/register", { form })

      if (response.status === 201 ||  response.data.success) {
        // Show success toast
        toast.success("Registration Successful!", {
          description: "Your account has been created. Redirecting to login...",
          duration: 3000,
        })

        // Redirect to login page
        setTimeout(() => {
          router.push("https://erp.voctrum.com/login")
        }, 3000)
      }

    } catch (error: any) {
      console.error('Registration error:', error)

      // Get error message
      const errorMessage = error.response?.data?.msg ||
        error.response?.data?.error ||
        "Something went wrong. Please try again."

      // Show error toast
      toast.error("Registration Failed", {
        description: errorMessage,
        duration: 5000,
      })

      // Handle specific status codes
      // if (error.response?.status === 409) {
      //   toast.error("User already exists", {
      //     description: "This email is already registered. Please login instead.",
      //   })
      // } else if (error.response?.status === 400) {
      //   toast.error("Validation Error", {
      //     description: "Please check your input and try again.",
      //   })
      // }else if (error.response?.status === 401) {
      //   toast.error("Validation Error", {
      //     description: "Unauthorised",
      //   })
      // }

    } finally {
      setLoading(false)
    }
  }





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
              <UserPlus className="w-3 h-3 mr-1" />
              Products / Access
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Create your{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Voctrum workspace
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with a 30-day free trial. No credit card required.
              Full access to all modules and features.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="https://erp.voctrum.com/login">
                  Back to login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-primary" />
                <span>Full access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Registration Section */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Create workspace</CardTitle>
                    <Badge variant="outline" className="text-green-500 border-green-500">
                      <Sparkles className="h-3 w-3 mr-1" />
                      30-day trial
                    </Badge>
                  </div>
                  <CardDescription>
                    We use this info to set up your workspace shell and send you a verification email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Social Registration */}
                  {/* <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Chrome className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                  </div> */}

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Register with email
                      </span>
                    </div>
                  </div>
                  <form onSubmit={(e) => { handleRegister(e) }}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium">
                            First name
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="firstName"
                              placeholder="First Name "
                              className="pl-10"
                              value={formData.fName}
                              name="fName"
                              required
                              onChange={(e: ChangeEvent<HTMLInputElement>) => { handlChange(e) }}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium">
                            Last name
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Last Name "
                            value={formData.lName}
                            name="lName"
                            required
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { handlChange(e) }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Work email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            className="pl-10"
                            value={formData.email}
                            name="email"
                            required
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { handlChange(e) }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">
                          Company name
                        </Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="company"
                            placeholder="e.g Acme Corp"
                            className="pl-10"
                            value={formData.tenantId}
                            name="tenantId"
                            required
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { handlChange(e) }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">
                          Password
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a strong password"
                          required
                          name ="pwd"
                          value={formData.pwd}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => { handlChange(e) }}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Minimum 8 characters with at least one number , smallcase , uppercase and one special character
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" required />
                          <label
                            htmlFor="terms"
                            className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the{" "}
                            <Link href="/terms" className="text-primary hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-primary hover:underline">
                              Privacy Policy
                            </Link>
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="updates" />
                          <label
                            htmlFor="updates"
                            className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Send me product updates and marketing emails (optional)
                          </label>
                        </div>
                      </div>

                      <Button type="submit" className="w-full h-11 text-base group" size="lg">
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <p className="pl-3">Loading ...  </p>
                          </span>
                        ) : "Create workspace"}
                        <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="inline-flex items-center gap-1">
                          <Lock className="h-3 w-3" />
                          Enterprise-grade security
                        </div>
                        <div className="inline-flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          Up to 10 users in a free trial
                        </div>
                      </div>
                    </div>
                  </form>
                  <p className="text-center text-sm text-muted-foreground">
                    Already have access?{" "}
                    <Link
                      href="/products/login"
                      className="text-primary font-medium hover:underline"
                    >
                      Sign in to your workspace
                    </Link>
                  </p>


                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Benefits & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Trial Benefits */}
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Free trial includes</CardTitle>
                      <CardDescription>
                        Everything you need to get started
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Full access to all 6  ERP modules",
                      "Up to 10 team members",
                      "1GB storage included",
                      // "Email support with 24hr response",
                      // "API access (1,000 calls/day)",
                      "Sample data and templates",
                      "Guided onboarding tour"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Provisioning Options */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <ShieldCheck className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Provisioning options</CardTitle>
                      <CardDescription>
                        Flexible setup for any team size
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">SSO (SAML/OIDC)</h4>
                    <p className="text-xs text-muted-foreground">
                      Enterprise-grade single sign-on with major providers including
                      Google Workspace, Microsoft, Okta, and OneLogin.
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">Email-first invites</h4>
                    <p className="text-xs text-muted-foreground">
                      Simple invitation-based onboarding for smaller teams.
                      Send invites and manage access easily.
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">SCIM provisioning</h4>
                    <p className="text-xs text-muted-foreground">
                      Automated user provisioning and deprovisioning with SCIM 2.0
                      compliance for enterprise organizations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What happens next */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">What happens next?</CardTitle>
                      <CardDescription>
                        Your 30-day journey starts now
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {[
                      "Verify your email address",
                      "Set up your workspace profile",
                      "Create account for  team members",
                      "Import your data (optional)",
                      "Start exploring modules"
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

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
              Registration FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common questions about getting started
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about creating your workspace
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                q: "Do I need a credit card to start?",
                a: "No, our 30-day free trial doesn't require a credit card. You'll have full access to all features."
              },
              {
                q: "Can I upgrade or cancel anytime?",
                a: "Yes, you can upgrade to a paid plan or cancel your trial at any time with no questions asked."
              },
              {
                q: "What happens after the trial?",
                a: "We'll notify you before your trial ends. Choose a plan that fits your needs or export your data."
              },
              {
                q: "Is my data secure during trial?",
                a: "Absolutely. Trial accounts have the same enterprise-grade security as paid plans."
              },
              {
                q: "Can I invite my team?",
                a: "Yes, you can invite up to 10 team members during the trial period."
              },
              {
                q: "What support is available during trial?",
                a: "Email support with 24-hour response time, plus documentation and onboarding guides."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Option */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need an enterprise plan?</h3>
                    <p className="text-muted-foreground">
                      Custom pricing, dedicated support, and advanced security for large organizations.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button size="lg" asChild>
                      <Link href="/contact">
                        Contact Sales
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/products/erp/">
                        View Pricing
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>


    </div>
  )
}