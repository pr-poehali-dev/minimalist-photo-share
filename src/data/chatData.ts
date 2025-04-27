
import { Contact, MessageHistory } from "@/types/chat";

// Демо данные для контактов
export const contacts: Contact[] = [
  {
    id: "1",
    name: "Анна Иванова",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    lastMessage: "Привет! Как дела?",
    time: "10:45",
    unread: 2
  },
  {
    id: "2",
    name: "Михаил Петров",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    lastMessage: "Увидимся завтра на встрече",
    time: "Вчера",
    unread: 0
  },
  {
    id: "3",
    name: "Елена Смирнова",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    lastMessage: "Спасибо за фотографии! Они прекрасны",
    time: "Вчера",
    unread: 0
  },
  {
    id: "4",
    name: "Александр Козлов",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    lastMessage: "Проект почти завершен",
    time: "22 апр",
    unread: 0
  },
  {
    id: "5",
    name: "Ольга Новикова",
    avatar: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    lastMessage: "Перешли мне, пожалуйста, документы",
    time: "20 апр",
    unread: 0
  }
];

// Демо данные для истории сообщений
export const messageHistory: MessageHistory = {
  "1": [
    {
      id: "m1",
      content: "Привет! Как прошел твой день?",
      timestamp: "10:30",
      sender: {
        name: "Анна Иванова",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      isCurrentUser: false
    },
    {
      id: "m2",
      content: "Привет! Все отлично, спасибо! Работаю над новым проектом.",
      timestamp: "10:35",
      isCurrentUser: true
    },
    {
      id: "m3",
      content: "Звучит интересно! Какой проект?",
      timestamp: "10:40",
      sender: {
        name: "Анна Иванова",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      isCurrentUser: false
    },
    {
      id: "m4",
      content: "Социальная сеть в минималистичном стиле. Пока на ранней стадии, но выглядит многообещающе.",
      timestamp: "10:42",
      isCurrentUser: true
    },
    {
      id: "m5",
      content: "Вау! Можно будет посмотреть когда закончишь?",
      timestamp: "10:45",
      sender: {
        name: "Анна Иванова",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      isCurrentUser: false
    }
  ]
};
