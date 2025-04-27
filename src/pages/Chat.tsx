
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ChatContactItem from "@/components/ChatContactItem";
import ChatMessage from "@/components/ChatMessage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Демо данные
const contacts = [
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

const messageHistory = {
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

const Chat = () => {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;
    
    // В реальном приложении здесь был бы код для отправки сообщения
    // и обновления истории чата
    
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto max-w-6xl pt-20 pb-4 px-4 h-[calc(100vh-80px)]">
        <div className="flex h-full rounded-xl overflow-hidden border">
          {/* Левая панель - список контактов */}
          <div className="w-full max-w-xs border-r bg-card">
            <div className="p-3 border-b">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск контактов..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <ScrollArea className="h-[calc(100vh-152px)]">
              {filteredContacts.map(contact => (
                <ChatContactItem
                  key={contact.id}
                  name={contact.name}
                  avatar={contact.avatar}
                  lastMessage={contact.lastMessage}
                  time={contact.time}
                  unread={contact.unread}
                  isActive={activeContact.id === contact.id}
                  onClick={() => setActiveContact(contact)}
                />
              ))}
            </ScrollArea>
          </div>
          
          {/* Правая панель - сообщения */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="p-4 border-b flex items-center">
              <div className="flex-1">
                <h3 className="font-semibold">{activeContact.name}</h3>
              </div>
            </div>
            
            {/* История сообщений */}
            <ScrollArea className="flex-1 p-4">
              {messageHistory[activeContact.id as keyof typeof messageHistory]?.map(msg => (
                <ChatMessage
                  key={msg.id}
                  content={msg.content}
                  timestamp={msg.timestamp}
                  isCurrentUser={msg.isCurrentUser}
                  sender={!msg.isCurrentUser ? msg.sender : undefined}
                />
              )) || (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  Начните общение прямо сейчас!
                </div>
              )}
            </ScrollArea>
            
            {/* Форма ввода сообщения */}
            <form 
              className="p-3 border-t flex items-center space-x-2"
              onSubmit={handleSendMessage}
            >
              <Input
                placeholder="Введите сообщение..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
