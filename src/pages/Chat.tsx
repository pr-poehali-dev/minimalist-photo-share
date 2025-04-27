
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { contacts, messageHistory } from "@/data/chatData";
import { Contact } from "@/types/chat";

// Компоненты чата
import ContactSearch from "@/components/chat/ContactSearch";
import ContactsList from "@/components/chat/ContactsList";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageHistory from "@/components/chat/MessageHistory";
import ChatInputForm from "@/components/chat/ChatInputForm";

const Chat = () => {
  const [activeContact, setActiveContact] = useState<Contact>(contacts[0]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Фильтрация контактов на основе поискового запроса
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Обработчик отправки сообщения
  const handleSendMessage = (messageText: string) => {
    console.log(`Отправка сообщения "${messageText}" для ${activeContact.name}`);
    // В реальном приложении здесь был бы код для отправки сообщения
    // и обновления истории чата
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto max-w-6xl pt-20 pb-4 px-4 h-[calc(100vh-80px)]">
        <div className="flex h-full rounded-xl overflow-hidden border">
          {/* Левая панель - список контактов */}
          <div className="w-full max-w-xs border-r bg-card">
            <ContactSearch 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            
            <ContactsList 
              contacts={filteredContacts} 
              activeContactId={activeContact.id} 
              onSelectContact={setActiveContact} 
            />
          </div>
          
          {/* Правая панель - сообщения */}
          <div className="flex-1 flex flex-col">
            <ChatHeader name={activeContact.name} />
            
            <MessageHistory 
              messages={messageHistory[activeContact.id as keyof typeof messageHistory]} 
            />
            
            <ChatInputForm onSendMessage={handleSendMessage} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
