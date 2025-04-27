
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatContactItem from "@/components/ChatContactItem";
import { Contact } from "@/types/chat";

interface ContactsListProps {
  contacts: Contact[];
  activeContactId: string;
  onSelectContact: (contact: Contact) => void;
}

const ContactsList = ({ contacts, activeContactId, onSelectContact }: ContactsListProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-152px)]">
      {contacts.map(contact => (
        <ChatContactItem
          key={contact.id}
          name={contact.name}
          avatar={contact.avatar}
          lastMessage={contact.lastMessage}
          time={contact.time}
          unread={contact.unread}
          isActive={activeContactId === contact.id}
          onClick={() => onSelectContact(contact)}
        />
      ))}
      {contacts.length === 0 && (
        <div className="p-4 text-center text-muted-foreground">
          Контакты не найдены
        </div>
      )}
    </ScrollArea>
  );
};

export default ContactsList;
