import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ThemeButtonProps {
  icon: LucideIcon;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ icon: Icon, name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
        isActive
          ? 'bg-orange-500 text-white'
          : 'bg-black/30 text-orange-200 hover:bg-black/40'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{name}</span>
    </button>
  );
};

export default ThemeButton;