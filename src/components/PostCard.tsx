
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, MessageCircle, Share } from "lucide-react";

export interface PostProps {
  id: string;
  author: {
    name: string;
    avatar?: string;
    username: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const PostCard = ({ author, content, image, timestamp, likes, comments }: PostProps) => {
  return (
    <Card className="mb-4 overflow-hidden animate-fade-in">
      <CardHeader className="p-4 pb-0 flex flex-row items-center space-x-3">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">{author.name}</div>
          <div className="text-xs text-muted-foreground">@{author.username} · {timestamp}</div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <p className="mb-3">{content}</p>
        {image && (
          <div className="rounded-md overflow-hidden">
            <img 
              src={image} 
              alt="Пост" 
              className="w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-3 pt-0 flex justify-between border-t border-border">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Heart className="h-4 w-4 mr-1" /> {likes}
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <MessageCircle className="h-4 w-4 mr-1" /> {comments}
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Share className="h-4 w-4 mr-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
