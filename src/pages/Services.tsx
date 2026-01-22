import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Droplets, 
  Bell, 
  Flame, 
  Camera, 
  Wind, 
  Wrench,
  GraduationCap,
  FileSearch,
  Shield,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import fireExtinguishers from "@/assets/fire-extinguishers.jpg";
import securitySystems from "@/assets/security-systems.jpg";
import airConditioning from "@/assets/air-conditioning.jpg";
import heroImage from "@/assets/hero-fire-safety.jpg";

const services = [
  {
    id: "sprinklers",
    title: "Fire Sprinkler Systems",
    icon: Droplets,
    image: heroImage,
    description: "Comprehensive automatic fire sprinkler system solutions for complete protection.",
    features: [
      "Installation of new automatic sprinkler systems",
      "Extension of existing sprinkler systems",
      "Specialized fuel depot protection",
      "Periodic services of automatic sprinkler control valves",
      "Wet and dry system options based on building usage",
      "Pressurized water supply for total floor protection",
    ],
  },
  {
    id: "alarms",
    title: "Fire Alarms & Detection",
    icon: Bell,
    image: securitySystems,
    description: "Advanced fire detection systems with smoke, heat, and CO2 detection capabilities.",
    features: [
      "Fire alarm detection with gas discharge systems",
      "Manual evacuating system installation",
      "Building Management Systems (BMS)",
      "Smoke and heat detectors",
      "Manual call points",
      "Visual and audio alarm appliances",
    ],
  },
  {
    id: "suppression",
    title: "Fire Suppression Systems",
    icon: Shield,
    image: fireExtinguishers,
    description: "Modern suppression systems conforming to the latest environmental standards.",
    features: [
      "Stat-x suppression systems",
      "FM200 systems",
      "CO2 suppression systems",
      "Automatic hazard detection and extinguishing",
      "Latest control panels",
      "High-value equipment protection",
    ],
  },
  {
    id: "extinguishers",
    title: "Portable Fire Equipment",
    icon: Flame,
    image: fireExtinguishers,
    description: "Quality guaranteed fire extinguishers and safety equipment for all applications.",
    features: [
      "Quality guaranteed fire extinguishers",
      "Safety signage (exit, fire points, assembly)",
      "Fire beaters for agricultural use",
      "Mobile units for industrial applications",
      "Hose reels installation",
      "Fire blankets and accessories",
    ],
  },
  {
    id: "cctv",
    title: "CCTV & Access Control",
    icon: Camera,
    image: securitySystems,
    description: "Integrated security systems with smart features and facial recognition.",
    features: [
      "Smart CCTV systems with alerts",
      "Facial recognition technology",
      "Biometric access control",
      "Video data generation",
      "Remote monitoring capabilities",
      "Breach alarm notifications",
    ],
  },
  {
    id: "aircon",
    title: "Air Conditioning",
    icon: Wind,
    image: airConditioning,
    description: "Top-quality climate control solutions from leading global brands.",
    features: [
      "LG, Samsung, Rowa brand installations",
      "Domestic and commercial solutions",
      "Offices, schools, hotels, kitchens",
      "Ceiling options per customer requirements",
      "Service and maintenance",
      "100+ line items spare parts stock",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Service",
    icon: Wrench,
    image: teamImage,
    description: "Comprehensive maintenance for all fire safety and security equipment.",
    features: [
      "Gaseous and foam installations",
      "Portable extinguisher servicing",
      "Sprinkler system maintenance",
      "Hose reel maintenance",
      "Alarm system servicing",
      "Fire service connections",
    ],
  },
  {
    id: "training",
    title: "Fire Safety Training",
    icon: GraduationCap,
    image: heroImage,
    description: "Professional training programs to equip your team with essential fire safety skills.",
    features: [
      "Practical fire fighting skills",
      "Emergency evacuation procedures",
      "Fire extinguisher operation",
      "Fire warden training",
      "Safety awareness programs",
      "Customized corporate training",
    ],
  },
  {
    id: "survey",
    title: "Fire Risk Surveys",
    icon: FileSearch,
    image: heroImage,
    description: "Comprehensive fire safety analysis and investigation services.",
    features: [
      "Critical fire safety analysis",
      "Fire investigations",
      "Risk assessment reports",
      "Compliance evaluations",
      "Safety recommendations",
      "Regular audit services",
    ],
  },
];

import teamImage from "@/assets/team-working.jpg";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Safety Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From fire suppression systems to smart security and climate control, 
              we offer complete end-to-end solutions for all your safety needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Product & Service Portfolio"
            description="A comprehensive range of fire safety, security, and climate control solutions designed for your protection."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Additional Services"
            title="Complete Safety Support"
            description="Beyond installation, we provide comprehensive maintenance, training, and assessment services."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(6).map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Advantage"
            title="Why Choose FSS Africa"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Engineers",
                description: "NICET certified professionals with decades of experience",
              },
              {
                title: "Latest Technology",
                description: "Cutting-edge systems that meet international standards",
              },
              {
                title: "Quick Turnaround",
                description: "Fast response times and efficient project completion",
              },
              {
                title: "After-Sales Support",
                description: "Comprehensive maintenance and 24/7 emergency support",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team will assess your needs and design a tailored fire safety 
            and security solution for your property.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
