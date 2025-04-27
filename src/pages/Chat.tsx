
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { contacts, messageHistory } from "@/data/chatData";
import { Contact } from "@/types/chat";
import { useMediaQuery } from "@/hooks/use-mobile";

// Компоненты чата
import ContactSearch from "@/components/chat/ContactSearch";
import ContactsList from "@/components/chat/ContactsList";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageHistory from "@/components/chat/MessageHistory";
import ChatInputForm from "@/components/chat/ChatInputForm";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Chat = () => {
  const [activeContact, setActiveContact] = useState<Contact>(contacts[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showContacts, setShowContacts] = useState(true);
  
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  // На мобильных устройствах показываем только список контактов при первом рендере
  useEffect(() => {
    if (isMobile) {
      setShowContacts(true);
    } else {
      setShowContacts(false);
    }
  }, [isMobile]);
  
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

  // Обработчик выбора контакта на мобильных устройствах
  const handleContactSelect = (contact: Contact) => {
    setActiveContact(contact);
    if (isMobile) {
      setShowContacts(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto max-w-6xl pt-16 pb-4 px-4 h-[calc(100vh-64px)]">
        <div className="flex h-full rounded-xl overflow-hidden border shadow-sm">
          {/* Левая панель - список контактов */}
          {(!isMobile || (isMobile && showContacts)) && (
            <div className="w-full md:w-80 border-r bg-card h-full flex flex-col">
              <ContactSearch 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
              />
              
              <ContactsList 
                contacts={filteredContacts} 
                activeContactId={activeContact.id} 
                onSelectContact={handleContactSelect} 
              />
            </div>
          )}
          
          {/* Правая панель - сообщения */}
          {(!isMobile || (isMobile && !showContacts)) && (
            <div className="flex-1 flex flex-col h-full">
              <div className="flex items-center">
                {isMobile && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="ml-2"
                    onClick={() => setShowContacts(true)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                )}
                <div className="flex-1">
                  <ChatHeader 
                    name={activeContact.name} 
                    avatar={activeContact.avatar}
                    isOnline={activeContact.isOnline}
                  />
                </div>
              </div>
              
              <MessageHistory 
                messages={messageHistory[activeContact.id as keyof typeof messageHistory]} 
              />
              
              <ChatInputForm onSendMessage={handleSendMessage} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Chat;
