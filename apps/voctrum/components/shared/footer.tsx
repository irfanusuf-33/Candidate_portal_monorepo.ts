import Link from "next/link"
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Sales Pipeline", href: "/products" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "/extras/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/carrers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/contact" },
      { label: "FAQs", href: "#faqs" },
      { label: "Email Support", href: "mailto:support@voctrum.com" },
      { label: "Live Chat", href: "/contact" },
    ],
  },
]

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/voctrum/posts/?feedView=all",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/voctrumglobal/",
    icon: FaFacebookF,
  },
]

export default function Footer() {
  return (
    <footer className="relative -mt-px overflow-hidden bg-[#050844] px-5 pb-10 pt-24 text-white md:px-8 lg:pt-28">
      <div className="absolute inset-0 bg-[url('/BackgroundImg2.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,58,0.92),rgba(10,18,72,0.72),rgba(31,73,190,0.2))]" />

      <div className="relative mx-auto max-w-[1005px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <h2 className="max-w-[440px] text-[42px] font-bold leading-[1.08] sm:text-[52px]">
              Stay Updated with
              <br />
              Voctrum ERP
            </h2>
            <p className="mt-4 max-w-[370px] text-base leading-snug text-white/78">
              Get product updates, sales tips, and feature releases delivered to your inbox.
            </p>

            <form className="mt-7 flex max-w-[335px] gap-2">
              <input
                aria-label="Email address"
                type="email"
                placeholder="Enter your email"
                className="h-[38px] min-w-0 flex-1 rounded-full bg-white px-4 text-sm text-[#172283] outline-none placeholder:text-[#6c78bd]"
              />
              <button
                type="submit"
                className="h-[38px] rounded-full bg-[#456cff] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#3158f5]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-bold text-white">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-base text-white/72">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/26 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 text-sm text-white/72 md:flex-row">
            <div className="flex items-center gap-8">
              <Link href="/legal/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>

            <p>© 2026 Voctrum</p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white transition-colors hover:text-[#8fb0ff]"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
