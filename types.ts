export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  fullName?: string;
}

export interface Post {
  id: string;
  user: User;
  type: 'image' | 'video';
  imageUrl: string; // Used for video poster/thumbnail as well
  videoUrl?: string;
  caption: string;
  timestamp: string;
  location?: string;
}

export interface Story {
  id: string;
  user: User;
  isSeen: boolean;
}

export interface Notification {
  id: string;
  user: User;
  type: 'like' | 'follow' | 'comment';
  text: string;
  time: string;
  postImage?: string;
}

export interface ExplorePost {
  id: string;
  imageUrl: string;
  category: string;
}