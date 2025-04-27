
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, BellRing, ShieldAlert, Eye, Palette } from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState("public");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto max-w-4xl pt-24 pb-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Настройки</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-6 grid grid-cols-4 max-w-md">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Внешний вид</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <BellRing className="h-4 w-4" />
              <span className="hidden sm:inline">Уведомления</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <ShieldAlert className="h-4 w-4" />
              <span className="hidden sm:inline">Приватность</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Настройки профиля */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Информация профиля</CardTitle>
                <CardDescription>
                  Обновите данные вашего профиля и настройте его видимость.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
                    <AvatarFallback>АВ</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Изменить фото</Button>
                </div>
                
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" defaultValue="Мария Иванова" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="username">Имя пользователя</Label>
                    <Input id="username" defaultValue="maria_ivanova" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="maria@example.com" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="bio">О себе</Label>
                    <Input id="bio" defaultValue="Фотограф и путешественник" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Сохранить изменения</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Настройки внешнего вида */}
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Внешний вид</CardTitle>
                <CardDescription>
                  Настройте внешний вид приложения по своему вкусу.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Темная тема</Label>
                    <p className="text-sm text-muted-foreground">
                      Включить темную тему для приложения
                    </p>
                  </div>
                  <Switch
                    id="dark-mode"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
                
                <div className="pt-4">
                  <Label htmlFor="theme">Цветовая схема</Label>
                  <Select defaultValue="purple">
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите цветовую схему" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="purple">Фиолетовая</SelectItem>
                      <SelectItem value="blue">Синяя</SelectItem>
                      <SelectItem value="green">Зеленая</SelectItem>
                      <SelectItem value="orange">Оранжевая</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Сохранить изменения</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Настройки уведомлений */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Уведомления</CardTitle>
                <CardDescription>
                  Настройте способы получения уведомлений от приложения.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Пуш-уведомления</Label>
                    <p className="text-sm text-muted-foreground">
                      Получать пуш-уведомления от приложения
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email-уведомления</Label>
                    <p className="text-sm text-muted-foreground">
                      Получать уведомления на email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                
                <div className="pt-4">
                  <Label htmlFor="notification-frequency">Частота уведомлений</Label>
                  <Select defaultValue="realtime">
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите частоту уведомлений" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">В реальном времени</SelectItem>
                      <SelectItem value="daily">Ежедневный дайджест</SelectItem>
                      <SelectItem value="weekly">Еженедельный дайджест</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Сохранить изменения</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Настройки приватности */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Приватность</CardTitle>
                <CardDescription>
                  Настройте параметры приватности вашего аккаунта.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="pt-1">
                  <Label htmlFor="profile-visibility">Видимость профиля</Label>
                  <Select 
                    value={profileVisibility} 
                    onValueChange={setProfileVisibility}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите видимость профиля" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Публичный</SelectItem>
                      <SelectItem value="followers">Только подписчики</SelectItem>
                      <SelectItem value="private">Приватный</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="online-status">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>Показывать статус онлайн</span>
                      </div>
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Другие пользователи смогут видеть, когда вы онлайн
                    </p>
                  </div>
                  <Switch
                    id="online-status"
                    defaultChecked
                  />
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="read-receipts">Подтверждения прочтения</Label>
                    <p className="text-sm text-muted-foreground">
                      Отправлять подтверждения о прочтении сообщений
                    </p>
                  </div>
                  <Switch
                    id="read-receipts"
                    defaultChecked
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Сохранить изменения</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;
