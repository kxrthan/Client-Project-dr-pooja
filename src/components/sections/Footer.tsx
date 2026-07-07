import { Globe, Camera, MessageSquare, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Dr. Pooja Reddy</h3>
            <p className="text-muted-foreground">
              Premium dermatology and cosmetic skin clinic committed to evidence-based care and exceptional results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>123 Luxury Avenue, Medical District, City, Country</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>consult@clinicname.com</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Clinic Timings</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Mon - Fri</p>
                  <p>10:00 AM - 07:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Saturday</p>
                  <p>10:00 AM - 04:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#treatments" className="text-muted-foreground hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link href="#why-choose-us" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Before & After</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clinic Name. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
