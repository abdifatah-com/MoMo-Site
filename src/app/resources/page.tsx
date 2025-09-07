import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen,
  FileText,
  ExternalLink,
  Download,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Users,
  Calendar,
  HelpCircle,
  Info
} from "lucide-react";

export default function Resources() {
  const guides = [
    {
      title: "Understanding Your NDIS Plan",
      description: "Learn how to read and understand your NDIS plan, including budget categories and service types.",
      icon: BookOpen,
      type: "Guide",
      length: "5 min read"
    },
    {
      title: "Choosing the Right Services",
      description: "A comprehensive guide to selecting services that align with your goals and NDIS plan.",
      icon: Users,
      type: "Guide",
      length: "8 min read"
    },
    {
      title: "Managing Your NDIS Budget",
      description: "Tips and strategies for effectively managing your NDIS funding across different categories.",
      icon: FileText,
      type: "Guide",
      length: "6 min read"
    },
    {
      title: "Preparing for Plan Reviews",
      description: "How to prepare for your NDIS plan review to ensure you get the support you need.",
      icon: Calendar,
      type: "Guide",
      length: "7 min read"
    }
  ];

  const officialResources = [
    {
      title: "NDIS Official Website",
      description: "The official National Disability Insurance Scheme website with comprehensive information.",
      url: "https://www.ndis.gov.au",
      icon: ExternalLink
    },
    {
      title: "NDIS Quality and Safeguards Commission",
      description: "Information about quality standards and safeguards for NDIS participants.",
      url: "https://www.ndiscommission.gov.au",
      icon: ExternalLink
    },
    {
      title: "NDIS Price Guide",
      description: "Current NDIS pricing information and service categories.",
      url: "https://www.ndis.gov.au/providers/price-guides-and-pricing",
      icon: ExternalLink
    },
    {
      title: "NDIS Participant Portal",
      description: "Access your NDIS plan, manage your budget, and track your progress.",
      url: "https://myplace.ndis.gov.au",
      icon: ExternalLink
    },
    {
      title: "NDIS Contact Centre",
      description: "Get help with your NDIS plan, ask questions, or report concerns.",
      url: "https://www.ndis.gov.au/contact",
      icon: Phone
    },
    {
      title: "NDIS Appeals and Reviews",
      description: "Information about appealing NDIS decisions and requesting plan reviews.",
      url: "https://www.ndis.gov.au/participants/appeals-and-reviews",
      icon: HelpCircle
    }
  ];

  const faqs = [
    {
      question: "What is the NDIS?",
      answer: "The National Disability Insurance Scheme (NDIS) is Australia's national disability insurance program that provides funding for people with permanent and significant disabilities to access the support they need."
    },
    {
      question: "How do I know if I'm eligible for the NDIS?",
      answer: "To be eligible for the NDIS, you must be under 65 when you first apply, live in Australia, and have a permanent and significant disability that affects your ability to take part in everyday activities."
    },
    {
      question: "How long does it take to get an NDIS plan?",
      answer: "The time from application to receiving your first NDIS plan can vary, but typically takes 3-6 months. This includes assessment, planning meetings, and plan approval."
    },
    {
      question: "Can I change my NDIS plan?",
      answer: "Yes, you can request a plan review at any time if your circumstances change or if you're not satisfied with your current plan. Plan reviews are also conducted regularly."
    },
    {
      question: "What services can I access with my NDIS plan?",
      answer: "Your NDIS plan can fund a wide range of supports including personal care, therapy services, assistive technology, home modifications, community participation, and more."
    },
    {
      question: "How do I find NDIS service providers?",
      answer: "You can search for registered NDIS providers on the NDIS website, ask your support coordinator for recommendations, or contact us for assistance in finding the right services."
    }
  ];

  const supportContacts = [
    {
      title: "NDIS Contact Centre",
      phone: "1800 800 110",
      description: "General NDIS inquiries and support",
      hours: "Monday to Friday, 8am to 8pm"
    },
    {
      title: "NDIS Quality and Safeguards Commission",
      phone: "1800 035 544",
      description: "Report concerns about NDIS services",
      hours: "Monday to Friday, 9am to 5pm"
    },
    {
      title: "NDIS Appeals",
      phone: "1800 800 110",
      description: "Appeal NDIS decisions",
      hours: "Monday to Friday, 8am to 8pm"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              NDIS <span className="text-primary">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about the NDIS, from understanding your plan to accessing the right services. 
              We're here to help you navigate your NDIS journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Personal Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="#guides">Browse Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Getting Started with NDIS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              New to the NDIS? Follow these steps to get started on your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Check Eligibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Determine if you meet the NDIS eligibility criteria and gather required documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Apply for NDIS</h3>
                <p className="text-gray-600 leading-relaxed">
                  Submit your application through the NDIS website or contact the NDIS Contact Centre.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Plan Meeting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Attend your planning meeting to discuss your goals and the support you need.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Start Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Once approved, connect with service providers and start receiving support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Helpful Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides to help you understand and navigate the NDIS system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {guide.type}
                          </span>
                          <span className="text-sm text-gray-500">{guide.length}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{guide.description}</p>
                        <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <Download className="mr-2 h-4 w-4" />
                          Download Guide
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Official NDIS Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Links to official NDIS websites and resources for the most up-to-date information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officialResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{resource.description}</p>
                        <Button asChild variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about the NDIS and our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Need Help? Contact These Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important contact numbers and services for NDIS participants and their families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportContacts.map((contact, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-3">{contact.phone}</p>
                  <p className="text-gray-600 text-sm mb-2">{contact.description}</p>
                  <p className="text-gray-500 text-xs">{contact.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our experienced team is here to help you navigate the NDIS and find the right services for your needs. 
              Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/services">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  View Our Services
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Personalized Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}