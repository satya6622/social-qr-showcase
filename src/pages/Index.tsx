import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Linkedin, 
  Music,
  Sparkles 
} from 'lucide-react';
import { SocialCard } from '@/components/SocialCard';
import { LocationCard } from '@/components/LocationCard';
import { Footer } from '@/components/Footer';

const Index = () => {
  // CUSTOMIZE YOUR SOCIAL MEDIA LINKS HERE
  const socialLinks = [
    {
      platform: 'Facebook',
      url: 'https://www.youtube.com/@BlessingSarees',
      icon: Facebook,
      bgGradient: 'bg-gradient-to-r from-blue-600 to-blue-500',
    },
    {
      platform: 'Instagram',
      url: 'https://www.youtube.com/@BlessingSarees',
      icon: Instagram,
      bgGradient: 'bg-gradient-to-r from-pink-500 to-orange-500',
    },
    {
      platform: 'YouTube',
      url: 'https://www.youtube.com/@BlessingSarees',
      icon: Youtube,
      bgGradient: 'bg-gradient-to-r from-red-600 to-red-500',
    },
    {
      platform: 'Twitter',
      url: 'https://www.youtube.com/@BlessingSarees',
      icon: Twitter,
      bgGradient: 'bg-gradient-to-r from-sky-500 to-blue-500',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.youtube.com/@BlessingSarees',
      icon: Linkedin,
      bgGradient: 'bg-gradient-to-r from-blue-700 to-blue-600',
    },
    {
      platform: 'TikTok',
      url: 'https://www.youtube.com/@BlessingSarees',
      icon: Music,
      bgGradient: 'bg-gradient-to-r from-gray-900 to-gray-700',
    },
  ];

  // CUSTOMIZE YOUR BUSINESS INFO HERE
  const businessInfo = {
    name: 'Blessing sarees',
    tagline: 'Connect with us everywhere!',
    address: 'Vasavi wholesale cloth market Guntur',
    phone: '99999999',
    email: 'shop@email.com',
    mapsUrl: 'https://maps.app.goo.gl/UPRZg56w24aoYCoh7',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-float">
            <Sparkles className="w-16 h-16 mx-auto text-primary mb-4" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">{businessInfo.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in" style={{animationDelay: '200ms'}}>
            {businessInfo.tagline}
          </p>
          
          <div className="inline-block animate-fade-in" style={{animationDelay: '400ms'}}>
            <div className="px-8 py-4 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full text-primary-foreground">
              Scan QR codes to connect instantly!
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Follow Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {socialLinks.map((social, index) => (
              <SocialCard
                key={social.platform}
                platform={social.platform}
                url={social.url}
                icon={social.icon}
                bgGradient={social.bgGradient}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LocationCard
              address={businessInfo.address}
              mapsUrl={businessInfo.mapsUrl}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        shopName={businessInfo.name}
        address={businessInfo.address}
        phone={businessInfo.phone}
        email={businessInfo.email}
        tagline={businessInfo.tagline}
      />
    </div>
  );
};

export default Index;
