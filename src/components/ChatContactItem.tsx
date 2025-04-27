
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface ChatContactItemProps {
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  isActive?: boolean;
  onClick?: () => void;
}

const ChatContactItem = ({
  name,
  avatar,
  lastMessage,
  time,
  unread = 0,
  isActive = false,
  onClick
}: ChatContactItemProps) => {
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div 
      className={cn(
        "flex items-center p-3 rounded-lg cursor-pointer hover:bg-muted transition-colors",
        isActive && "bg-muted"
      )}
      onClick={onClick}
    >
      <Avatar className="h-10 w-10 mr-3">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="font-medium truncate">{name}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
          {unread > 0 && (
            <span className="ml-2 bg-primary text-primary-foreground text-xs rounded-full h-5 min-w-5 flex items-center justify-center px-1">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatContactItem;
