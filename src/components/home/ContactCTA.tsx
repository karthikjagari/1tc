import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';

const ContactCTA = () => {
  return (
    <Section background="primary" className="py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Automotive Service?</h2>
        <p className="text-xl opacity-90 mb-8">
          Contact our team today for expert advice, quality service, and tailored solutions for your vehicle needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button 
              variant="secondary" 
              size="lg"
            >
              Get a Quote
            </Button>
          </Link>
          <a href="tel:+1234567890">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0A66C2]"
            >
              Call Us Now
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactCTA;