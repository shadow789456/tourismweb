import React from 'react';
import { MapPin, Clock, TrendingUp, Thermometer, Cloud, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { Place } from '../data/places';

interface PlaceCardProps {
  place: Place;
  index: number;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, index }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(place.difficulty)}`}>
            {place.difficulty}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{place.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {place.region}
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-4 line-clamp-3">{place.description}</p>

        {/* Weather Info */}
        <div className="bg-blue-50 rounded-lg p-3 mb-4">
          <h4 className="font-semibold text-blue-900 text-sm mb-2">Current Conditions</h4>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center text-blue-700">
              <Thermometer className="h-3 w-3 mr-1" />
              {place.weather.temperature}
            </div>
            <div className="flex items-center text-blue-700">
              <Cloud className="h-3 w-3 mr-1" />
              {place.weather.condition}
            </div>
            <div className="flex items-center text-blue-700">
              <Droplets className="h-3 w-3 mr-1" />
              {place.weather.humidity}
            </div>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          Best time: {place.bestTime}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {place.highlights.slice(0, 3).map((highlight, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Explore Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PlaceCard;