export interface Guide {
  id: string;
  name: string;
  experience: number;
  specialization: string[];
  languages: string[];
  rating: number;
  totalTrips: number;
  image: string;
  bio: string;
  certifications: string[];
  pricePerDay: number;
  availability: 'Available' | 'Busy' | 'Booked';
}

export const guides: Guide[] = [
  {
    id: 'pemba-sherpa',
    name: 'Pemba Sherpa',
    experience: 15,
    specialization: ['High Altitude Trekking', 'Everest Region', 'Cultural Tours'],
    languages: ['English', 'Nepali', 'Sherpa', 'Hindi'],
    rating: 4.9,
    totalTrips: 287,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Born and raised in the Khumbu region, Pemba has been guiding trekkers to Everest Base Camp for over 15 years. His deep knowledge of Sherpa culture and mountain safety makes him one of the most sought-after guides in Nepal.',
    certifications: ['Nepal Trekking Guide License', 'Wilderness First Aid', 'High Altitude Rescue'],
    pricePerDay: 85,
    availability: 'Available'
  },
  {
    id: 'maya-gurung',
    name: 'Maya Gurung',
    experience: 12,
    specialization: ['Annapurna Region', 'Cultural Heritage', 'Photography Tours'],
    languages: ['English', 'Nepali', 'Gurung', 'Japanese'],
    rating: 4.8,
    totalTrips: 203,
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Maya is a certified female guide specializing in Annapurna treks and cultural experiences. She has extensive knowledge of traditional medicine and local customs, offering unique insights into mountain communities.',
    certifications: ['International Mountain Guide', 'Cultural Heritage Specialist', 'Photography Guide Certified'],
    pricePerDay: 75,
    availability: 'Available'
  },
  {
    id: 'raja-tamang',
    name: 'Raja Tamang',
    experience: 10,
    specialization: ['Langtang Region', 'Buddhist Culture', 'Wildlife Tours'],
    languages: ['English', 'Nepali', 'Tamang', 'Tibetan'],
    rating: 4.7,
    totalTrips: 156,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Raja specializes in the beautiful Langtang region and has deep connections with local Tamang communities. His expertise in Buddhist philosophy and meditation practices enriches every journey.',
    certifications: ['Nepal Mountain Guide', 'Buddhist Philosophy Certificate', 'Wildlife Conservation Training'],
    pricePerDay: 70,
    availability: 'Busy'
  },
  {
    id: 'sita-thapa',
    name: 'Sita Thapa',
    experience: 8,
    specialization: ['Pokhara Region', 'Adventure Sports', 'Family Tours'],
    languages: ['English', 'Nepali', 'German'],
    rating: 4.6,
    totalTrips: 134,
    image: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Sita is an adventure specialist based in Pokhara, offering everything from paragliding to family-friendly treks. Her enthusiasm and safety-first approach make her perfect for diverse groups.',
    certifications: ['Adventure Sports Instructor', 'Family Tour Specialist', 'Paragliding Instructor'],
    pricePerDay: 65,
    availability: 'Available'
  },
  {
    id: 'bikash-rai',
    name: 'Bikash Rai',
    experience: 14,
    specialization: ['Eastern Nepal', 'Tea Garden Tours', 'Bird Watching'],
    languages: ['English', 'Nepali', 'Rai', 'Hindi'],
    rating: 4.8,
    totalTrips: 178,
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Bikash is an expert in Eastern Nepal\'s hidden gems, including tea gardens and rare bird species. His knowledge of local flora and fauna is unmatched in the region.',
    certifications: ['Ornithology Specialist', 'Tea Garden Expert', 'Nature Photography Guide'],
    pricePerDay: 60,
    availability: 'Available'
  },
  {
    id: 'dawa-lama',
    name: 'Dawa Lama',
    experience: 18,
    specialization: ['Upper Mustang', 'Tibetan Culture', 'Meditation Retreats'],
    languages: ['English', 'Nepali', 'Tibetan', 'Chinese'],
    rating: 4.9,
    totalTrips: 245,
    image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dawa is a master of the remote Upper Mustang region and Tibetan Buddhist practices. His spiritual guidance and cultural knowledge provide transformative experiences for visitors.',
    certifications: ['Tibetan Buddhism Scholar', 'Meditation Teacher', 'High Altitude Specialist'],
    pricePerDay: 90,
    availability: 'Booked'
  }
];