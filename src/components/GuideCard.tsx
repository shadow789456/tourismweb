import React from 'react';
import { Star, MapPin, Users, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Guide } from '../data/guides';

interface GuideCardProps {
  guide: Guide;
  index: number;
  onDetailsClick: (guide: Guide) => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, index, onDetailsClick }) => {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'text-green-600 bg-green-100';
      case 'Busy': return 'text-yellow-600 bg-yellow-100';
      case 'Booked': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <img
              src={guide.image}
              alt={guide.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{guide.name}</h3>
              <p className="text-gray-600">{guide.experience} years experience</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(guide.availability)}`}>
            {guide.availability}
          </span>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center mr-4">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-semibold">{guide.rating}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{guide.totalTrips} trips</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{guide.bio}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-2">Specializations</h4>
          <div className="flex flex-wrap gap-1">
            {guide.specialization.map((spec, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-2">Languages</h4>
          <div className="flex flex-wrap gap-1">
            {guide.languages.map((lang, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center">
            <Award className="h-4 w-4 mr-1" />
            Certifications
          </h4>
          <div className="text-xs text-gray-600">
            {guide.certifications.slice(0, 2).join(', ')}
            {guide.certifications.length > 2 && '...'}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-lg font-bold text-gray-900">
            ${guide.pricePerDay}/day
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onDetailsClick(guide)}
              className="px-3 py-2 rounded-lg font-medium transition-colors duration-200 bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              Details
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={guide.availability === 'Booked'}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                guide.availability === 'Booked'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {guide.availability === 'Booked' ? 'Unavailable' : 'Book'}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GuideCard;