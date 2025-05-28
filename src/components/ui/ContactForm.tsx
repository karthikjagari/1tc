import { useState, FormEvent } from 'react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success handling
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      // Error handling
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      {submitStatus.type && (
        <div 
          className={`mb-6 p-4 rounded-md ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-medium">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
          placeholder="John Doe"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="service" className="block mb-2 font-medium">
          Service You're Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
        >
          <option value="">Select a service</option>
          <option value="Car Repairs & Diagnostics">Car Repairs & Diagnostics</option>
          <option value="Spare Parts & Accessories">Spare Parts & Accessories</option>
          <option value="Regular Vehicle Maintenance">Regular Vehicle Maintenance</option>
          <option value="Performance Upgrades">Performance Upgrades</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        fullWidth 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;