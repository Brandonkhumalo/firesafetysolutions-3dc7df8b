import { Link } from "react-router-dom";
import { ArrowRight, Shield, Flame, Users, CheckCircle, Droplets, Camera, Wind, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import heroImage from "@/assets/hero-fire-safety.jpg";
import fireExtinguishers from "@/assets/fire-extinguishers.jpg";
import securitySystems from "@/assets/security-systems.jpg";
import airConditioning from "@/assets/air-conditioning.jpg";

const services = [
  {
    title: "Fire Sprinkler Systems",
    description: "Installation and maintenance of automatic wet and dry fire sprinkler systems for complete floor protection.",
    icon: Droplets,
    image: fireExtinguishers,
  },
  {
    title: "CCTV & Access Control",
    description: "Smart security systems with facial recognition, video monitoring, and biometric access control.",
    icon: Camera,
    image: securitySystems,
  },
  {
    title: "Air Conditioning",
    description: "Top-quality climate control solutions from trusted brands like LG, Samsung, and Rowa for homes and businesses.",
    icon: Wind,
    image: airConditioning,
  },
];

const clients = [
  "ZIMPLATS",
  "Metbank",
  "CMED",
  "Zimnat",
  "ZINARA",
  "PPC Cement",
  "Pepsi",
  "NOIC",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative -mt-32 md:-mt-40 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fire Safety Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full mb-6">
              Your Trusted Fire Safety Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              Protecting Lives &<br />
              <span className="text-primary">Securing Property</span>
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed max-w-2xl">
              Fire Safety Solutions Africa specializes in fire prevention, protection, 
              detection, and extinguishing systems. Your one-stop shop for comprehensive 
              safety solutions in Zimbabwe and the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="text-base bg-background/20 text-background border border-background/30 hover:bg-background hover:text-foreground">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="20+" label="Years Experience" />
            <StatCard number="500+" label="Projects Completed" />
            <StatCard number="100+" label="Trusted Clients" />
            <StatCard number="24/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="About Us"
                title="Zimbabwe's Leading Fire Safety Company"
                centered={false}
              />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fire Safety Solutions Africa is a wholly Zimbabwean owned company that 
                specializes in fire prevention, protection, detection, and extinguishing 
                systems. Over the years, we've added air conditioning, CCTV, access control, 
                and general plumbing to become your preferred one-stop supplier.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Highly skilled, passionate management team",
                  "NICET certified fire engineers",
                  "Over 20 years industry experience",
                  "Comprehensive maintenance & support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={fireExtinguishers}
                  alt="Fire Safety Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-10 w-10" />
                  <div>
                    <div className="text-2xl font-bold">ISO</div>
                    <div className="text-sm opacity-90">Certified Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Services"
            title="Comprehensive Safety Solutions"
            description="From fire suppression systems to smart security and climate control, we provide end-to-end solutions for your safety needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Your Trusted Safety Partner"
            description="We're committed to providing the highest quality fire safety and security solutions in Zimbabwe."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Shield,
                title: "Expert Team",
                description: "Our engineers hold NICET certifications and have over 30 years of combined experience in the fire safety industry.",
              },
              {
                icon: Flame,
                title: "Latest Technology",
                description: "We use cutting-edge fire detection and suppression systems including Stat-x, FM200, and CO2 systems.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "We build lasting relationships through personalized service and quick turnaround times on all projects.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex p-4 rounded-full bg-primary-foreground/10 mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Trusted By"
            title="Our Valued Clients"
            description="We're proud to have served leading organizations across Zimbabwe."
          />
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-secondary rounded-lg text-muted-foreground font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your fire safety and security needs. 
            Our experts are ready to help you protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-background/30 text-background hover:bg-background hover:text-foreground">
              <a href="tel:+263772123456">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
