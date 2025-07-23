export interface Place {
  id: string;
  name: string;
  region: string;
  description: string;
  culturalSignificance: string;
  bestTime: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  image: string;
  highlights: string[];
  weather: {
    temperature: string;
    condition: string;
    humidity: string;
  };
}

export const places: Place[] = [
  {
    id: 'everest-base-camp',
    name: 'Everest Base Camp',
    region: 'Khumbu',
    description: 'Journey to the base of the world\'s highest peak through the heart of Sherpa country. This iconic trek offers breathtaking mountain views, ancient monasteries, and the warm hospitality of the Sherpa people.',
    culturalSignificance: 'Sacred to the Sherpa people as Chomolungma (Mother Goddess of the World), this region is rich with Buddhist monasteries, prayer flags, and centuries-old traditions of high-altitude living.',
    bestTime: 'March-May, September-November',
    difficulty: 'Challenging',
    image: 'https://images.pexels.com/photos/33545/sunrise-poon-hill-trek-dawn.jpg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Sagarmatha National Park', 'Tengboche Monastery', 'Sherpa Culture', 'Himalayan Wildlife'],
    weather: {
      temperature: '-12°C to 8°C',
      condition: 'Clear skies',
      humidity: '45%'
    }
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit',
    region: 'Annapurna',
    description: 'One of the world\'s classic treks, circumnavigating the Annapurna massif through diverse landscapes from subtropical forests to alpine deserts.',
    culturalSignificance: 'Home to diverse ethnic groups including Gurung, Magar, and Thakali people, each with unique customs, architecture, and traditional practices passed down through generations.',
    bestTime: 'March-May, October-December',
    difficulty: 'Moderate',
    image: 'https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Thorong La Pass', 'Muktinath Temple', 'Traditional Villages', 'Diverse Landscapes'],
    weather: {
      temperature: '5°C to 18°C',
      condition: 'Partly cloudy',
      humidity: '52%'
    }
  },
  {
    id: 'kathmandu-valley',
    name: 'Kathmandu Valley',
    region: 'Central Nepal',
    description: 'A UNESCO World Heritage site filled with ancient palaces, temples, and traditional Newari architecture that tells the story of Nepal\'s rich cultural heritage.',
    culturalSignificance: 'The cultural heart of Nepal, home to the Newar people and their exceptional craftsmanship in wood carving, metalwork, and traditional festivals like Indra Jatra and Gai Jatra.',
    bestTime: 'October-April',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Durbar Squares', 'Swayambhunath Stupa', 'Boudhanath Stupa', 'Traditional Markets'],
    weather: {
      temperature: '12°C to 25°C',
      condition: 'Sunny',
      humidity: '68%'
    }
  },
  {
    id: 'pokhara',
    name: 'Pokhara',
    region: 'Western Nepal',
    description: 'The gateway to the Annapurnas, known for its serene lakes, stunning mountain views, and adventure activities.',
    culturalSignificance: 'A melting pot of cultures with significant Gurung and Magar communities, known for their bravery as Gurkha soldiers and their traditional dances and music.',
    bestTime: 'September-November, March-May',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Phewa Lake', 'World Peace Pagoda', 'Devi\'s Falls', 'Paragliding'],
    weather: {
      temperature: '15°C to 28°C',
      condition: 'Clear',
      humidity: '55%'
    }
  },
  {
    id: 'chitwan',
    name: 'Chitwan National Park',
    region: 'Southern Nepal',
    description: 'Nepal\'s first national park, home to endangered one-horned rhinoceros, Bengal tigers, and diverse wildlife in pristine jungle settings.',
    culturalSignificance: 'Traditional home of the Tharu people, who have developed unique cultural practices adapted to jungle life, including their distinctive architecture and elephant festivals.',
    bestTime: 'October-March',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Wildlife Safari', 'Elephant Breeding Center', 'Tharu Culture', 'Canoe Rides'],
    weather: {
      temperature: '18°C to 32°C',
      condition: 'Humid',
      humidity: '78%'
    }
  },
  {
    id: 'lumbini',
    name: 'Lumbini',
    region: 'Southern Nepal',
    description: 'The birthplace of Lord Buddha and a UNESCO World Heritage site, featuring ancient ruins, monasteries, and the sacred Bodhi tree.',
    culturalSignificance: 'One of the most sacred Buddhist pilgrimage sites in the world, with over 2,500 years of religious history and monasteries representing Buddhist traditions from around the globe.',
    bestTime: 'October-March',
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Maya Devi Temple', 'Ashoka Pillar', 'World Peace Flame', 'International Monasteries'],
    weather: {
      temperature: '16°C to 30°C',
      condition: 'Sunny',
      humidity: '62%'
    }
  }
];