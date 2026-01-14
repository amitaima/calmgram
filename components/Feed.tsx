import React, { useState } from 'react';
import { Post } from './Post';
import { Post as PostType } from '../types';
import { CheckCircle, ArrowDownCircle } from 'lucide-react';

interface FeedProps {
  posts: PostType[];
  isQuietMode: boolean;
}

export const Feed: React.FC<FeedProps> = ({ posts, isQuietMode }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  
  // Only paginate in Quiet Mode. In Regular Mode, show all posts.
  const visiblePosts = isQuietMode ? posts.slice(0, visibleCount) : posts;
  const hasMore = isQuietMode && visibleCount < posts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  return (
    <div className="flex flex-col w-full pb-8 bg-calm-bg dark:bg-stone-950 transition-colors duration-500">
      <div className="flex flex-col gap-2 sm:gap-4 p-0 sm:p-0">
        {visiblePosts.map((post) => (
          <Post key={post.id} post={post} isQuietMode={isQuietMode} />
        ))}
      </div>

      {/* Pagination or End of Feed */}
      <div className="flex flex-col items-center justify-center py-12 px-8 text-center gap-4 mx-6 mt-4">
        {hasMore ? (
          <button 
            onClick={handleLoadMore}
            className="group flex flex-col items-center gap-3 text-calm-subtext dark:text-stone-500 hover:text-calm-text dark:hover:text-stone-300 transition-colors"
          >
            <ArrowDownCircle size={32} strokeWidth={1} className="group-hover:translate-y-1 transition-transform" />
            <span className="text-sm font-medium">Load more moments</span>
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4 border-t border-stone-100 dark:border-stone-800 pt-8 w-full">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-stone-100 to-white dark:from-stone-900 dark:to-stone-800 shadow-sm flex items-center justify-center text-calm-icon mb-2">
                <CheckCircle size={32} strokeWidth={1} className="text-stone-400 dark:text-stone-600" />
            </div>
            <h2 className="text-lg font-medium text-calm-text dark:text-stone-300">You're all caught up</h2>
            <p className="text-sm text-calm-subtext dark:text-stone-500 max-w-[240px] leading-relaxed">
                {isQuietMode ? "You've seen all new posts. Enjoy your day offline." : "No more posts to show."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};