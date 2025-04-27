
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatContactItemProps {
  name: string;
  avatar: string;
  lastMessage?: string;
  time?: string;
  unread?: number;
  isActive: boolean;
  onClick: () => void;
  isOnline?: boolean;
}

const ChatContactItem = ({
  name,
  avatar,
  lastMessage,
  time,
  unread,
  isActive,
  onClick,
  isOnline = false
}: ChatContactItemProps) => {
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 cursor-pointer hover:bg-accent/50 transition-colors",
        isActive && "bg-accent"
      )}
      onClick={onClick}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        {isOnline && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <span className="font-medium truncate">{name}</span>
          {time && <span className="text-xs text-muted-foreground">{time}</span>}
        </div>
        
        <div className="flex justify-between items-center mt-1">
          {lastMessage && (
            <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
          )}
          {unread && unread > 0 && (
            <span className="ml-2 flex-shrink-0 h-5 min-w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatContactItem;
