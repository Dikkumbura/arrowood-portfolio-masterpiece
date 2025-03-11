
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@williamarrowood.com",
      href: "mailto:contact@williamarrowood.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Office",
      value: "Atlanta, Georgia",
      href: "https://maps.google.com/?q=Atlanta,Georgia"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-navy text-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white bg-white/10 rounded-full mb-4">
              CONNECT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Interested in learning more about our insurance businesses or discussing potential opportunities?
              Reach out using the contact information below.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <AnimatedSection key={index} delay={100 * index}>
              <a 
                href={item.href} 
                className="block bg-white/5 backdrop-blur rounded-lg p-6 text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.label}</h3>
                <p className="text-white/80">{item.value}</p>
              </a>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={300}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-semibold mb-6">Business Inquiries</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              For business inquiries or partnership opportunities, please use the dedicated contact form on the respective business website.
            </p>
            <div className="inline-block">
              <a
                href="#businesses"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-navy font-medium transition-all duration-300 hover:bg-gold hover:text-white"
              >
                View Businesses
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
