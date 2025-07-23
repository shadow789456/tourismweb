import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, Shield, Zap, Users, Camera, Mountain, Utensils } from 'lucide-react';

const SpecialAccess: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const vipFeatures = [
    {
      icon: Crown,
      title: 'VIP Treatment',
      description: 'Skip lines, priority access, and exclusive experiences',
      color: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Premium Safety',
      description: '24/7 emergency support and medical assistance',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Access to our most experienced and certified guides',
      color: 'text-green-600'
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Complimentary professional photos of your journey',
      color: 'text-purple-600'
    },
    {
      icon: Mountain,
      title: 'Exclusive Locations',
      description: 'Access to restricted areas and private viewpoints',
      color: 'text-red-600'
    },
    {
      icon: Utensils,
      title: 'Gourmet Dining',
      description: 'Premium meals and exclusive dining experiences',
      color: 'text-orange-600'
    }
  ];

  const plans = [
    {
      id: 'standard',
      name: 'Standard Access',
      price: 299,
      duration: 'per person',
      features: [
        'Basic guide services',
        'Standard accommodation',
        'Group activities',
        'Basic safety equipment',
        'Standard meals'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium VIP',
      price: 599,
      duration: 'per person',
      features: [
        'All Standard features',
        'Priority booking',
        'Premium accommodation',
        'Private guide available',
        'Professional photography',
        'Exclusive dining experiences',
        '24/7 support'
      ],
      popular: true
    },
    {
      id: 'luxury',
      name: 'Luxury Elite',
      price: 999,
      duration: 'per person',
      features: [
        'All Premium features',
        'Helicopter transfers',
        'Luxury accommodation',
        'Private chef',
        'Exclusive access areas',
        'Personal concierge',
        'Custom itinerary',
        'Medical support team'
      ],
      popular: false
    }
  ];

  const exclusiveExperiences = [
    {
      title: 'Sunrise Helicopter Tour',
      description: 'Private helicopter ride to witness Everest sunrise',
      image: 'https://images.pexels.com/photos/33545/sunrise-poon-hill-trek-dawn.jpg?auto=compress&cs=tinysrgb&w=400',
      price: '$500'
    },
    {
      title: 'Monastery Private Access',
      description: 'Exclusive after-hours access to sacred monasteries',
      image: 'https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$200'
    },
    {
      title: 'Royal Palace Dinner',
      description: 'Private dining experience in historical palaces',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$300'
    },
    {
      title: 'Sherpa Family Experience',
      description: 'Stay with authentic Sherpa families in their homes',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$150'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
            <Crown className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Special VIP Access
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive experiences and premium services for an unforgettable journey through Nepal. 
            Get priority access, expert guides, and luxury amenities.
          </p>
        </motion.div>

        {/* VIP Features */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-900 text-center mb-8"
          >
            VIP Benefits & Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vipFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-opacity-10 mb-4 ${feature.color} bg-current`}>
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-900 text-center mb-8"
          >
            Choose Your Access Level
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-yellow-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    ${plan.price}
                  </div>
                  <p className="text-gray-600">{plan.duration}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                      : plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Exclusive Experiences */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-900 text-center mb-8"
          >
            Exclusive Experiences
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exclusiveExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{experience.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">{experience.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                    >
                      Add to Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready for Your VIP Experience?</h2>
          <p className="text-xl mb-6 text-yellow-100">
            Join thousands of travelers who have experienced Nepal like never before with our exclusive VIP access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book VIP Access Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SpecialAccess;