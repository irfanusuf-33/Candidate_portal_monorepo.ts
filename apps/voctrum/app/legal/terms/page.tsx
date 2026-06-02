
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InfoIcon } from "lucide-react";

const sections = [
  {
    id: 'definitions',
    title: '1. DEFINITIONS',
    content: [
      '• "Service" means any digital, consulting, analytic, cloud, software, or managed service provided by Voctrum.',
      '• "User", "you", "your" refers to an individual or business accessing the Service.',
      '• "Customer Content" means data, information, files, or materials provided by you for use by the Service.',
      '• "Website" means the Voctrum website located at voctrum.com and any related subdomains.',
    ],
  },
  {
    id: 'acceptance',
    title: '2. ACCEPTANCE OF TERMS',
    content: [
      'By using the Website or Services, you agree to be bound by these Terms. If you do not agree, you must immediately discontinue use.',
    ],
  },
  {
    id: 'eligibility',
    title: '3. ELIGIBILITY',
    content: [
      'The Services are not intended for persons under 18, and you represent that you are capable of entering into a binding contract.',
    ],
  },
  {
    id: 'services',
    title: '4. SERVICES',
    content: [
      'Voctrum provides technology solutions including analytics platforms, marketing technology services, consulting, software development, and related digital services. Specific services may be described in a Statement of Work (SOW), service agreement, or other written documentation.',
    ],
  },
  {
    id: 'account',
    title: '5. USER ACCOUNT RESPONSIBILITIES',
    content: [
      'Where account access is provided, you must:',
      '• Provide accurate, complete information',
      '• Safeguard login credentials',
      '• Notify us of unauthorized use',
      '',
      'Voctrum is not liable for unauthorized access due to user negligence.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '6. INTELLECTUAL PROPERTY',
    content: [
      'All software, methodologies, documentation, and intellectual property developed by Voctrum remain our exclusive property unless otherwise agreed in writing.',
      '',
      'Subject to these Terms, Voctrum grants users a limited, non-exclusive, non-transferable license to access and use the Services.',
      '',
      'You may not reverse-engineer or replicate any proprietary aspects of the Service.',
    ],
  },
  {
    id: 'data-ownership',
    title: '7. DATA OWNERSHIP',
    subsections: [
      {
        title: '7.1 Licence for Service Provision',
        content: [
          'You grant Voctrum a limited license to host, process, transmit, and display Customer Content solely for the purpose of providing the Services.',
          '',
          'Voctrum may process or store this data to provide the Service but does not claim ownership of your data.',
          '',
          'You are responsible for obtaining all necessary rights and consents to provide data to Voctrum.',
        ],
      },
      {
        title: '7.2 Service Description',
        content: [
          'Voctrum retrieves and displays analytics data from social media platforms connected by the user.',
        ],
      },
      {
        title: '7.3 User Responsibilities',
        content: [
          'Users agree to:',
          '• Connect only accounts they are authorized to access',
          '• Use the service for lawful purposes',
          '• Comply with the terms of the connected platforms',
        ],
      },
    ],
  },
  {
    id: 'third-party',
    title: '8. THIRD-PARTY SERVICES',
    content: [
      'Our Services may integrate with third-party platforms including:',
      '• TikTok',
      '• YouTube',
      '• Facebook',
      '',
      'Your use of these platforms is governed by their own terms and policies. Voctrum is not responsible for third-party decisions, suspensions, or outages.',
      '',
      'Third-Party APIs',
      'The service accesses data through official APIs provided by third-party platforms.',
      'Availability of data depends on permissions granted by users and policies of those platforms.',
      'Voctrum is not responsible for changes made by third-party platforms that may affect the availability, accuracy, or functionality of integrations.',
    ],
  },
  {
    id: 'compliance',
    title: '9. COMPLIANCE, DATA PROTECTION AND INCIDENT MANAGEMENT',
    subsections: [
      {
        title: '9.1 Compliance with Data Protection Laws',
        content: [
          'You agree to comply with all applicable data protection, privacy, cybersecurity, and electronic communications laws in connection with:',
          '• The collection, use, disclosure, and transfer of Personal Data;',
          '• The submission of Customer Content to Voctrum; and',
          '• The operation of your business in connection with the Services.',
          '',
          'You represent and warrant that you have obtained all necessary notices, consents, and lawful bases required to provide Personal Data to Voctrum for processing.',
          '',
          'Where required by applicable law, the parties may enter into a separate Data Processing Agreement governing the processing of personal data.',
        ],
      },
      {
        title: '9.2 Voctrum Data Protection Measures',
        content: [
          'Voctrum implements and maintains appropriate technical and organizational measures designed to:',
          '• Protect Personal Data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.',
          '• Ensure ongoing confidentiality, integrity, availability, and resilience of processing systems.',
          '• Limit access to Personal Data on a role-based and need-to-know basis.',
          '• Support timely restoration of data in the event of a physical or technical incident.',
          '• Regularly test, assess, and evaluate the effectiveness of security measures.',
          '',
          'Such safeguards are aligned with industry-recognized standards and applicable legal requirements.',
        ],
      },
      {
        title: '9.3 Data Breach Notification',
        content: [
          'In the event Voctrum becomes aware of a confirmed Personal Data Breach affecting Customer Content, Voctrum shall:',
          '• Notify the affected Customer without undue delay after becoming aware of the breach.',
          '• Provide reasonable information regarding the nature of the incident, categories of data affected, and likely consequences (to the extent known).',
          '• Take commercially reasonable steps to investigate, contain, mitigate, and remediate the incident.',
          '• Cooperate with the Customer in fulfilling any legally required notifications to regulatory authorities or affected individuals.',
          '',
          'Notification shall not be construed as an admission of fault or liability.',
        ],
      },
      {
        title: '9.4 Customer Responsibilities in the Event of a Breach',
        content: [
          'Where the breach arises from:',
          '• Customer systems, credentials, or configurations.',
          '• Customer misuse of the Services.',
          '• Third-party integrations initiated by Customer.',
          '',
          'the Customer remains responsible for regulatory reporting and remediation obligations, unless otherwise required by applicable law.',
        ],
      },
      {
        title: '9.5 Incident Response and Business Continuity',
        content: [
          'Voctrum maintains internal policies and procedures addressing:',
          '• Security incident response.',
          '• Escalation and investigation protocols.',
          '• Business continuity and disaster recovery planning.',
          '• Periodic review and improvement of security controls.',
          '',
          'These procedures are designed to minimize disruption and protect the integrity of Customer data.',
        ],
      },
      {
        title: '9.6 Limitation',
        content: [
          'Voctrum does not guarantee that any system or transmission of data over the internet is completely secure. Customers acknowledge that no security measures eliminate all risks.',
        ],
      },
    ],
  },
  {
    id: 'fees',
    title: '10. FEES AND PAYMENTS',
    content: [
      'Unless otherwise agreed in writing:',
      '• All fees are due per invoice terms.',
      '• Voctrum may suspend services for non-payment.',
      '• Fees are exclusive of applicable taxes, duties, or levies unless stated otherwise.',
    ],
  },
  {
    id: 'warranties',
    title: '11. WARRANTIES AND DISCLAIMERS',
    content: [
      'Voctrum provides Services "AS IS" and "AS AVAILABLE". To the extent permitted by law, Voctrum expressly disclaims all other warranties. Voctrum does not guarantee the accuracy, completeness, or reliability of analytics or insights derived from third-party data sources.',
    ],
  },
  {
    id: 'limitation',
    title: '12. LIMITATION OF LIABILITY',
    content: [
      'To the fullest extent permitted by law:',
      '• Voctrum\'s total liability shall not exceed the fees paid by you in the previous 12 months.',
      '• Voctrum is not liable for indirect, incidental, consequential, or punitive damages.',
      '• Voctrum is not responsible for delays, interruptions, or failures caused by internet service providers, hosting providers, or third-party platforms.',
    ],
  },
  {
    id: 'indemnification',
    title: '13. INDEMNIFICATION',
    content: [
      'You agree to indemnify, defend, and hold Voctrum harmless from any claims arising from your use of the Services, your data, or any violation of these Terms.',
    ],
  },
  {
    id: 'termination',
    title: '14. TERM & TERMINATION',
    content: [
      'These Terms remain in effect until terminated by you or Voctrum. Upon termination, Voctrum may delete Customer Content after a reasonable retention period unless otherwise required by law or agreed in writing.',
    ],
  },
  {
    id: 'governing-law',
    title: '15. GOVERNING LAW',
    content: [
      'These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Voctrum Pty Ltd is incorporated, unless otherwise required by applicable law.',
    ],
  },
  {
    id: 'assignment',
    title: '16. ASSIGNMENT',
    content: [
      'Voctrum may assign or transfer these Terms, in whole or in part, in connection with a merger, acquisition, corporate restructuring, or sale of assets.',
    ],
  },
  {
    id: 'force-majeure',
    title: '17. FORCE MAJEURE',
    content: [
      'Voctrum shall not be liable for failure or delay caused by events beyond its reasonable control including natural disasters, cyberattacks, government actions, or internet disruptions.',
    ],
  },
  {
    id: 'changes',
    title: '18. CHANGES TO TERMS',
    content: [
      'Voctrum may update these Terms from time to time. Continued use of the Services after updates constitutes acceptance of the revised Terms.',
    ],
  },
  {
    id: 'contact',
    title: '19. CONTACT',
    content: [
      'If you have questions about these Terms, please contact:',
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
    } else {
      return (
        <p key={index} className="text-muted-foreground">
          {item}
        </p>
      );
    }
  });
};

export default function TermsPage() {
  return (
    <div className="space-y-10">

      
      {/* <PageHero
        badge="Legal"
        title="Terms and Conditions"
        description="Concise placeholder terms for the demo environment. Replace with your legal-approved copy."
      /> */}


      <div className="container mx-auto py-8 ">

        <Card className="p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Voctrum Pvt Ltd
              </p>
              <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                <span>Effective Date: 04/03/2026</span>
                <span>Last Updated: 04/03/2026</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Website: <a href="https://voctrum.com" className="underline hover:text-primary">voctrum.com</a>
              </p>
            </div>

            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>
                These Terms of Service ("Terms") govern your access to and use of the Voctrum website and any related
                services, consultancy engagements, managed solutions, platforms, software, or data insights provided by
                Voctrum Pty Ltd and its affiliated entities ("Voctrum", "we", "us", "our").
                <br /><br />
                By accessing or using our website or services, you agree to these Terms.
              </AlertDescription>
            </Alert>

            {/* <Separator/> */}

            {/* <ScrollArea className="h-[600px] pr-4"> */}
              <div className="space-y-8">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="space-y-4">
                    <h2 className="text-xl font-semibold">{section.title}</h2>

                    {section.content && (
                      <div className="space-y-2">
                        {renderContent(section.content)}
                      </div>
                    )}

                    {section.subsections && (
                      <div className="space-y-4 pl-4">
                        {section.subsections.map((subsection, idx) => (
                          <div key={idx} className="space-y-2">
                            <h3 className="text-lg font-medium">{subsection.title}</h3>
                            <div className="space-y-2">
                              {renderContent(subsection.content)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            {/* </ScrollArea> */}

            {/* <Separator /> */}

            <div className="text-sm text-muted-foreground">
              <p>For any questions regarding these Terms, please contact us at{' '}
                <a href="mailto:info@voctrum.com" className="underline hover:text-primary">
                  info@voctrum.com
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}
