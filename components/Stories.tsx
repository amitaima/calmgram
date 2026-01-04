import React from 'react';
import { Story } from '../types';
import { Plus } from 'lucide-react';

interface StoriesProps {
  stories: Story[];
  currentUserAvatar: string;
  isQuietMode: boolean;
}

export const Stories: React.FC<StoriesProps> = ({ stories, currentUserAvatar, isQuietMode }) => {
  return (
    <div className="w-full h-28 flex-shrink-0 border-b border-stone-100 bg-calm-bg">
      <div className="w-full h-full flex items-center gap-4 overflow-x-auto px-4 no-scrollbar">
        
        {/* Current User Story Add */}
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer">
          <div className="relative w-[68px] h-[68px]">
            <img 
              src={currentUserAvatar} 
              alt="My Story" 
              className={`w-full h-full rounded-full object-cover border-[1px] border-stone-200 p-0.5 hover:brightness-100 transition-all ${isQuietMode ? 'brightness-90' : 'brightness-100'}`}
            />
            <div className="absolute bottom-0 right-0 bg-stone-500 rounded-full p-0.5 border-2 border-calm-bg text-white">
              <Plus size={14} strokeWidth={3} />
            </div>
          </div>
          <span className="text-xs text-calm-text font-medium">Your story</span>
        </div>

        {/* Other Users */}
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer group">
            <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center ${story.isSeen ? 'bg-transparent' : 'bg-stone-200'}`}>
               <div className="w-[68px] h-[68px] rounded-full bg-calm-bg flex items-center justify-center">
                  <img 
                    src={story.user.avatarUrl} 
                    alt={story.user.username} 
                    className={`w-[62px] h-[62px] rounded-full object-cover border border-stone-100 group-hover:brightness-100 transition-all duration-300 ${isQuietMode ? 'brightness-[0.85]' : 'brightness-100'}`}
                  />
               </div>
            </div>
            <span className={`text-xs ${story.isSeen ? 'text-calm-subtext' : 'text-calm-text'}`}>
              {story.user.username.length > 10 ? story.user.username.slice(0,8) + '...' : story.user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};