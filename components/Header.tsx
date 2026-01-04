import React from 'react';
import { Heart, Send, ArrowLeft, Flower } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  hasNotifications?: boolean;
  isQuietMode: boolean;
  onToggleQuietMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  onViewChange, 
  hasNotifications = true,
  isQuietMode,
  onToggleQuietMode
}) => {
  const isHome = currentView === 'home';
  const isActivity = currentView === 'activity';

  return (
    <div className="h-14 w-full flex justify-between items-center px-5 flex-shrink-0 bg-transparent">
      {/* Left Side: Logo or Back Button */}
      {isHome ? (
        <h1 
          className="text-2xl font-serif tracking-tight text-calm-text dark:text-stone-200 cursor-pointer select-none transition-colors duration-500" 
          style={{ fontFamily: '"Dancing Script", cursive' }}
          onClick={() => onViewChange('home')}
        >
          CalmGram
        </h1>
      ) : (
        <button 
          onClick={() => onViewChange('home')}
          className="text-calm-text dark:text-stone-300 hover:text-stone-600 dark:hover:text-stone-100 transition-colors flex items-center gap-1"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
          {isActivity && <span className="font-medium text-lg ml-2">Activity</span>}
        </button>
      )}
      
      {/* Right Side: Actions */}
      <div className="flex gap-5 items-center">
        {/* Quiet Mode Toggle (Zen Mode) */}
        <button 
          className={`text-calm-icon dark:text-stone-500 hover:text-calm-text dark:hover:text-stone-300 transition-colors duration-300 ${isQuietMode ? 'text-stone-600 dark:text-stone-300' : ''}`}
          onClick={onToggleQuietMode}
          aria-label={isQuietMode ? "Disable Zen Mode" : "Enable Zen Mode"}
          title="Toggle Zen Mode"
        >
           <Flower size={24} strokeWidth={1.5} fill={isQuietMode ? 'currentColor' : 'none'} />
        </button>

        {/* Heart / Activity Icon */}
        <button 
          className={`relative text-calm-icon dark:text-stone-500 hover:text-calm-text dark:hover:text-stone-300 transition-colors duration-300 ${isActivity ? 'text-stone-800 dark:text-stone-200' : ''}`}
          onClick={() => onViewChange(isActivity ? 'home' : 'activity')}
        >
           <Heart size={24} strokeWidth={isActivity ? 2.5 : 1.5} fill={isActivity ? 'currentColor' : 'none'} />
           {hasNotifications && !isActivity && (
             <span className="absolute top-0 right-0 w-2 h-2 bg-orange-300 rounded-full border border-calm-bg dark:border-stone-900 ring-2 ring-calm-bg dark:ring-stone-900"></span>
           )}
        </button>
        
        {/* Messages Icon */}
        <button className="text-calm-icon dark:text-stone-500 hover:text-calm-text dark:hover:text-stone-300 transition-colors duration-300">
           <Send size={24} strokeWidth={1.5} className="-rotate-12 mb-1" />
        </button>
      </div>
    </div>
  );
};