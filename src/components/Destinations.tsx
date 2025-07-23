import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import PlaceCard from './PlaceCard';
import PlaceModal from './PlaceModal';
import { places } from '../data/places';

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedPlace, setSelectedPlace] = useState<typeof places[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];
  const regions = ['All', ...Array.from(new Set(places.map(place => place.region)))];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || place.difficulty === selectedDifficulty;
    const matchesRegion = selectedRegion === 'All' || place.region === selectedRegion;
    
    return matchesSearch && matchesDifficulty && matchesRegion;
  });

  const handleDetailsClick = (place: typeof places[0]) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

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
            Explore Nepal's Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From towering peaks to ancient temples, discover the diverse landscapes and rich culture that make Nepal extraordinary.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'All' ? 'All Difficulties' : difficulty}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div className="relative">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'All' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPlaces.length} of {places.length} destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place, index) => (
            <PlaceCard 
              key={place.id} 
              place={place} 
              index={index} 
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-500">No destinations match your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
          </motion.div>
        )}
      </div>

      <PlaceModal 
        place={selectedPlace}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Destinations;