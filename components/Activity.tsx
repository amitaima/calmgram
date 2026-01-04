import React from 'react';
import { NOTIFICATIONS } from '../data';
import { Notification } from '../types';

const NotificationItem: React.FC<{ note: Notification }> = ({ note }) => (
  <div className="flex justify-between items-center py-3">
    <div className="flex items-center gap-3">
      <img src={note.user.avatarUrl} alt="" className="w-10 h-10 rounded-full object-cover border border-stone-100 dark:border-stone-800" />
      <div className="text-[14px] text-calm-text dark:text-stone-300 leading-snug">
        <span className="font-semibold text-stone-800 dark:text-stone-100">{note.user.username}</span> {note.text}
        <div className="text-xs text-calm-subtext dark:text-stone-500 mt-0.5">{note.time}</div>
      </div>
    </div>
    {note.postImage ? (
      <img src={note.postImage} alt="" className="w-10 h-10 rounded object-cover" />
    ) : (
      <button className="px-4 py-1.5 bg-stone-100 dark:bg-stone-800 text-xs font-medium text-stone-600 dark:text-stone-300 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors">
        Connect
      </button>
    )}
  </div>
);

export const Activity: React.FC = () => {
  const today = NOTIFICATIONS.filter(n => n.time.includes('m') || n.time.includes('1h'));
  const earlier = NOTIFICATIONS.filter(n => !n.time.includes('m') && !n.time.includes('1h'));

  return (
    <div className="flex flex-col w-full min-h-full p-4 bg-calm-bg dark:bg-stone-950 transition-colors duration-500 animate-fade-in">
      {/* Today Section */}
      <div className="mb-6">
        <h3 className="text-base font-medium text-stone-800 dark:text-stone-200 mb-4 px-1">Today</h3>
        <div className="flex flex-col gap-1">
          {today.map(note => <NotificationItem key={note.id} note={note} />)}
        </div>
      </div>

      {/* Earlier Section */}
      <div>
        <h3 className="text-base font-medium text-stone-800 dark:text-stone-200 mb-4 px-1">Earlier</h3>
        <div className="flex flex-col gap-1">
          {earlier.map(note => <NotificationItem key={note.id} note={note} />)}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xs text-calm-subtext dark:text-stone-600 italic">
            Notifications are batched to respect your focus.
        </p>
      </div>
    </div>
  );
};