import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Target, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy, understanding, and genuine care for your wellbeing."
    },
    {
      icon: Users,
      title: "Respect",
      description: "We honor your choices, dignity, and right to live independently according to your preferences."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in all our services, continuously improving to better serve you."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain transparency, honesty, and ethical practices in all our interactions and services."
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Managing Director",
      description: "With over 15 years in disability services, Sarah leads our team with passion and expertise.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-blue-100 to-cyan-100",
      accentColor: "blue"
    },
    {
      name: "Dr. James Wilson",
      role: "Clinical Director",
      description: "A qualified occupational therapist with extensive experience in NDIS service delivery.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-green-100 to-emerald-100",
      accentColor: "green"
    },
    {
      name: "Maria Rodriguez",
      role: "Support Coordinator",
      description: "Specializes in helping participants navigate their NDIS plans and connect with services.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-purple-100 to-violet-100",
      accentColor: "purple"
    },
    {
      name: "David Thompson",
      role: "Allied Health Manager",
      description: "Oversees our therapy services including physiotherapy, speech therapy, and psychology.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-orange-100 to-amber-100",
      accentColor: "orange"
    },
    {
      name: "Lisa Chen",
      role: "Personal Care Supervisor",
      description: "Ensures our personal care services meet the highest standards of quality and safety.",
      image: "https://images.unsplash.com/photo-1594824475151-4b0b4b0b0b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-pink-100 to-rose-100",
      accentColor: "pink"
    },
    {
      name: "Michael Brown",
      role: "Community Programs Coordinator",
      description: "Develops and manages our community participation and social inclusion programs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-indigo-100 to-blue-100",
      accentColor: "indigo"
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Participants Supported",
      description: "We've helped hundreds of individuals achieve their goals"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Combined experience of our leadership team"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on our annual participant feedback surveys"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Emergency support and flexible scheduling"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              About <span className="text-primary">NDIS Care</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a registered NDIS provider dedicated to delivering exceptional disability support services 
              that promote independence, dignity, and quality of life for all our participants.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Target className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional disability support services that empower individuals to live independently, 
                  achieve their goals, and participate fully in their communities.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <Star className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  A world where every person with disability has access to high-quality, person-centered support 
                  services that enable them to live their best life.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-10 w-10 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Compassion, respect, excellence, and integrity guide everything we do. We believe in treating 
                  every person with dignity and supporting their right to choice and control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every interaction and service we provide, ensuring you receive the best possible support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced and qualified team is dedicated to providing you with the highest quality support services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  {/* Header with gradient background */}
                  <div className={`h-32 bg-gradient-to-br ${member.bgColor} flex items-center justify-center relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                    
                    {/* Avatar */}
                    <div className="relative z-10">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-white fill-current" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and the positive impact we&apos;ve made in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose NDIS Care Services?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We&apos;re more than just a service provider – we&apos;re your partners in achieving your goals and living your best life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">NDIS Registered Provider</h3>
                    <p className="text-gray-600">Fully registered with comprehensive insurance and quality assurance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Person-Centered Approach</h3>
                    <p className="text-gray-600">Every service is tailored to your individual needs and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                    <p className="text-gray-600">Qualified professionals with years of experience in disability support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Services</h3>
                    <p className="text-gray-600">24/7 support available with flexible scheduling to meet your needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Your Success is Our Success</h3>
                  <p className="text-gray-600 max-w-sm">
                    We measure our success by your achievements and the positive impact we make in your life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s discuss how we can support you in achieving your goals. Contact us today for a free consultation.
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
                <span>No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}