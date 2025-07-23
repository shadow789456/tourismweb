import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, TrendingUp, Thermometer, Cloud, Droplets, Star, Users, Camera, Mountain } from 'lucide-react';
import { Place } from '../data/places';

interface PlaceModalProps {
  place: Place | null;
  isOpen: boolean;
  onClose: () => void;
}

const PlaceModal: React.FC<PlaceModalProps> = ({ place, isOpen, onClose }) => {
  if (!place) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const activities = [
    { icon: Mountain, name: 'Trekking', available: true },
    { icon: Camera, name: 'Photography', available: true },
    { icon: Users, name: 'Cultural Tours', available: true },
    { icon: Star, name: 'Meditation', available: place.name.includes('Lumbini') || place.name.includes('Kathmandu') }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{place.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {place.region}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(place.difficulty)}`}>
                    {place.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Destination</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{place.description}</p>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-semibold text-amber-900 mb-2">Cultural Significance</h3>
                  <p className="text-amber-800 text-sm">{place.culturalSignificance}</p>
                </div>
              </div>

              {/* Current Weather */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Current Conditions</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center text-blue-700">
                      <Thermometer className="h-5 w-5 mr-2" />
                      <div>
                        <p className="text-xs text-blue-600">Temperature</p>
                        <p className="font-semibold">{place.weather.temperature}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <Cloud className="h-5 w-5 mr-2" />
                      <div>
                        <p className="text-xs text-blue-600">Condition</p>
                        <p className="font-semibold">{place.weather.condition}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <Droplets className="h-5 w-5 mr-2" />
                      <div>
                        <p className="text-xs text-blue-600">Humidity</p>
                        <p className="font-semibold">{place.weather.humidity}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <Clock className="h-5 w-5 mr-2" />
                      <div>
                        <p className="text-xs text-blue-600">Best Time</p>
                        <p className="font-semibold text-xs">{place.bestTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Available Activities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {activities.map((activity, index) => {
                    const IconComponent = activity.icon;
                    return (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          activity.available
                            ? 'border-green-200 bg-green-50 text-green-700'
                            : 'border-gray-200 bg-gray-50 text-gray-400'
                        }`}
                      >
                        <IconComponent className="h-5 w-5 mb-1" />
                        <p className="text-sm font-medium">{activity.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {place.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Book This Destination
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Get VIP Access
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Find Guide
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlaceModal;