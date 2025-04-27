
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Image, Smile, Send, Mic } from "lucide-react";

interface ChatInputFormProps {
  onSendMessage: (message: string) => void;
}

const ChatInputForm = ({ onSendMessage }: ChatInputFormProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSendMessage(message);
        setMessage("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-3 bg-card/50">
      <div className="flex items-end gap-2">
        <div className="flex gap-1">
          <Button type="button" variant="ghost" size="icon" className="rounded-full h-9 w-9 flex-shrink-0">
            <Paperclip className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button type="button" variant="ghost" size="icon" className="rounded-full h-9 w-9 flex-shrink-0">
            <Image className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
        
        <div className="relative flex-1">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Введите сообщение..."
            className="resize-none min-h-[44px] max-h-[120px] pr-10"
            rows={1}
          />
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="absolute right-1 bottom-1 rounded-full h-8 w-8"
          >
            <Smile className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
        
        {message.trim() ? (
          <Button type="submit" size="icon" className="rounded-full h-10 w-10 flex-shrink-0">
            <Send className="h-5 w-5" />
          </Button>
        ) : (
          <Button type="button" variant="default" size="icon" className="rounded-full h-10 w-10 flex-shrink-0">
            <Mic className="h-5 w-5" />
          </Button>
        )}
      </div>
    </form>
  );
};

export default ChatInputForm;
