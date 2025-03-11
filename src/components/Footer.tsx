
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="text-2xl font-serif font-semibold">
              William Arrowood
            </a>
            <p className="text-white/60 mt-2 max-w-xs">
              A portfolio of innovative businesses in the insurance industry.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Businesses</h4>
              <ul className="space-y-2">
                <li><a href="https://www.accinsco.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">ACC Insurance</a></li>
                <li><a href="https://invopeo.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Invopeo</a></li>
                <li><a href="https://www.madisonpeo.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Madison PEO</a></li>
                <li><a href="https://www.miginsgroup.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">MIG Insurance Group</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4">More</h4>
              <ul className="space-y-2">
                <li><a href="https://www.learninsurancelive.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Learn Insurance Live</a></li>
                <li><a href="https://invounderwriting.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Invo Underwriting</a></li>
                <li><a href="https://madisonianetwork.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Madisonianetwork</a></li>
                <li><a href="https://arrowbrokers.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Arrow Brokers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/60 hover:text-white transition-colors">Home</a></li>
                <li><a href="#businesses" className="text-white/60 hover:text-white transition-colors">Businesses</a></li>
                <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} William Arrowood. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a
              href="#home"
              className="inline-flex items-center justify-center w-10 h-10 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
