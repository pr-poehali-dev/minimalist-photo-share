
import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "@/components/ChatMessage";
import { Message } from "@/types/chat";

interface MessageHistoryProps {
  messages?: Message[];
}

const MessageHistory = ({ messages }: MessageHistoryProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Автоматическая прокрутка к последнему сообщению
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages && messages.length > 0 ? (
          <>
            {messages.map(msg => (
              <ChatMessage
                key={msg.id}
                content={msg.content}
                timestamp={msg.timestamp}
                isCurrentUser={msg.isCurrentUser}
                sender={!msg.isCurrentUser ? msg.sender : undefined}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        ) : (
          <div className="flex h-full min-h-[300px] items-center justify-center text-muted-foreground">
            Начните общение прямо сейчас!
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default MessageHistory;
