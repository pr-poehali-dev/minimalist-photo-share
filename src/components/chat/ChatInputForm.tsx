
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

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
      className="p-3 border-t flex items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Введите сообщение..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" size="icon">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInputForm;
