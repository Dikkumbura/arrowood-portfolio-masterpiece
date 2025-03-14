
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  name: string;
  description: string;
  url: string;
  index: number;
}

const BusinessCard = ({ name, description, url, index }: BusinessCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Extract domain name without protocol and www
  const domain = url.replace(/(https?:\/\/)?(www\.)?/, '');

  // Check if it's ACC Insurance or Invopeo to show their logos
  const isAccInsurance = name === "ACC Insurance";
  const isInvopeo = name === "Invopeo";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block group relative overflow-hidden bg-white rounded-lg border border-silver/50 shadow-sm",
        "transition-all duration-500 ease-out transform",
        "hover:shadow-xl hover:-translate-y-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          {isAccInsurance ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-gray-800", // Dark background to make the white logo visible
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="https://www.accinsco.com/wp-content/uploads/2022/08/logo.svg" 
                alt="ACC Insurance Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : isInvopeo ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-white", // White background for Invopeo logo
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://invopeo.com/wp-content/uploads/2019/07/INVO-PEO-logo-final.png" 
                alt="Invopeo Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg text-white font-bold text-2xl bg-navy",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              {name.charAt(0)}
            </div>
          )}
          <ExternalLink 
            className={cn(
              "text-navy/50 transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )} 
            size={20} 
          />
        </div>
        
        <h3 className="text-xl font-serif font-semibold text-navy mb-2 group-hover:text-navy-light transition-colors duration-300">{name}</h3>
        
        <p className="text-navy-light/70 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="text-sm font-medium text-navy-light">{domain}</div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-0 left-0 h-1 bg-navy",
          "transition-all duration-500 ease-out",
          isHovered ? "w-full" : "w-0"
        )}
      ></div>
    </a>
  );
};

export default BusinessCard;
