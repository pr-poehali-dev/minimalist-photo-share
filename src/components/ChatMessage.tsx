
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
  sender?: {
    name: string;
    avatar: string;
  };
}

const ChatMessage = ({ content, timestamp, isCurrentUser, sender }: ChatMessageProps) => {
  const initials = sender?.name
    ? sender.name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase()
    : "ME";

  return (
    <div 
      className={cn(
        "flex mb-4",
        isCurrentUser ? "justify-end" : "justify-start"
      )}
    >
      {!isCurrentUser && sender && (
        <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
          <AvatarImage src={sender.avatar} alt={sender.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      )}
      
      <div>
        <div 
          className={cn(
            "max-w-md px-4 py-2 rounded-lg",
            isCurrentUser 
              ? "bg-primary text-primary-foreground rounded-tr-none" 
              : "bg-muted rounded-tl-none"
          )}
        >
          {content}
        </div>
        <div 
          className={cn(
            "text-xs text-muted-foreground mt-1",
            isCurrentUser ? "text-right" : "text-left"
          )}
        >
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
