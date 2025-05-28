import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import ContactCTA from '../components/home/ContactCTA';

const Blog = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Blog | SR Automotives';
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Maintenance Tips for Your Vehicle',
      excerpt: 'Regular maintenance is key to extending your vehicle\'s lifespan and ensuring optimal performance. Here are ten essential tips every car owner should follow.',
      date: 'June 15, 2023',
      author: 'Samuel Rodriguez',
      category: 'Maintenance',
      image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Understanding Your Vehicle\'s Warning Lights',
      excerpt: 'Modern vehicles are equipped with numerous warning lights that communicate potential issues. Learn what each light means and how to respond appropriately.',
      date: 'May 28, 2023',
      author: 'Maria Chen',
      category: 'Diagnostics',
      image: 'https://images.pexels.com/photos/3807335/pexels-photo-3807335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'The Benefits of Performance Upgrades for Your Vehicle',
      excerpt: 'Explore how strategic performance upgrades can enhance your driving experience, improve efficiency, and potentially increase your vehicle\'s resale value.',
      date: 'April 10, 2023',
      author: 'David Kim',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Preparing Your Vehicle for Seasonal Changes',
      excerpt: 'As seasons change, your vehicle faces different challenges. Learn how to prepare your car for optimal performance and safety in all weather conditions.',
      date: 'March 22, 2023',
      author: 'Sarah Johnson',
      category: 'Maintenance',
      image: 'https://images.pexels.com/photos/5325861/pexels-photo-5325861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'How to Choose the Right Tires for Your Vehicle',
      excerpt: 'Selecting the appropriate tires is crucial for safety, performance, and fuel efficiency. This guide helps you navigate the options based on your specific needs.',
      date: 'February 14, 2023',
      author: 'Samuel Rodriguez',
      category: 'Parts',
      image: 'https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      title: 'The Importance of Regular Oil Changes',
      excerpt: 'Oil is the lifeblood of your engine. Learn why regular oil changes are essential for your vehicle\'s health and how they prevent costly repairs down the road.',
      date: 'January 30, 2023',
      author: 'Maria Chen',
      category: 'Maintenance',
      image: 'https://images.pexels.com/photos/3807455/pexels-photo-3807455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-[#0A66C2]">
        <div className="container text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Automotive Insights</h1>
            <p className="text-xl opacity-90">
              Tips, guides, and expert advice to help you get the most from your vehicle
            </p>
          </div>
        </div>
      </div>
      
      {/* Blog Posts */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="card overflow-hidden hover:shadow-lg transition-all duration-300 reveal">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm bg-[#0A66C2]/10 text-[#0A66C2] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-[#666666] ml-auto">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-[#0A66C2] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[#666666] mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-[#666666]">
                    By {post.author}
                  </span>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-[#0A66C2] font-medium hover:text-[#FF4C29] transition-colors inline-flex items-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Newsletter */}
      <Section background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8">
            Stay updated with the latest automotive tips, industry news, and exclusive offers from SR Automotives.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                required
              />
              <button
                type="submit"
                className="bg-[#0A66C2] hover:bg-[#084f99] text-white px-6 py-3 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-[#666666] mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </Section>
      
      {/* CTA */}
      <ContactCTA />
    </>
  );
};

export default Blog;