import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Music, Utensils, Home } from 'lucide-react';

const Culture: React.FC = () => {
  const culturalAspects = [
    {
      icon: Heart,
      title: 'Festivals & Traditions',
      description: 'Experience vibrant festivals like Dashain, Tihar, and Holi that bring communities together in celebration.',
      image: 'https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: [
        'Dashain - The biggest festival celebrating good over evil',
        'Tihar - Festival of lights honoring different animals',
        'Holi - Spring festival of colors and joy',
        'Buddha Jayanti - Celebrating the birth of Lord Buddha'
      ]
    },
    {
      icon: Music,
      title: 'Music & Dance',
      description: 'Discover the rhythmic beats of traditional Nepali music and the graceful movements of cultural dances.',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: [
        'Deuda - Traditional folk dance of western Nepal',
        'Lakhe Nach - Masked dance from Kathmandu Valley',
        'Madal - Traditional drum central to Nepali music',
        'Sarangi - Four-stringed traditional instrument'
      ]
    },
    {
      icon: Utensils,
      title: 'Cuisine & Food Culture',
      description: 'Savor the rich flavors of Nepali cuisine, from hearty dal bhat to delicate momos.',
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: [
        'Dal Bhat - The staple meal of lentils and rice',
        'Momos - Steamed dumplings with various fillings',
        'Gundruk - Fermented leafy greens, a national delicacy',
        'Sel Roti - Traditional ring-shaped rice bread'
      ]
    },
    {
      icon: Home,
      title: 'Architecture & Crafts',
      description: 'Marvel at intricate wood carvings, traditional architecture, and skilled craftsmanship passed down through generations.',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: [
        'Newari Architecture - Intricate wood and brick work',
        'Paubha Paintings - Traditional Buddhist art form',
        'Metal Craft - Exquisite statues and ritual objects',
        'Thanka Paintings - Sacred Buddhist scroll paintings'
      ]
    }
  ];

  const ethnicGroups = [
    {
      name: 'Sherpa',
      region: 'Everest Region',
      description: 'Renowned mountaineers known for their strength, resilience, and Buddhist traditions.',
      traditions: ['Mountaineering heritage', 'Buddhist practices', 'Yak herding', 'Monastery culture']
    },
    {
      name: 'Gurung',
      region: 'Annapurna Region',
      description: 'Brave warriors and skilled farmers living in the hills of central Nepal.',
      traditions: ['Military service', 'Honey hunting', 'Traditional dances', 'Rhododendron festivals']
    },
    {
      name: 'Newari',
      region: 'Kathmandu Valley',
      description: 'Master craftsmen and traders who built the architectural wonders of the valley.',
      traditions: ['Wood carving', 'Metal work', 'Festival celebrations', 'Traditional cuisine']
    },
    {
      name: 'Tharu',
      region: 'Terai Plains',
      description: 'Indigenous people of the plains with unique culture adapted to jungle life.',
      traditions: ['Jungle survival', 'Stick dancing', 'Elephant festivals', 'Traditional healing']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nepal's Rich Cultural Heritage
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse traditions, customs, and ways of life that make Nepal a unique cultural tapestry woven through centuries.
          </p>
        </motion.div>

        {/* Cultural Aspects */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Cultural Highlights
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {culturalAspects.map((aspect, index) => {
              const IconComponent = aspect.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={aspect.image}
                      alt={aspect.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-2 rounded-lg mr-3">
                        <IconComponent className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{aspect.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{aspect.description}</p>
                    <ul className="space-y-2">
                      {aspect.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Ethnic Groups */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Diverse Ethnic Communities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethnicGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{group.name}</h3>
                <p className="text-red-600 text-sm font-medium mb-3">{group.region}</p>
                <p className="text-gray-700 text-sm mb-4">{group.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Traditions:</h4>
                  <ul className="space-y-1">
                    {group.traditions.map((tradition, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        {tradition}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Experience Nepal's Culture Firsthand</h2>
          <p className="text-xl mb-6 text-red-100">
            Join our cultural tours and homestay programs to live like a local and create lasting memories.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Book Cultural Experience
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default Culture;