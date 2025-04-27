
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Video, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  name: string;
  avatar?: string;
  isOnline?: boolean;
}

const ChatHeader = ({ name, avatar, isOnline = false }: ChatHeaderProps) => {
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="p-3 border-b flex items-center gap-3 bg-card/50">
      <div className="flex items-center gap-3 flex-1">
        <div className="relative">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          {isOnline && (
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-background"></span>
          )}
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          {isOnline ? (
            <p className="text-xs text-green-600">В сети</p>
          ) : (
            <p className="text-xs text-muted-foreground">Не в сети</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Video className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
