import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Section from '../components/ui/Section';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Contact Us | SR Automotives';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-[#0A66C2]">
        <div className="container text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Reach out to our team for inquiries, quotes, or to schedule a service
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-[#0A66C2] mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Our Location</h3>
                  <p className="text-[#666666]">
                    2-32 Kataram ,Kaleshwaram Road<br />
                    Telangana city
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#0A66C2] mr-4 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-[#666666] hover:text-[#0A66C2] transition-colors"
                    >
                      +(91) 79953-60259
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#0A66C2] mr-4 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p>
                    <a 
                      href="mailto:info@srautomotives.com" 
                      className="text-[#666666] hover:text-[#0A66C2] transition-colors"
                    >
                      dm2grow@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#0A66C2] mr-4 mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Hours of Operation</h3>
                  <p className="text-[#666666]">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden reveal">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120979.98432689936!2d80.00872855!3d18.63595135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1748427694458!5m2!1sen!2sin" 
                style={{ border: 0, width: '100%', height: '100%' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SR Automotives Location"
              ></iframe>
            </div>
          </div>
          
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
      
      {/* FAQ */}
      <Section title="Frequently Asked Questions" background="light">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="card p-6 reveal">
              <h3 className="text-xl font-bold mb-3">How do I schedule a service appointment?</h3>
              <p className="text-[#666666]">
                You can schedule a service appointment by filling out our contact form, giving us a call, or sending us an email. We'll respond promptly to confirm your appointment time.
              </p>
            </div>
            
            <div className="card p-6 reveal">
              <h3 className="text-xl font-bold mb-3">What forms of payment do you accept?</h3>
              <p className="text-[#666666]">
                We accept all major credit cards, debit cards, cash, and direct bank transfers. For business clients, we also offer invoicing options with agreed payment terms.
              </p>
            </div>
            
            <div className="card p-6 reveal">
              <h3 className="text-xl font-bold mb-3">Do you provide warranty on your services?</h3>
              <p className="text-[#666666]">
                Yes, we provide a 12-month/12,000-mile warranty on most repairs and services. Parts installed carry their manufacturer's warranty, which we'll honor and process on your behalf if needed.
              </p>
            </div>
            
            <div className="card p-6 reveal">
              <h3 className="text-xl font-bold mb-3">Do you offer pick-up and drop-off services?</h3>
              <p className="text-[#666666]">
                Yes, we offer vehicle pick-up and drop-off services within a 10-mile radius of our location for a nominal fee. We also provide a courtesy shuttle service for local customers.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;