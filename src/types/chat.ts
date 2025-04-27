
export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
}

export interface Sender {
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
  sender?: Sender;
}

export interface MessageHistory {
  [contactId: string]: Message[];
}
