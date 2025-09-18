import { QRCodeSVG } from 'qrcode.react';
import { LucideIcon } from 'lucide-react';

interface SocialCardProps {
  platform: string;
  url: string;
  icon: LucideIcon;
  bgGradient: string;
  delay?: number;
}

export const SocialCard = ({ platform, url, icon: Icon, bgGradient, delay = 0 }: SocialCardProps) => {
  return (
    <div 
      className="social-card animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Platform Icon */}
        <div className={`p-4 rounded-2xl ${bgGradient} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Platform Name */}
        <h3 className="text-xl font-bold text-foreground">{platform}</h3>
        
        {/* QR Code */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <QRCodeSVG 
            value={url} 
            size={120}
            bgColor="#ffffff"
            fgColor="#000000"
            level="M"
            includeMargin={false}
          />
        </div>
        
        {/* Link */}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/50 rounded-lg 
                     text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Visit {platform}
        </a>
      </div>
    </div>
  );
};