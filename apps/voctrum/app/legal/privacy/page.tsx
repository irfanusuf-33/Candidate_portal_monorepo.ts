// app/privacy/page.tsx (or pages/privacy.tsx depending on your setup)


// components/legal/privacy-policy.tsx
// import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ShieldIcon } from 'lucide-react';


// Note: Since you only provided Terms of Service, I'll create a comprehensive Privacy Policy
// based on standard practices and your company information. You should customize this
// with your actual privacy practices.
const PrivacyPolicy = ()=> {
  const sections = [
    {
      id: 'introduction',
      title: '1. INTRODUCTION',
      content: [
        'Voctrum Pvt Ltd ("Voctrum", "we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website voctrum.com or use our services.',
        '',
        'Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.',
      ],
    },
    {
      id: 'information-collection',
      title: '2. INFORMATION WE COLLECT',
      content: [
        'We may collect information about you in a variety of ways:',
        '',
        '2.1 Personal Data',
        '• Name and contact information (email address, phone number)',
        '• Account credentials',
        '• Billing information',
        '• Company details',
        '',
        '2.2 Data from Connected Platforms',
        '• Analytics data from social media platforms (TikTok, YouTube, Facebook)',
        '• Account information from connected services',
        '• Usage data and metrics',
        '',
        '2.3 Automatically Collected Information',
        '• IP address',
        '• Browser type',
        '• Operating system',
        '• Access times',
        '• Referring website addresses',
      ],
    },
    {
      id: 'use-of-information',
      title: '3. HOW WE USE YOUR INFORMATION',
      content: [
        'We use the information we collect to:',
        '• Provide, operate, and maintain our services',
        '• Process transactions and send related information',
        '• Manage your account',
        '• Respond to your comments and questions',
        '• Send technical notices and support messages',
        '• Monitor and analyze usage patterns',
        '• Improve our services',
        '• Protect against unauthorized access',
        '• Comply with legal obligations',
      ],
    },
    {
      id: 'legal-basis',
      title: '4. LEGAL BASIS FOR PROCESSING',
      content: [
        'We process your personal data based on:',
        '• Your consent (where required)',
        '• Performance of a contract with you',
        '• Compliance with legal obligations',
        '• Our legitimate business interests',
      ],
    },
    {
      id: 'sharing-information',
      title: '5. SHARING YOUR INFORMATION',
      content: [
        'We may share your information with:',
        '• Service providers and business partners',
        '• Third-party platforms you connect (TikTok, YouTube, Facebook)',
        '• Professional advisors',
        '• Law enforcement when required by law',
        '• Successors in case of business transaction',
        '',
        'We do not sell your personal information to third parties.',
      ],
    },
    {
      id: 'third-party-platforms',
      title: '6. THIRD-PARTY PLATFORMS',
      content: [
        'Our services integrate with third-party platforms including TikTok, YouTube, and Facebook. When you connect these accounts:',
        '• You authorize us to access your data from these platforms',
        '• Your use of these platforms is governed by their privacy policies',
        '• We are not responsible for these platforms\' privacy practices',
      ],
    },
    {
      id: 'data-security',
      title: '7. DATA SECURITY',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal data, including:',
        '• Encryption of data in transit and at rest',
        '• Access controls and authentication',
        '• Regular security assessments',
        '• Incident response procedures',
        '• Employee training on data protection',
        '',
        'However, no method of transmission over the Internet is 100% secure.',
      ],
    },
    {
      id: 'data-retention',
      title: '8. DATA RETENTION',
      content: [
        'We retain your personal data only as long as necessary to:',
        '• Provide you with services',
        '• Comply with legal obligations',
        '• Resolve disputes',
        '• Enforce our agreements',
        '',
        'Upon termination of your account, we will delete or anonymize your data within a reasonable period, unless required to retain it by law.',
      ],
    },
    {
      id: 'your-rights',
      title: '9. YOUR RIGHTS',
      content: [
        'Depending on your location, you may have the right to:',
        '• Access your personal data',
        '• Correct inaccurate data',
        '• Delete your data',
        '• Restrict or object to processing',
        '• Data portability',
        '• Withdraw consent',
        '',
        'To exercise these rights, please contact us at info@voctrum.com.',
      ],
    },
    {
      id: 'international-transfers',
      title: '10. INTERNATIONAL DATA TRANSFERS',
      content: [
        'Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses where required.',
      ],
    },
    {
      id: 'children-privacy',
      title: '11. CHILDREN\'S PRIVACY',
      content: [
        'Our services are not intended for individuals under 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.',
      ],
    },
    {
      id: 'cookies',
      title: '12. COOKIES AND TRACKING',
      content: [
        'We use cookies and similar tracking technologies to:',
        '• Keep you logged in',
        '• Remember your preferences',
        '• Analyze site traffic',
        '• Improve user experience',
        '',
        'You can control cookies through your browser settings.',
      ],
    },
    {
      id: 'changes',
      title: '13. CHANGES TO THIS POLICY',
      content: [
        'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date. Your continued use of our services after such modifications constitutes acceptance of the revised policy.',
      ],
    },
    {
      id: 'contact',
      title: '14. CONTACT US',
      content: [
        'If you have questions or concerns about this Privacy Policy or our data practices, please contact:',
        '',
        'Voctrum Pvt Ltd',
        'Email: info@voctrum.com',
        'Website: voctrum.com',
      ],
    },
  ];

  const renderContent = (content: string[]) => {
    return content.map((item, index) => {
      if (item.startsWith('•')) {
        return (
          <li key={index} className="ml-6 list-disc text-muted-foreground">
            {item.substring(2)}
          </li>
        );
      } else if (item === '') {
        return <br key={index} />;
      } else if (item.match(/^\d+\.\d+/)) {
        return (
          <p key={index} className="font-medium text-foreground">
            {item}
          </p>
        );
      } else {
        return (
          <p key={index} className="text-muted-foreground">
            {item}
          </p>
        );
      }
    });
  };

  return (
    <div className="container mx-auto py-8  max-w-9xl">
      <Card className="p-6 md:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Voctrum Pvt Ltd
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Effective Date: 04/03/2026
            </p>
          </div>

          <Alert>
            <ShieldIcon className="h-4 w-4" />
            <AlertDescription>
              This Privacy Policy explains how Voctrum collects, uses, discloses, and safeguards your information when you visit our website or use our services. Please read this privacy policy carefully.
            </AlertDescription>
          </Alert>

          <Separator />

          {/* <ScrollArea className="h-[600px] pr-4"> */}
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="space-y-4">
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <div className="space-y-2">
                    {renderContent(section.content)}
                  </div>
                </div>
              ))}
            </div>
          {/* </ScrollArea> */}

          <Separator />

          <div className="text-sm text-muted-foreground">
            <p>For any privacy-related questions, please contact us at{' '}
              <a href="mailto:info@voctrum.com" className="underline hover:text-primary">
                info@voctrum.com
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;