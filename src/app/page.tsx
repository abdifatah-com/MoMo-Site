import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  Star, 
  ArrowRight,
  CheckCircle,
  User,
  Home,
  Users2,
  ClipboardList,
  Stethoscope,
  MessageCircle,
  Phone
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: User,
      title: "Personal Care",
      description: "Compassionate assistance with daily living activities to help you maintain independence.",
      href: "/services#personal-care"
    },
    {
      icon: Users2,
      title: "Community Participation",
      description: "Support to engage with your community and participate in social activities.",
      href: "/services#community-participation"
    },
    {
      icon: ClipboardList,
      title: "Support Coordination",
      description: "Help navigating your NDIS plan and connecting with the right services.",
      href: "/services#support-coordination"
    },
    {
      icon: Home,
      title: "Household Tasks",
      description: "Assistance with cleaning, meal preparation, and home maintenance.",
      href: "/services#household-tasks"
    },
    {
      icon: Stethoscope,
      title: "Allied Health & Therapy",
      description: "Professional therapy services including physiotherapy, occupational therapy, and more.",
      href: "/services#allied-health"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Trustworthy & Reliable",
      description: "Fully registered NDIS provider with comprehensive insurance and background checks."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Qualified professionals with years of experience in disability support services."
    },
    {
      icon: Heart,
      title: "Caring Approach",
      description: "Person-centered care that respects your choices and promotes your independence."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency support and flexible scheduling to meet your needs."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "NDIS Participant",
      content: "The team at NDIS Care has been incredible. They've helped me regain my independence and confidence. I couldn't be happier with their services.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-pink-100 to-rose-100"
    },
    {
      name: "Michael Chen",
      role: "Family Member",
      content: "Professional, caring, and reliable. They've made such a positive difference in our family's life. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-blue-100 to-cyan-100"
    },
    {
      name: "Emma Williams",
      role: "NDIS Participant",
      content: "The support coordinators helped me understand my plan and connect with the right services. Their expertise is invaluable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-green-100 to-emerald-100"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Supporting You with{" "}
                  <span className="text-primary">Quality NDIS Services</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional, compassionate disability support services designed to help you live independently and achieve your goals. 
                  We&apos;re here to support your journey every step of the way.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>NDIS Registered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Experienced Team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 via-white to-green-100 rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-green-50/80"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
                
                {/* Main Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-8 p-8">
                    {/* Hero Image */}
                    <div className="relative">
                      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                          alt="Caring support worker helping client"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      {/* Floating elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center animate-pulse">
                        <Heart className="h-4 w-4 text-pink-500 fill-current" />
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                        <Heart className="h-3 w-3 text-green-500 fill-current" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-gray-800">Compassionate Care</h3>
                      <p className="text-gray-600 max-w-sm leading-relaxed">
                        Our friendly, professional team is dedicated to providing the highest quality support services with empathy and understanding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Star className="h-14 w-14 text-yellow-500 fill-current" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <Users className="h-12 w-12 text-purple-500" />
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '2s'}}>
                <Shield className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  About NDIS Care Services
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are a registered NDIS provider committed to delivering exceptional disability support services. 
                  Our mission is to empower individuals to live independently while providing the care and support they need.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Person-Centered Approach</h3>
                    <p className="text-gray-600">Every service is tailored to your individual needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Qualified Professionals</h3>
                    <p className="text-gray-600">Our team consists of experienced, qualified support workers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Services</h3>
                    <p className="text-gray-600">Services available 24/7 with flexible scheduling options.</p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 via-emerald-50 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-blue-50/80"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
                
                {/* Main Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-8 p-8">
                    {/* Mission Image */}
                    <div className="relative">
                      <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                          alt="Professional healthcare team"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      {/* Floating elements */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                        <Heart className="h-5 w-5 text-blue-500 fill-current" />
                      </div>
                      <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                      <p className="text-gray-600 max-w-sm leading-relaxed">
                        To provide exceptional disability support services that promote independence, dignity, and quality of life for every participant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Shield className="h-10 w-10 text-blue-500" />
              </div>
              <div className="absolute bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive NDIS support services designed to help you achieve your goals and live independently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose NDIS Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re committed to providing the highest quality disability support services with a focus on your wellbeing and independence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center space-y-4 group">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from the people we&apos;ve had the privilege to support on their NDIS journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Avatar */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.bgColor} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                      <img 
                        src={testimonial.avatar} 
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-600 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  
                  {/* Quote Icon */}
                  <div className="mt-4 text-primary opacity-20">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
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
              Ready to Start Your NDIS Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your needs and discover how we can support you in achieving your goals. 
              Our friendly team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/resources">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Learn About NDIS
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