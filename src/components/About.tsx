
import AnimatedSection from "./AnimatedSection";
import { Award, Briefcase, Users, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Briefcase className="h-6 w-6 text-navy" />,
      title: "8+ Businesses",
      description: "Founded and developed multiple successful insurance ventures"
    },
    {
      icon: <Users className="h-6 w-6 text-navy" />,
      title: "Industry Leader",
      description: "Recognized expert in insurance operations and management"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-navy" />,
      title: "Strategic Growth",
      description: "Consistent business expansion and market development"
    },
    {
      icon: <Award className="h-6 w-6 text-navy" />,
      title: "Innovation",
      description: "Pioneering new approaches in the insurance industry"
    }
  ];

  return (
    <section id="about" className="section-padding overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 animated-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection animation="fade-in">
            <div className="lg:max-w-lg">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-navy bg-navy/5 rounded-full mb-4">
                ABOUT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Leadership in the Insurance Industry
              </h2>
              <div className="h-1 w-24 bg-gold mb-6"></div>
              
              <div className="space-y-6 text-navy-light/80">
                <p>
                  William Arrowood has established himself as a visionary leader in the insurance industry, 
                  building a diverse portfolio of successful businesses that address various needs in the market.
                </p>
                <p>
                  With a deep understanding of risk management, underwriting principles, and customer service, 
                  William has created companies that consistently deliver exceptional value to clients while 
                  maintaining operational excellence.
                </p>
                <p>
                  His entrepreneurial approach combines traditional insurance expertise with innovative 
                  solutions, enabling his businesses to adapt to changing market conditions and emerging 
                  opportunities.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="absolute top-6 left-6 w-full h-full bg-navy/5 rounded-lg"></div>
              <div className="relative bg-white rounded-lg border border-silver p-6 space-y-8">
                <h3 className="text-2xl font-serif font-semibold text-navy">Professional Achievements</h3>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <AnimatedSection key={index} delay={100 * index} threshold={0.2}>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-navy mb-1">{achievement.title}</h4>
                          <p className="text-navy-light/70">{achievement.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                
                <div className="pt-4">
                  <div className="text-sm text-navy-light/70">
                    <span className="font-medium text-navy">Philosophy:</span> Excellence in service, integrity in operations, and innovation in solutions.
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
