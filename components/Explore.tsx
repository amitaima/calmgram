import React from 'react';
import { EXPLORE_POSTS } from '../data';

interface ExploreProps {
  isQuietMode: boolean;
}

export const Explore: React.FC<ExploreProps> = ({ isQuietMode }) => {
  return (
    <div className="w-full min-h-full p-1 bg-calm-bg dark:bg-stone-950 transition-colors duration-500">
      {/* Calm Search Bar */}
      <div className="px-3 pb-4 pt-2">
        <div className="w-full h-10 bg-stone-100 dark:bg-stone-900 rounded-xl flex items-center px-4 text-calm-subtext dark:text-stone-500 transition-colors">
            <span className="text-sm">Search for inspiration...</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-4 no-scrollbar">
        {['Nature', 'Minimalism', 'Architecture', 'Art', 'Quiet'].map(cat => (
            <div key={cat} className="flex-shrink-0 px-4 py-1.5 border border-stone-200 dark:border-stone-800 rounded-lg text-xs font-medium text-stone-500 dark:text-stone-400 whitespace-nowrap">
                {cat}
            </div>
        ))}
      </div>

      {/* Masonry-ish Grid */}
      <div className="grid grid-cols-2 gap-1 px-1">
        {EXPLORE_POSTS.map((post, i) => (
          <div 
            key={post.id} 
            className={`relative bg-stone-200 dark:bg-stone-900 overflow-hidden ${i % 3 === 0 ? 'row-span-2' : 'aspect-square'}`}
          >
            <img 
                src={post.imageUrl} 
                alt={post.category} 
                className={`w-full h-full object-cover hover:scale-105 transition-all duration-700 ease-out ${isQuietMode ? 'brightness-[0.7] saturate-[0.8] contrast-[0.95]' : 'brightness-100 saturate-100 contrast-100'}`}
                loading="lazy"
            />
            {/* Subtle Label Overlay */}
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/10 backdrop-blur-[2px] rounded text-[10px] text-white/90 opacity-0 hover:opacity-100 transition-opacity">
                {post.category}
            </div>
          </div>
        ))}
      </div>
      
      <div className="py-12 text-center text-xs text-calm-subtext dark:text-stone-600">
        End of curated collection
      </div>
    </div>
  );
};