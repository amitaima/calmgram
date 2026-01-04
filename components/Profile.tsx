import React from 'react';
import { CURRENT_USER, POSTS } from '../data';
import { Grid, Bookmark, User as UserIcon } from 'lucide-react';

interface ProfileProps {
  isQuietMode: boolean;
}

export const Profile: React.FC<ProfileProps> = ({ isQuietMode }) => {
  // Use a mix of posts for grid
  const myPosts = [...POSTS.slice(0, 2), ...POSTS];

  return (
    <div className="w-full min-h-full bg-calm-bg">
      {/* Profile Header */}
      <div className="px-6 pt-6 pb-8 border-b border-stone-50">
        <div className="flex items-center gap-6 mb-5">
           <img 
              src={CURRENT_USER.avatarUrl} 
              alt="Me" 
              className="w-20 h-20 rounded-full object-cover border border-stone-200 p-1"
           />
           <div className="flex-1 flex justify-around px-2">
              <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold text-calm-text">24</span>
                  <span className="text-xs text-calm-subtext">moments</span>
              </div>
              <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold text-calm-text">156</span>
                  <span className="text-xs text-calm-subtext">connections</span>
              </div>
              <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold text-calm-text">89</span>
                  <span className="text-xs text-calm-subtext">supporting</span>
              </div>
           </div>
        </div>
        
        <div className="flex flex-col gap-1 mb-6">
            <span className="font-semibold text-calm-text text-[15px]">{CURRENT_USER.fullName}</span>
            <p className="text-sm text-calm-text leading-relaxed">
                Capturing the quiet moments between the noise.<br/>
                Mindful photography & slow living.
            </p>
        </div>

        <div className="flex gap-2">
            <button className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium py-1.5 rounded-lg text-sm transition-colors">
                Update Persona
            </button>
            <button className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium py-1.5 rounded-lg text-sm transition-colors">
                Share Profile
            </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex h-12 border-b border-stone-100">
         <button className="flex-1 flex items-center justify-center border-b-[1.5px] border-stone-800 text-stone-800">
            <Grid size={20} />
         </button>
         <button className="flex-1 flex items-center justify-center text-calm-subtext hover:text-calm-text">
            <Bookmark size={20} />
         </button>
         <button className="flex-1 flex items-center justify-center text-calm-subtext hover:text-calm-text">
            <UserIcon size={20} />
         </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5">
         {myPosts.map((post, idx) => (
             <div key={idx} className="aspect-square bg-stone-100 relative group overflow-hidden">
                 <img 
                    src={post.imageUrl} 
                    className={`w-full h-full object-cover group-hover:opacity-90 transition-all duration-500 ease-out ${isQuietMode ? 'brightness-[0.7] saturate-[0.8] contrast-[0.95]' : 'brightness-100 saturate-100 contrast-100'}`}
                    alt=""
                    loading="lazy"
                 />
             </div>
         ))}
      </div>
      
      <div className="py-12 flex justify-center">
         <div className="w-1.5 h-1.5 bg-stone-300 rounded-full mx-1"></div>
         <div className="w-1.5 h-1.5 bg-stone-300 rounded-full mx-1"></div>
         <div className="w-1.5 h-1.5 bg-stone-300 rounded-full mx-1"></div>
      </div>
    </div>
  );
};