import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="text-[#FF4C29] mb-6 inline-block">
            <AlertTriangle size={80} />
          </div>
          <h1 className="text-5xl font-bold mb-6">404 - Page Not Found</h1>
          <p className="text-xl text-[#666666] mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="primary" size="lg">
                Return to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;