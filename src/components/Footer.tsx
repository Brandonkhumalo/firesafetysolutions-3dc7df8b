import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Fire Safety Solutions Africa" className="h-16 w-auto bg-background p-2 rounded" />
            <p className="text-background/80 text-sm leading-relaxed">
              A wholly Zimbabwean owned company specializing in fire prevention, 
              protection, detection, and extinguishing systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-background transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-background/80">Fire Sprinkler Systems</li>
              <li className="text-background/80">Fire Alarms & Detection</li>
              <li className="text-background/80">Fire Extinguishers</li>
              <li className="text-background/80">CCTV & Access Control</li>
              <li className="text-background/80">Air Conditioning</li>
              <li className="text-background/80">Fire Safety Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Harare, Zimbabwe
                </span>
              </li>
              <li>
                <a href="tel:+263772123456" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">+263 772 123 456</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@fssafrica.co.zw" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">info@fssafrica.co.zw</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Fire Safety Solutions Africa (PVT) LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
