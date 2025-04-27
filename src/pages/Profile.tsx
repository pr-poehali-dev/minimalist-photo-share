
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageIcon, UserIcon, Settings } from "lucide-react";
import { useState, useEffect } from "react";

// Демо данные для примера
const userPosts = [
  {
    id: "1",
    author: {
      name: "Юрий Карпов",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      username: "yuri_k"
    },
    content: "Вчера посетил выставку современного искусства. Очень впечатлила работа художника из Петербурга!",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    timestamp: "3 дня назад",
    likes: 32,
    comments: 5
  },
  {
    id: "2",
    author: {
      name: "Юрий Карпов",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      username: "yuri_k"
    },
    content: "Начал изучать React и TypeScript. Пока все очень интересно!",
    timestamp: "неделю назад",
    likes: 18,
    comments: 3
  }
];

const Profile = () => {
  const [posts, setPosts] = useState<typeof userPosts>([]);

  useEffect(() => {
    // Имитация загрузки постов
    setTimeout(() => {
      setPosts(userPosts);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto max-w-3xl pt-24 pb-10 px-4">
        <div className="bg-card rounded-lg p-6 mb-6 relative">
          <div className="absolute right-6 top-6">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Юрий Карпов" />
              <AvatarFallback className="text-xl">ЮК</AvatarFallback>
            </Avatar>
            
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold">Юрий Карпов</h1>
              <p className="text-sm text-muted-foreground">@yuri_k</p>
              
              <div className="flex justify-center sm:justify-start gap-4 mt-3">
                <div>
                  <div className="font-bold">125</div>
                  <div className="text-xs text-muted-foreground">Постов</div>
                </div>
                <div>
                  <div className="font-bold">843</div>
                  <div className="text-xs text-muted-foreground">Подписчиков</div>
                </div>
                <div>
                  <div className="font-bold">352</div>
                  <div className="text-xs text-muted-foreground">Подписок</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm">Программист, астронавт и просто хороший человек. Люблю путешествовать и делиться яркими моментами.</p>
          </div>
        </div>
        
        <Tabs defaultValue="posts">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="posts" className="flex-1">
              <UserIcon className="h-4 w-4 mr-2" />
              Посты
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex-1">
              <ImageIcon className="h-4 w-4 mr-2" />
              Фотографии
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            {posts.length === 0 ? (
              <div className="flex justify-center items-center py-10">
                <div className="animate-pulse text-muted-foreground">Загрузка постов...</div>
              </div>
            ) : (
              posts.map(post => (
                <PostCard key={post.id} {...post} />
              ))
            )}
          </TabsContent>
          
          <TabsContent value="photos">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {posts
                .filter(post => post.image)
                .map(post => (
                  <div key={post.id} className="aspect-square rounded-md overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Фото" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;
