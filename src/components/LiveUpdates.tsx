import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Thermometer, 
  Wind, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  MapPin,
  Wifi,
  Mountain,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';

interface Update {
  id: string;
  type: 'weather' | 'traffic' | 'alert' | 'info';
  title: string;
  description: string;
  location: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high';
  data?: {
    temperature?: string;
    humidity?: string;
    windSpeed?: string;
    visibility?: string;
  };
}

const LiveUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [liveStats, setLiveStats] = useState({
    totalTravelers: 1247,
    activeGuides: 89,
    weatherAlerts: 3,
    trailsOpen: 156
  });

  const locations = ['All', 'Everest Region', 'Annapurna Region', 'Kathmandu Valley', 'Pokhara', 'Chitwan'];

  // Simulate real-time updates
  useEffect(() => {
    const generateUpdate = (): Update => {
      const updateTypes = ['weather', 'traffic', 'alert', 'info'] as const;
      const severities = ['low', 'medium', 'high'] as const;
      const sampleLocations = ['Everest Region', 'Annapurna Region', 'Kathmandu Valley', 'Pokhara', 'Chitwan'];
      
      const type = updateTypes[Math.floor(Math.random() * updateTypes.length)];
      const location = sampleLocations[Math.floor(Math.random() * sampleLocations.length)];
      
      const updateTemplates = {
        weather: [
          { title: 'Clear Weather Conditions', description: 'Perfect visibility for trekking with sunny skies', severity: 'low' as const },
          { title: 'Afternoon Clouds Expected', description: 'Light cloud cover developing after 2 PM', severity: 'low' as const },
          { title: 'Strong Winds Alert', description: 'Wind speeds up to 45 km/h expected', severity: 'medium' as const },
          { title: 'Heavy Rain Warning', description: 'Monsoon rains may affect trail conditions', severity: 'high' as const }
        ],
        traffic: [
          { title: 'Trail Conditions Good', description: 'All major trekking routes are clear and safe', severity: 'low' as const },
          { title: 'Road Construction Delays', description: 'Expect 2-hour delays on Kathmandu-Pokhara highway', severity: 'medium' as const },
          { title: 'Landslide Cleared', description: 'Annapurna Circuit trail reopened after maintenance', severity: 'low' as const }
        ],
        alert: [
          { title: 'High Altitude Warning', description: 'Take extra precautions above 4000m elevation', severity: 'high' as const },
          { title: 'Wildlife Activity', description: 'Increased rhino sightings in Chitwan area', severity: 'medium' as const },
          { title: 'Festival Traffic', description: 'Heavy crowds expected during Dashain celebrations', severity: 'medium' as const }
        ],
        info: [
          { title: 'New Tea House Opened', description: 'Additional accommodation available on EBC route', severity: 'low' as const },
          { title: 'Local Festival Today', description: 'Experience traditional celebrations in local villages', severity: 'low' as const },
          { title: 'Guide Training Completed', description: '25 new certified guides added to our network', severity: 'low' as const }
        ]
      };

      const template = updateTemplates[type][Math.floor(Math.random() * updateTemplates[type].length)];
      
      return {
        id: Math.random().toString(36).substr(2, 9),
        type,
        title: template.title,
        description: template.description,
        location,
        timestamp: new Date(),
        severity: template.severity,
        data: type === 'weather' ? {
          temperature: `${Math.floor(Math.random() * 25 - 5)}°C`,
          humidity: `${Math.floor(Math.random() * 40 + 40)}%`,
          windSpeed: `${Math.floor(Math.random() * 30 + 5)} km/h`,
          visibility: Math.random() > 0.3 ? 'Good' : 'Limited'
        } : undefined
      };
    };

    // Initial updates
    const initialUpdates = Array.from({ length: 8 }, generateUpdate);
    setUpdates(initialUpdates);

    // Add new updates every 15 seconds
    const interval = setInterval(() => {
      const newUpdate = generateUpdate();
      setUpdates(prev => [newUpdate, ...prev.slice(0, 19)]); // Keep only latest 20 updates
      
      // Update live stats occasionally
      if (Math.random() > 0.7) {
        setLiveStats(prev => ({
          totalTravelers: prev.totalTravelers + Math.floor(Math.random() * 5),
          activeGuides: prev.activeGuides + Math.floor(Math.random() * 3) - 1,
          weatherAlerts: Math.max(0, prev.weatherAlerts + Math.floor(Math.random() * 3) - 1),
          trailsOpen: prev.trailsOpen + Math.floor(Math.random() * 3) - 1
        }));
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const filteredUpdates = selectedLocation === 'All' 
    ? updates 
    : updates.filter(update => update.location === selectedLocation);

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'weather': return Cloud;
      case 'traffic': return MapPin;
      case 'alert': return AlertTriangle;
      case 'info': return CheckCircle;
      default: return CheckCircle;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'weather': return 'text-blue-600';
      case 'traffic': return 'text-purple-600';
      case 'alert': return 'text-red-600';
      case 'info': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with real-time weather conditions, trail updates, and important alerts from across Nepal.
          </p>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center text-green-600">
                <Wifi className="h-4 w-4 mr-1" />
                <span>Live Connection</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                <span>Last updated: just now</span>
              </div>
              <div className="flex items-center text-blue-600">
                <Mountain className="h-4 w-4 mr-1" />
                <span>{updates.length} active updates</span>
              </div>
              <div className="flex items-center text-purple-600">
                <Activity className="h-4 w-4 mr-1" />
                <span>{liveStats.totalTravelers} travelers online</span>
              </div>
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Live Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Active Travelers</p>
                <p className="text-2xl font-bold">{liveStats.totalTravelers.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Available Guides</p>
                <p className="text-2xl font-bold">{liveStats.activeGuides}</p>
              </div>
              <Users className="h-8 w-8 text-green-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow-md p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">Weather Alerts</p>
                <p className="text-2xl font-bold">{liveStats.weatherAlerts}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-md p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Open Trails</p>
                <p className="text-2xl font-bold">{liveStats.trailsOpen}</p>
              </div>
              <Zap className="h-8 w-8 text-purple-200" />
            </div>
          </div>
        </motion.div>

        {/* Current Weather Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Kathmandu</p>
                <p className="text-xl font-bold">22°C</p>
                <p className="text-xs text-green-600">Clear skies</p>
              </div>
              <Cloud className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pokhara</p>
                <p className="text-xl font-bold">18°C</p>
                <p className="text-xs text-blue-600">Partly cloudy</p>
              </div>
              <Thermometer className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">EBC</p>
                <p className="text-xl font-bold">-8°C</p>
                <p className="text-xs text-yellow-600">Windy</p>
              </div>
              <Wind className="h-8 w-8 text-gray-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Chitwan</p>
                <p className="text-xl font-bold">28°C</p>
                <p className="text-xs text-green-600">Perfect</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
        </motion.div>

        {/* Updates Feed */}
        <div className="space-y-4">
          {filteredUpdates.map((update, index) => {
            const IconComponent = getUpdateIcon(update.type);
            return (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${getSeverityColor(update.severity)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-2 rounded-lg ${getTypeColor(update.type)} bg-opacity-10`}>
                      <IconComponent className={`h-5 w-5 ${getTypeColor(update.type)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{update.title}</h3>
                        <span className="text-xs text-gray-500 capitalize">{update.type}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{update.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {update.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {update.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                      {update.data && (
                        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                          {update.data.temperature && (
                            <div className="bg-gray-50 p-2 rounded">
                              <span className="text-gray-600">Temp: </span>
                              <span className="font-medium">{update.data.temperature}</span>
                            </div>
                          )}
                          {update.data.humidity && (
                            <div className="bg-gray-50 p-2 rounded">
                              <span className="text-gray-600">Humidity: </span>
                              <span className="font-medium">{update.data.humidity}</span>
                            </div>
                          )}
                          {update.data.windSpeed && (
                            <div className="bg-gray-50 p-2 rounded">
                              <span className="text-gray-600">Wind: </span>
                              <span className="font-medium">{update.data.windSpeed}</span>
                            </div>
                          )}
                          {update.data.visibility && (
                            <div className="bg-gray-50 p-2 rounded">
                              <span className="text-gray-600">Visibility: </span>
                              <span className="font-medium">{update.data.visibility}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredUpdates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-500">No updates for this location.</p>
            <p className="text-gray-400 mt-2">Check back soon for the latest information.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LiveUpdates;