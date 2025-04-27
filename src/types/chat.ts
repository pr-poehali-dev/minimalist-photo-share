
export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage?: string;
  time?: string;
  unread?: number;
  isOnline?: boolean;
}

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
  sender?: string;
}
