import React from 'react';
import { motion } from 'framer-motion';
import VideoCarousel from './VideoCarousel';
import { Mountain, Users, Award, Globe } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: Mountain, value: '8,848m', label: 'Highest Peak' },
    { icon: Users, value: '10,000+', label: 'Happy Travelers' },
    { icon: Award, value: '500+', label: 'Certified Guides' },
    { icon: Globe, value: '14', label: 'Regions Covered' }
  ];

  const features = [
    {
      title: 'Expert Local Guides',
      description: 'Connect with certified guides who know every trail, every story, and every hidden gem Nepal has to offer.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Rich Cultural Heritage',
      description: 'Immerse yourself in ancient traditions, festivals, and the warm hospitality of Nepal\'s diverse communities.',
      image: 'https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Breathtaking Landscapes',
      description: 'From the world\'s highest peaks to serene lakes and lush jungles, discover Nepal\'s incredible natural beauty.',
      image: 'https://images.pexels.com/photos/33545/sunrise-poon-hill-trek-dawn.jpg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Carousel */}
      <VideoCarousel />

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                    <IconComponent className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Nepal Explorer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just show you Nepal – we help you experience it through the eyes of those who call it home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discover Nepal?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Join thousands of travelers who have experienced the magic of Nepal with our expert guides.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Plan Your Adventure
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;