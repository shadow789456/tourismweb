import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  title: string;
  description: string;
  location: string;
}

const VideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const carouselItems: CarouselItem[] = [
    {
      id: '1',
      type: 'video',
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      title: 'Everest Base Camp Trek',
      description: 'Experience the journey to the world\'s tallest peak through the eyes of the Sherpa people',
      location: 'Khumbu Region'
    },
    {
      id: '2',
      type: 'image',
      src: 'https://images.pexels.com/photos/33545/sunrise-poon-hill-trek-dawn.jpg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Himalayan Sunrise',
      description: 'Watch the first light touch the snow-capped peaks of the Annapurna range',
      location: 'Poon Hill'
    },
    {
      id: '3',
      type: 'image',
      src: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Ancient Temples',
      description: 'Discover the spiritual heart of Nepal in Kathmandu\'s sacred temples',
      location: 'Kathmandu Valley'
    },
    {
      id: '4',
      type: 'image',
      src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Serene Lakes',
      description: 'Reflect in the tranquil waters of Pokhara with mountains as your backdrop',
      location: 'Pokhara'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, carouselItems.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {currentItem.type === 'video' ? (
            <video
              className="w-full h-full object-cover"
              src={currentItem.src}
              muted
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          ) : (
            <img
              className="w-full h-full object-cover"
              src={currentItem.src}
              alt={currentItem.title}
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
            Discover Nepal
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-shadow">
            {currentItem.title}
          </p>
          <p className="text-lg mb-4 text-shadow">
            {currentItem.description}
          </p>
          <div className="text-sm text-red-300 mb-8">
            📍 {currentItem.location}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-20"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-20"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      {/* Video Controls */}
      {currentItem.type === 'video' && (
        <button
          onClick={() => {
            const video = document.querySelector('video');
            if (video) {
              if (isPlaying) {
                video.pause();
              } else {
                video.play();
              }
            }
          }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors z-20"
        >
          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
        </button>
      )}

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;