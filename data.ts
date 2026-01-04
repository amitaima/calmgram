import { Post, Story, Notification, ExplorePost, User } from './types';

export const CURRENT_USER: User = {
  id: 'me',
  username: 'mindful_user',
  fullName: 'Elena R.',
  avatarUrl: 'https://picsum.photos/id/64/200/200'
};

export const STORIES: Story[] = [
  { id: '1', user: { id: 'u1', username: 'elara_studios', avatarUrl: 'https://picsum.photos/id/1011/200/200' }, isSeen: false },
  { id: '2', user: { id: 'u2', username: 'nature_walks', avatarUrl: 'https://picsum.photos/id/1015/200/200' }, isSeen: false },
  { id: '3', user: { id: 'u3', username: 'archi_daily', avatarUrl: 'https://picsum.photos/id/1018/200/200' }, isSeen: false },
  { id: '4', user: { id: 'u4', username: 'minimal_brew', avatarUrl: 'https://picsum.photos/id/1025/200/200' }, isSeen: true },
  { id: '5', user: { id: 'u5', username: 'clay_ceramics', avatarUrl: 'https://picsum.photos/id/1027/200/200' }, isSeen: true },
  { id: '6', user: { id: 'u6', username: 'soft_textiles', avatarUrl: 'https://picsum.photos/id/1035/200/200' }, isSeen: true },
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    user: { id: 'u2', username: 'nature_walks', avatarUrl: 'https://picsum.photos/id/1015/200/200' },
    imageUrl: 'https://picsum.photos/id/28/800/1000',
    caption: 'Morning silence in the valley. The air was crisp and the world felt still.',
    timestamp: '2h ago',
    location: 'Yosemite Valley'
  },
  {
    id: 'p2',
    user: { id: 'u3', username: 'archi_daily', avatarUrl: 'https://picsum.photos/id/1018/200/200' },
    imageUrl: 'https://picsum.photos/id/48/800/800',
    caption: 'Forms and shadows. Less is always more.',
    timestamp: '5h ago'
  },
  {
    id: 'p3',
    user: { id: 'u5', username: 'clay_ceramics', avatarUrl: 'https://picsum.photos/id/1027/200/200' },
    imageUrl: 'https://picsum.photos/id/112/800/1000',
    caption: 'Process over outcome. Enjoying the texture of the raw earth today.',
    timestamp: '8h ago',
    location: 'Studio 4B'
  },
  {
    id: 'p4',
    user: { id: 'u1', username: 'elara_studios', avatarUrl: 'https://picsum.photos/id/1011/200/200' },
    imageUrl: 'https://picsum.photos/id/250/800/600',
    caption: 'Capturing moments of pause.',
    timestamp: '12h ago'
  }
];

export const NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    user: { id: 'u6', username: 'soft_textiles', avatarUrl: 'https://picsum.photos/id/1035/200/200' },
    type: 'like',
    text: 'appreciated your moment.',
    time: '20m',
    postImage: 'https://picsum.photos/id/28/100/100'
  },
  {
    id: 'n2',
    user: { id: 'u3', username: 'archi_daily', avatarUrl: 'https://picsum.photos/id/1018/200/200' },
    type: 'comment',
    text: 'left a kind note: "Beautiful composition."',
    time: '1h',
    postImage: 'https://picsum.photos/id/28/100/100'
  },
  {
    id: 'n3',
    user: { id: 'u7', username: 'forest_dweller', avatarUrl: 'https://picsum.photos/id/1040/200/200' },
    type: 'follow',
    text: 'connected with you.',
    time: '3h'
  }
];

export const EXPLORE_POSTS: ExplorePost[] = [
  { id: 'e1', imageUrl: 'https://picsum.photos/id/30/400/500', category: 'Nature' },
  { id: 'e2', imageUrl: 'https://picsum.photos/id/42/400/400', category: 'Minimalism' },
  { id: 'e3', imageUrl: 'https://picsum.photos/id/56/400/600', category: 'Light' },
  { id: 'e4', imageUrl: 'https://picsum.photos/id/64/400/400', category: 'Portrait' },
  { id: 'e5', imageUrl: 'https://picsum.photos/id/76/400/500', category: 'Abstract' },
  { id: 'e6', imageUrl: 'https://picsum.photos/id/88/400/400', category: 'Architecture' },
];