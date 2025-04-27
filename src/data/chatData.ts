
import { Contact, Message } from "@/types/chat";

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Анна Петрова",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    lastMessage: "Отличные фотографии! 📷",
    time: "10:42",
    unread: 2,
    isOnline: true
  },
  {
    id: "2",
    name: "Иван Смирнов",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    lastMessage: "Когда встречаемся?",
    time: "Вчера",
    isOnline: false
  },
  {
    id: "3",
    name: "Мария Иванова",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    lastMessage: "Спасибо за совет!",
    time: "Вчера",
    isOnline: true
  },
  {
    id: "4",
    name: "Алексей Козлов",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    lastMessage: "Проверь новые фото в моем профиле",
    time: "24 апр",
    isOnline: false
  },
  {
    id: "5",
    name: "Елена Соколова",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    lastMessage: "Отличная идея! 👍",
    time: "22 апр",
    unread: 1,
    isOnline: true
  }
];

interface MessageHistoryType {
  [key: string]: Message[];
}

export const messageHistory: MessageHistoryType = {
  "1": [
    {
      id: "a1",
      content: "Привет! Как твои дела?",
      timestamp: "10:30",
      isCurrentUser: false,
      sender: "Анна Петрова"
    },
    {
      id: "a2",
      content: "Привет, Анна! Всё отлично, спасибо! Загрузил новые фотографии с поездки.",
      timestamp: "10:32",
      isCurrentUser: true
    },
    {
      id: "a3",
      content: "Круто! Сейчас посмотрю.",
      timestamp: "10:35",
      isCurrentUser: false,
      sender: "Анна Петрова"
    },
    {
      id: "a4",
      content: "Отличные фотографии! 📷 Особенно понравились пейзажи. Где это снято?",
      timestamp: "10:42",
      isCurrentUser: false,
      sender: "Анна Петрова"
    }
  ],
  "2": [
    {
      id: "b1",
      content: "Привет! Давно не виделись.",
      timestamp: "Вчера, 18:15",
      isCurrentUser: false,
      sender: "Иван Смирнов"
    },
    {
      id: "b2",
      content: "Привет, Иван! Да, действительно давно. Как твои дела?",
      timestamp: "Вчера, 18:20",
      isCurrentUser: true
    },
    {
      id: "b3",
      content: "Всё хорошо, думаю организовать встречу нашей группы. Когда встречаемся?",
      timestamp: "Вчера, 18:25",
      isCurrentUser: false,
      sender: "Иван Смирнов"
    }
  ],
  "3": [
    {
      id: "c1",
      content: "Привет! Можешь посоветовать хорошее место для фотосессии?",
      timestamp: "Вчера, 12:10",
      isCurrentUser: false,
      sender: "Мария Иванова"
    },
    {
      id: "c2",
      content: "Привет, Мария! Конечно, я бы рекомендовал ботанический сад или новую набережную - там отличное освещение в утренние часы.",
      timestamp: "Вчера, 12:15",
      isCurrentUser: true
    },
    {
      id: "c3",
      content: "Спасибо за совет! Обязательно попробую там поснимать.",
      timestamp: "Вчера, 12:20",
      isCurrentUser: false,
      sender: "Мария Иванова"
    }
  ],
  "4": [
    {
      id: "d1",
      content: "Привет! Смотрел мои новые работы?",
      timestamp: "24 апр, 15:30",
      isCurrentUser: false,
      sender: "Алексей Козлов"
    },
    {
      id: "d2",
      content: "Привет, Алексей! Пока нет, но обязательно посмотрю.",
      timestamp: "24 апр, 15:40",
      isCurrentUser: true
    },
    {
      id: "d3",
      content: "Проверь новые фото в моем профиле, думаю, тебе понравится техника съемки.",
      timestamp: "24 апр, 15:45",
      isCurrentUser: false,
      sender: "Алексей Козлов"
    }
  ],
  "5": [
    {
      id: "e1",
      content: "Привет! Что думаешь насчет совместного фотопроекта?",
      timestamp: "22 апр, 11:05",
      isCurrentUser: false,
      sender: "Елена Соколова"
    },
    {
      id: "e2",
      content: "Привет, Елена! Интересная идея. Что за проект?",
      timestamp: "22 апр, 11:10",
      isCurrentUser: true
    },
    {
      id: "e3",
      content: "Серия портретов в городской среде, с акцентом на контрасты.",
      timestamp: "22 апр, 11:15",
      isCurrentUser: false,
      sender: "Елена Соколова"
    },
    {
      id: "e4",
      content: "Отличная идея! 👍 Когда планируешь начать?",
      timestamp: "22 апр, 11:20",
      isCurrentUser: false,
      sender: "Елена Соколова"
    }
  ]
};
