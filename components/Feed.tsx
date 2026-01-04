import React from 'react';
import { Post } from './Post';
import { Post as PostType } from '../types';
import { CheckCircle } from 'lucide-react';

interface FeedProps {
  posts: PostType[];
  isQuietMode: boolean;
}

export const Feed: React.FC<FeedProps> = ({ posts, isQuietMode }) => {
  return (
    <div className="flex flex-col w-full pb-8 bg-calm-bg dark:bg-stone-950 transition-colors duration-500">
      <div className="flex flex-col gap-2 sm:gap-4 p-0 sm:p-0">
        {posts.map((post) => (
          <Post key={post.id} post={post} isQuietMode={isQuietMode} />
        ))}
      </div>

      {/* End of Feed Indicator */}
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center gap-4 border-t border-stone-100 dark:border-stone-800 mx-6 mt-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-stone-100 to-white dark:from-stone-900 dark:to-stone-800 shadow-sm flex items-center justify-center text-calm-icon mb-2">
            <CheckCircle size={32} strokeWidth={1} className="text-stone-400 dark:text-stone-600" />
        </div>
        <h2 className="text-lg font-medium text-calm-text dark:text-stone-300">You're all caught up</h2>
        <p className="text-sm text-calm-subtext dark:text-stone-500 max-w-[240px] leading-relaxed">
            You've seen all new posts. Enjoy your day offline.
        </p>
      </div>
    </div>
  );
};