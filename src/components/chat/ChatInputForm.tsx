
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Image, Smile } from "lucide-react";

interface ChatInputFormProps {
  onSendMessage: (message: string) => void;
}

const ChatInputForm = ({ onSendMessage }: ChatInputFormProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;
    
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form 
      className="p-3 border-t flex items-center gap-2 bg-card/50"
      onSubmit={handleSubmit}
    >
      <Button type="button" variant="ghost" size="icon" className="text-muted-foreground">
        <Paperclip className="h-5 w-5" />
      </Button>
      <Button type="button" variant="ghost" size="icon" className="text-muted-foreground">
        <Image className="h-5 w-5" />
      </Button>
      
      <div className="relative flex-1">
        <Input
          placeholder="Введите сообщение..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="pr-10"
        />
        <Button 
          type="button" 
          variant="ghost" 
          size="icon" 
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground"
        >
          <Smile className="h-5 w-5" />
        </Button>
      </div>
      
      <Button 
        type="submit" 
        size="icon" 
        className="rounded-full h-10 w-10"
        disabled={message.trim() === ""}
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInputForm;
