
import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "@/components/ChatMessage";
import { Message } from "@/types/chat";

interface MessageHistoryProps {
  messages: Message[];
}

const MessageHistory = ({ messages }: MessageHistoryProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Прокрутка к последнему сообщению при изменении истории сообщений
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ScrollArea className="flex-1 p-4 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            time={message.time}
            isMe={message.isMe}
            status={message.status}
            attachment={message.attachment}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default MessageHistory;
