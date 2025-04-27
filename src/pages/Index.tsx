
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import CreatePostForm from "@/components/CreatePostForm";
import { useEffect, useState } from "react";

// Демо данные для примера
const demoData = [
  {
    id: "1",
    author: {
      name: "Анна Иванова",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      username: "anna_i"
    },
    content: "Отличный день для прогулки в парке! 🌳",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    timestamp: "2 часа назад",
    likes: 24,
    comments: 3
  },
  {
    id: "2",
    author: {
      name: "Михаил Петров",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      username: "mikhail_p"
    },
    content: "Работаю над новым проектом. Делюсь процессом!",
    timestamp: "5 часов назад",
    likes: 15,
    comments: 7
  },
  {
    id: "3",
    author: {
      name: "Елена Смирнова",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      username: "elena_s"
    },
    content: "Сегодня испекла свой первый хлеб! Получилось очень вкусно 🍞",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    timestamp: "вчера",
    likes: 42,
    comments: 9
  }
];

const Index = () => {
  const [posts, setPosts] = useState<typeof demoData>([]);

  useEffect(() => {
    // Имитация загрузки постов
    setTimeout(() => {
      setPosts(demoData);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto max-w-2xl pt-24 pb-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Лента</h1>
        
        <CreatePostForm />
        
        {posts.length === 0 ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-pulse text-muted-foreground">Загрузка постов...</div>
          </div>
        ) : (
          posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))
        )}
      </main>
    </div>
  );
};

export default Index;
