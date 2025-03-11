
import BusinessCard from "./BusinessCard";
import AnimatedSection from "./AnimatedSection";

const businesses = [
  {
    name: "ACC Insurance",
    description: "Specialized insurance solutions with a focus on comprehensive coverage and customer service.",
    url: "https://www.accinsco.com/"
  },
  {
    name: "Invopeo",
    description: "Innovative insurance solutions designed for modern business needs and risk management.",
    url: "https://invopeo.com/"
  },
  {
    name: "Madison PEO",
    description: "Professional employer organization offering comprehensive HR solutions and employee benefits.",
    url: "https://www.madisonpeo.com/"
  },
  {
    name: "MIG Insurance Group",
    description: "Comprehensive insurance services with a client-centered approach to coverage and claims.",
    url: "https://www.miginsgroup.com/"
  },
  {
    name: "Learn Insurance Live",
    description: "Educational platform for insurance professionals focused on industry training and development.",
    url: "https://www.learninsurancelive.com/"
  },
  {
    name: "Invo Underwriting",
    description: "Specialized underwriting services with expertise in risk assessment and policy management.",
    url: "https://invounderwriting.com/"
  },
  {
    name: "Madisonianetwork",
    description: "Insurance networking platform connecting professionals and businesses within the industry.",
    url: "https://madisonianetwork.com/"
  },
  {
    name: "Arrow Brokers",
    description: "Insurance brokerage firm providing tailored solutions and personalized client service.",
    url: "https://arrowbrokers.com/"
  }
];

const BusinessGrid = () => {
  return (
    <section id="businesses" className="section-padding bg-silver-light/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-navy bg-navy/5 rounded-full mb-4">
              PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Insurance Business Portfolio
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-navy-light/80 max-w-2xl mx-auto">
              A collection of industry-leading businesses established to serve
              diverse needs across the insurance ecosystem.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {businesses.map((business, index) => (
            <AnimatedSection key={business.name} delay={100 * index} threshold={0.1}>
              <BusinessCard
                name={business.name}
                description={business.description}
                url={business.url}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessGrid;
