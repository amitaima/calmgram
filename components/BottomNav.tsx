import React from 'react';
import { Home, Search, PlusSquare } from 'lucide-react';

interface BottomNavProps {
  currentUserAvatar: string;
  currentView: string;
  onViewChange: (view: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentUserAvatar, currentView, onViewChange }) => {
  const getIconClass = (viewName: string) => {
    const isActive = currentView === viewName;
    return `p-3 transition-colors duration-300 ${isActive ? 'text-stone-800 dark:text-stone-100 scale-105' : 'text-calm-subtext dark:text-stone-500 hover:text-calm-text dark:hover:text-stone-300'}`;
  };

  return (
    <div className="h-16 w-full border-t border-stone-100 dark:border-stone-800 flex justify-around items-center px-2 pb-1 bg-calm-bg/95 dark:bg-stone-950/95 backdrop-blur-md transition-colors duration-500">
      <button 
        className={getIconClass('home')} 
        onClick={() => onViewChange('home')}
      >
        <Home size={26} strokeWidth={currentView === 'home' ? 2.5 : 1.5} />
      </button>
      
      <button 
        className={getIconClass('search')}
        onClick={() => onViewChange('search')}
      >
        <Search size={26} strokeWidth={currentView === 'search' ? 2.5 : 1.5} />
      </button>
      
      <button 
        className={getIconClass('create')}
        // Placeholder for create action
      >
        <PlusSquare size={26} strokeWidth={1.5} className="text-calm-subtext dark:text-stone-500 hover:text-calm-text dark:hover:text-stone-300" />
      </button>
      
      <button 
        className={`p-3 flex items-center justify-center transition-transform duration-200 ${currentView === 'profile' ? 'scale-110' : ''}`}
        onClick={() => onViewChange('profile')}
      >
        <div className={`p-0.5 rounded-full ${currentView === 'profile' ? 'border-2 border-stone-800 dark:border-stone-100' : 'border border-stone-300 dark:border-stone-600'}`}>
          <img 
            src={currentUserAvatar} 
            alt="Profile" 
            className="w-6 h-6 rounded-full object-cover" 
          />
        </div>
      </button>
    </div>
  );
};