import { MessageCircle } from 'lucide-react';

const WhatsAppBubble = () => {
  return (
    <a
      href="https://wa.me/1234567890" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-bubble"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppBubble;