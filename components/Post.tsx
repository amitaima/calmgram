import React, { useState } from 'react';
import { Post as PostType } from '../types';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Sun, Moon } from 'lucide-react';

interface PostProps {
  post: PostType;
  isQuietMode: boolean;
}

export const Post: React.FC<PostProps> = ({ post, isQuietMode }) => {
  const [isDimmed, setIsDimmed] = useState(true);
  
  // Calculate if the image should actually be dimmed based on global mode and local toggle
  const shouldDim = isQuietMode && isDimmed;

  return (
    <div className="mb-8 w-full bg-white sm:rounded-3xl overflow-hidden shadow-sm border border-stone-50 transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-3">
          <img 
            src={post.user.avatarUrl} 
            alt={post.user.username} 
            className="w-9 h-9 rounded-full object-cover border border-stone-100"
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-calm-text">{post.user.username}</span>
            {post.location && (
              <span className="text-xs text-calm-subtext mt-0.5">{post.location}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-xs text-calm-subtext font-light">{post.timestamp}</span>
            <button className="text-calm-subtext">
                <MoreHorizontal size={20} strokeWidth={1.5} />
            </button>
        </div>
      </div>

      {/* Image - Visually segmented, slightly rounded on edges inside the card */}
      <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden group">
        <img 
          src={post.imageUrl} 
          alt="Post content" 
          className={`w-full h-full object-cover transition-all duration-500 ease-out ${shouldDim ? 'brightness-[0.7] saturate-[0.8] contrast-[0.95]' : 'brightness-100 saturate-100 contrast-100'}`}
          loading="lazy"
        />
        
        {/* Dim/Bright Toggle Button - Only visible in Quiet Mode */}
        {isQuietMode && (
          <button 
              onClick={(e) => {
                  e.stopPropagation();
                  setIsDimmed(!isDimmed);
              }}
              className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white/90 transition-all duration-200 z-10"
              aria-label={isDimmed ? "Brighten image" : "Dim image"}
              title={isDimmed ? "Show full brightness" : "Dim image"}
          >
              {isDimmed ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
          </button>
        )}
      </div>

      {/* Actions - Hidden in Quiet Mode */}
      {!isQuietMode && (
        <div className="px-4 pt-3 pb-2 flex justify-between items-center animate-in fade-in duration-300">
          <div className="flex gap-4">
            <button className="text-calm-icon hover:text-calm-text transition-colors duration-200">
              <Heart size={26} strokeWidth={1.5} />
            </button>
            <button className="text-calm-icon hover:text-calm-text transition-colors duration-200">
              <MessageCircle size={26} strokeWidth={1.5} className="-rotate-90" />
            </button>
            <button className="text-calm-icon hover:text-calm-text transition-colors duration-200">
              <Share size={26} strokeWidth={1.5} />
            </button>
          </div>
          <button className="text-calm-icon hover:text-calm-text transition-colors duration-200">
            <Bookmark size={26} strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* Footer / Caption */}
      <div className={`px-4 pb-5 ${isQuietMode ? 'pt-4' : ''}`}>
        {/* Hidden likes indicator */}
        {!isQuietMode && (
          <div className="text-xs text-calm-subtext mb-2 italic">
              Likes hidden
          </div>
        )}
        
        <div className="text-[15px] leading-relaxed text-calm-text">
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </div>
        
        {/* No comment count */}
        {!isQuietMode && (
          <div className="mt-2 text-xs text-calm-subtext cursor-pointer hover:text-calm-text transition-colors">
              Add a calm comment...
          </div>
        )}
      </div>
    </div>
  );
};