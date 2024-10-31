import React from 'react';
import { Bell, Sun, Cloud, Clock, MapPin } from 'lucide-react';
import type { SunsetAlert } from '../types';

const todayAlert: SunsetAlert = {
  time: '7:32 PM',
  location: 'Santa Monica, CA',
  weather: 'Clear skies',
  quality: 'Excellent'
};

const SunsetAlert = () => {
  return (
    <div className="fixed bottom-6 right-6 max-w-sm w-full bg-black/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-orange-900/30">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Sun className="h-6 w-6 text-orange-400 animate-pulse" />
          <h3 className="text-lg font-bold text-white">Sunset Alert</h3>
        </div>
        <button className="text-orange-400 hover:text-orange-300">
          <Bell className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-orange-200">
          <Clock className="h-5 w-5" />
          <span>Sunset in 30 minutes ({todayAlert.time})</span>
        </div>
        <div className="flex items-center space-x-3 text-orange-200">
          <MapPin className="h-5 w-5" />
          <span>{todayAlert.location}</span>
        </div>
        <div className="flex items-center space-x-3 text-orange-200">
          <Cloud className="h-5 w-5" />
          <span>{todayAlert.weather}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-orange-900/30">
        <p className="text-orange-300">
          Today's sunset quality: <span className="font-bold text-orange-400">{todayAlert.quality}</span>
        </p>
      </div>
    </div>
  );
};

export default SunsetAlert;