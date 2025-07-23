import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MapPin, Users, Award, Calendar, Phone, Mail, Globe, Languages, CheckCircle, Clock } from 'lucide-react';
import { Guide } from '../data/guides';

interface GuideModalProps {
  guide: Guide | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (guide: Guide) => void;
}

const GuideModal: React.FC<GuideModalProps> = ({ guide, isOpen, onClose, onBookNow }) => {
  if (!guide) return null;

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'text-green-600 bg-green-100';
      case 'Busy': return 'text-yellow-600 bg-yellow-100';
      case 'Booked': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      rating: 5,
      comment: 'Incredible experience! The guide was knowledgeable and made our trek unforgettable.',
      trip: 'Everest Base Camp'
    },
    {
      name: 'Marco Silva',
      country: 'Brazil',
      rating: 5,
      comment: 'Professional, friendly, and extremely helpful throughout our journey.',
      trip: 'Annapurna Circuit'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 rounded-t-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
                  />
                  <div className="text-white">
                    <h1 className="text-3xl font-bold mb-2">{guide.name}</h1>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-300 mr-1" />
                        <span className="font-semibold">{guide.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{guide.totalTrips} trips</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{guide.experience} years</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(guide.availability)}`}>
                      {guide.availability}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* About Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {guide.name}</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{guide.bio}</p>
              </div>

              {/* Specializations & Languages */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-red-600" />
                    Specializations
                  </h3>
                  <div className="space-y-2">
                    {guide.specialization.map((spec, idx) => (
                      <div key={idx} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-blue-800 font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Languages className="h-5 w-5 mr-2 text-green-600" />
                    Languages
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {guide.languages.map((lang, idx) => (
                      <div key={idx} className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-center font-medium">
                        {lang}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Certifications & Qualifications
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {guide.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center bg-yellow-50 p-3 rounded-lg">
                      <Award className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
                      <span className="text-yellow-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">{testimonial.name}</span>
                          <span className="text-gray-500 text-sm">from {testimonial.country}</span>
                        </div>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-1">"{testimonial.comment}"</p>
                      <p className="text-gray-500 text-xs">Trip: {testimonial.trip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Booking */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      ${guide.pricePerDay}/day
                    </div>
                    <p className="text-gray-600">Professional guide services</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Available for booking</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onBookNow(guide)}
                      disabled={guide.availability === 'Booked'}
                      className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                        guide.availability === 'Booked'
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-red-600 hover:bg-red-700 text-white'
                      }`}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {guide.availability === 'Booked' ? 'Unavailable' : 'Book Now'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GuideModal;