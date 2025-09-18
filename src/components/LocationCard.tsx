import { QRCodeSVG } from 'qrcode.react';
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  address: string;
  mapsUrl: string;
  delay?: number;
}

export const LocationCard = ({ address, mapsUrl, delay = 0 }: LocationCardProps) => {
  return (
    <div 
      className="social-card animate-fade-in group col-span-full md:col-span-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Location Icon */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        
        {/* Section Title */}
        <h3 className="text-2xl font-bold gradient-text">Find Us</h3>
        
        {/* Address */}
        <p className="text-center text-muted-foreground max-w-md">{address}</p>
        
        {/* QR Code */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <QRCodeSVG 
            value={mapsUrl} 
            size={140}
            bgColor="#ffffff"
            fgColor="#000000"
            level="M"
            includeMargin={false}
          />
        </div>
        
        {/* Link */}
        <a 
          href={mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg 
                     transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
        >
          Open in Maps
        </a>
      </div>
    </div>
  );
};