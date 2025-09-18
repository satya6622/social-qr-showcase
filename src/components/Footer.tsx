import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  shopName: string;
  address: string;
  phone: string;
  email: string;
  tagline?: string;
}

export const Footer = ({ shopName, address, phone, email, tagline }: FooterProps) => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          {/* Shop Name */}
          <h2 className="text-3xl font-bold gradient-text">{shopName}</h2>
          
          {/* Tagline */}
          {tagline && (
            <p className="text-lg text-muted-foreground italic">{tagline}</p>
          )}
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{address}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                {phone}
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                {email}
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} {shopName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};