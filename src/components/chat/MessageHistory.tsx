
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "@/components/ChatMessage";
import { Message } from "@/types/chat";

interface MessageHistoryProps {
  messages?: Message[];
}

const MessageHistory = ({ messages }: MessageHistoryProps) => {
  return (
    <ScrollArea className="flex-1 p-4">
      {messages && messages.length > 0 ? (
        messages.map(msg => (
          <ChatMessage
            key={msg.id}
            content={msg.content}
            timestamp={msg.timestamp}
            isCurrentUser={msg.isCurrentUser}
            sender={!msg.isCurrentUser ? msg.sender : undefined}
          />
        ))
      ) : (
        <div className="flex h-full items-center justify-center text-muted-foreground">
          Начните общение прямо сейчас!
        </div>
      )}
    </ScrollArea>
  );
};

export default MessageHistory;
