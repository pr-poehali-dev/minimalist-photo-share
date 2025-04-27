
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Image, Send } from "lucide-react";
import { useState } from "react";

const CreatePostForm = () => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    // Имитация отправки поста
    setTimeout(() => {
      setContent("");
      setIsSubmitting(false);
      // Здесь можно добавить логику для добавления поста в ленту
    }, 1000);
  };

  return (
    <Card className="mb-6">
      <form onSubmit={handleSubmit}>
        <CardContent className="p-4">
          <div className="flex space-x-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" />
              <AvatarFallback>ЮК</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="Чем хотите поделиться?"
              className="flex-1 resize-none border-none focus-visible:ring-0"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </CardContent>
        
        <CardFooter className="p-3 pt-0 flex justify-between border-t border-border">
          <Button type="button" variant="ghost" size="sm">
            <Image className="h-4 w-4 mr-1" />
            Фото
          </Button>
          
          <Button 
            type="submit" 
            size="sm" 
            disabled={!content.trim() || isSubmitting}
          >
            <Send className="h-4 w-4 mr-1" />
            Опубликовать
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreatePostForm;
