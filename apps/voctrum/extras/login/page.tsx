// app/products/login/page.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Lock, 
  Mail, 
  ShieldCheck, 
  Fingerprint,
  Key,
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  Chrome,
  Sparkles,
  Shield,
  Clock,
  Globe,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Scan
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
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
              <Lock className="w-3 h-3 mr-1" />
              Products / Access
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Welcome back to{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Voctrum
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Secure access to your workspace with enterprise-grade authentication. 
              Choose your preferred sign-in method below.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/products/register">
                  Create account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>SOC2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Login Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Sign in</CardTitle>
                    <Badge variant="outline" className="text-primary border-primary">
                      <ShieldCheck className="h-3 w-3 mr-1" />
                      Secure Login
                    </Badge>
                  </div>
                  <CardDescription>
                    Use your credentials to access your workspace
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Chrome className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or continue with email
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
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
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-sm font-medium">
                          Password
                        </Label>
                        <Link 
                          href="#" 
                          className="text-xs text-primary hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Input 
                          id="password" 
                          type="password" 
                          placeholder="••••••••" 
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me for 30 days
                      </label>
                    </div>

                    <Button className="w-full h-11 text-base group" size="lg">
                      Continue to workspace
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="inline-flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3" />
                        SSO enabled
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <Fingerprint className="h-3 w-3" />
                        2FA supported
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    New to Voctrum?{" "}
                    <Link 
                      href="/products/register" 
                      className="text-primary font-medium hover:underline"
                    >
                      Create an account
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* SSO/MFA Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Quick SSO Card */}
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Single Sign-On (SSO)</CardTitle>
                      <CardDescription>
                        Enterprise authentication ready
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="justify-start">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.35 11.1H12.18v2.5h6.51C18.15 16.35 15.9 18 12.18 18 8.25 18 5 14.75 5 10.82 5 6.89 8.25 3.64 12.18 3.64c2.33 0 4.33.95 5.75 2.48l2.12-2.12C18.13 2.2 15.33 1 12.18 1 6.3 1 1.5 5.8 1.5 11.64s4.8 10.64 10.68 10.64c5.5 0 9.42-3.7 9.42-9.44 0-.8-.07-1.54-.25-2.24z"/>
                      </svg>
                      Google Workspace
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.4 1.4L1.4 11.4c-.8.8-.8 2 0 2.8l8.4 8.4c.8.8 2 .8 2.8 0l10-10c.5-.5.8-1.2.8-2V4c0-1.7-1.3-3-3-3h-6c-.8 0-1.5.3-2 .6zM18 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                      </svg>
                      Okta
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      Microsoft
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      OneLogin
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    SAML 2.0, OIDC, and SCIM provisioning supported
                  </p>
                </CardContent>
              </Card>

              {/* MFA Options */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Fingerprint className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Multi-Factor Authentication</CardTitle>
                      <CardDescription>
                        Extra layers of security
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Authenticator App</p>
                        <p className="text-xs text-muted-foreground">Google Authenticator, Microsoft Authenticator</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-500">Supported</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Email OTP</p>
                        <p className="text-xs text-muted-foreground">One-time passwords via email</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-500">Supported</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Scan className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">SMS / Text Message</p>
                        <p className="text-xs text-muted-foreground">Verification codes via SMS</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-500">Supported</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Key className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Hardware Keys</p>
                        <p className="text-xs text-muted-foreground">YubiKey, Titan, etc.</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-500">Supported</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Audit & Compliance Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Shield className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Audit & Compliance</CardTitle>
                      <CardDescription>
                        Enterprise-ready security features
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Real-time audit logging",
                      "Session management",
                      "IP whitelisting",
                      "Password policies",
                      "Login attempt monitoring"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
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
              <Shield className="w-3 h-3 mr-1" />
              Enterprise Security
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bank-level security for your workspace
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced authentication patterns baked into the UI scaffolding
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: "SSO Integration",
                description: "Single Sign-On with major providers including Google, Microsoft, Okta, and OneLogin.",
                icon: ShieldCheck,
                color: "text-blue-500",
                bgColor: "bg-blue-500/10"
              },
              {
                title: "Multi-Factor Auth",
                description: "Support for TOTP, SMS, email OTP, and hardware security keys.",
                icon: Fingerprint,
                color: "text-green-500",
                bgColor: "bg-green-500/10"
              },
              {
                title: "Audit Trail",
                description: "Complete audit logs of all authentication events and access attempts.",
                icon: Lock,
                color: "text-purple-500",
                bgColor: "bg-purple-500/10"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Demo Account Alert */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Alert className="border-primary/20 bg-primary/5">
              <AlertCircle className="h-4 w-4 text-primary" />
              <AlertDescription className="text-sm">
                <span className="font-semibold">Demo credentials:</span> Use demo@voctrum.com / demo123 to explore the platform. 
                For production access, please use your company credentials or contact support.
              </AlertDescription>
            </Alert>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-lg font-semibold mb-2">Need help signing in?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Contact our support team or check our documentation for assistance
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/docs/authentication">
                  View Documentation
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/products/register">
                  Create Account
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Don't have an account yet?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Get started with a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link href="/products/register">
                  Create Free Account
                  <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8 text-sm text-primary-foreground/80">
              <span>✓ No credit card</span>
              <span>✓ 14-day trial</span>
              <span>✓ Full access</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}