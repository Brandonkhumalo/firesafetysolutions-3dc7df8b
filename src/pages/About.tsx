import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Users, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import teamImage from "@/assets/team-working.jpg";
import heroImage from "@/assets/hero-fire-safety.jpg";
import aboutHeroImage from "@/assets/about-hero.jpg";

const team = [
  {
    name: "Mr. Brighton Chidziso",
    role: "Managing Director",
    bio: "Holds an IMM Marketing Degree amongst many other qualifications. Worked for ZIMPAPERS for 3 years in the advertising department. Holds a NICET certificate for fire engineers.",
  },
  {
    name: "Mr. Maxwell Rabvukwa",
    role: "Projects Director",
    bio: "A qualified Automatic Fire Sprinkler system designer and holder of a fire prevention certificate. Has vast experience in the fire fighting industry and worked at FPIB for 30 years.",
  },
  {
    name: "Mr. Dennis Mukwashu",
    role: "Technical Manager",
    bio: "Has vast experience in the firefighting industry. A qualified fire technician with over 8 years working experience in the emergency services.",
  },
  {
    name: "Humphrey Nyaruwanga",
    role: "Marketing and Sales",
    bio: "Holds a BCom Honours Degree in Marketing from NUST with a Digital Marketing certificate from MHZ. Currently studying towards a master's degree. Over 10 years experience in the fire related industry.",
  },
  {
    name: "Mr. Harold Mashaire",
    role: "Projects Manager",
    bio: "Responsible for all project related logistics. Holds a Master's Degree in Strategic Management from UNISA.",
  },
  {
    name: "Patrick Makwesera",
    role: "Head Of Operations (Engineering Services)",
    bio: "Holds a Higher National Diploma in Quantity Surveying from HEXCO Zimbabwe. Previously held various senior management positions at Ministry of Public Works.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Zimbabwe's Leading Fire Safety Company
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fire Safety Solutions Africa is a wholly Zimbabwean owned company revolutionizing 
              the fire protection industry by establishing a one-stop shop for all safety needs.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Who We Are"
                title="Firesafety Solutions"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Is a wholly owned Zimbabwean company that specializes in fire prevention, 
                  protection, detection, extinguishing systems and has over the years added 
                  other products and services all in a bid to becoming a preferred supplier.
                </p>
                <p>
                  FSS is aiming to revolutionize the fire protection industry in Zimbabwe 
                  and the region by establishing a one stop shop, that offers a host of 
                  related products and services to insure customer convenience. Over the 
                  years FSS has added on air conditioning, CCTV, access control and general 
                  plumbing so as to deliver on convenience.
                </p>
                <p>
                  Consequently our clients are going to benefit through enhanced product 
                  availability, convenience through the provision of centralized purchase 
                  points with an integrated business system, access to top level project 
                  management skills.
                </p>
                <p>
                  FSS seeks to offer world class fire protection equipment and other related 
                  engineering services so as to suit individual customer needs. FSS strives 
                  on exhibiting the highest level of professionalism, reliability and integrity 
                  whilst assuring our customers good service delivery.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutHeroImage}
                  alt="Fire Safety Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-primary-foreground/10 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-foreground/20 rounded-lg">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                Supplies made easy.
              </p>
            </div>
            <div className="p-8 bg-primary-foreground/10 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-foreground/20 rounded-lg">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                To deliver a dedicated market logistic to the region through enhanced 
                customer focus and supplier linkage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="20+" label="Years Experience" />
            <StatCard number="500+" label="Projects Completed" />
            <StatCard number="100+" label="Trusted Clients" />
            <StatCard number="50+" label="Team Members" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us"
            description="Our core values guide everything we do, from project execution to client relationships."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in every project we undertake.",
              },
              {
                icon: Users,
                title: "Relationships",
                description: "Building lasting partnerships through trust and personalized service.",
              },
              {
                icon: CheckCircle,
                title: "Reliability",
                description: "Dependable service and support you can count on, 24/7.",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Embracing the latest technologies to deliver cutting-edge solutions.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-secondary rounded-xl">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Leadership"
            description="Highly skilled and passionate professionals committed to delivering the highest standards."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(" ").pop()?.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Partner with Zimbabwe's leading fire safety company for comprehensive 
            protection solutions.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
