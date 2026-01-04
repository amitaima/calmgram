import React, { useState } from 'react';
import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Feed } from './components/Feed';
import { Activity } from './components/Activity';
import { Explore } from './components/Explore';
import { Profile } from './components/Profile';
import { BottomNav } from './components/BottomNav';
import { POSTS, STORIES, CURRENT_USER } from './data';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isQuietMode, setIsQuietMode] = useState(true);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Stories 
              stories={STORIES} 
              currentUserAvatar={CURRENT_USER.avatarUrl} 
              isQuietMode={isQuietMode}
            />
            <Feed posts={POSTS} isQuietMode={isQuietMode} />
          </>
        );
      case 'activity':
        return <Activity />;
      case 'search':
        return <Explore isQuietMode={isQuietMode} />;
      case 'profile':
        return <Profile isQuietMode={isQuietMode} />;
      default:
        return (
          <>
            <Stories 
              stories={STORIES} 
              currentUserAvatar={CURRENT_USER.avatarUrl} 
              isQuietMode={isQuietMode}
            />
            <Feed posts={POSTS} isQuietMode={isQuietMode} />
          </>
        );
    }
  };

  return (
    // Main App Container
    <div className="flex flex-col h-[100dvh] w-full md:max-w-[430px] md:mx-auto bg-calm-bg text-stone-600 md:shadow-2xl md:border-x md:border-stone-100 relative overflow-hidden transition-colors duration-500">
      
      {/* Sticky Header */}
      <div className="flex-shrink-0 z-30 bg-calm-bg/95 backdrop-blur-sm border-b border-stone-50">
        <Header 
          currentView={currentView} 
          onViewChange={setCurrentView}
          hasNotifications={true}
          isQuietMode={isQuietMode}
          onToggleQuietMode={() => setIsQuietMode(!isQuietMode)}
        />
      </div>

      {/* Main Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar scroll-smooth relative">
        {renderContent()}
      </main>

      {/* Navigation Footer */}
      <div className="flex-shrink-0 z-30 bg-calm-bg/95 backdrop-blur-md">
        <BottomNav 
          currentUserAvatar={CURRENT_USER.avatarUrl} 
          currentView={currentView}
          onViewChange={setCurrentView}
        />
      </div>
    </div>
  );
};

export default App;