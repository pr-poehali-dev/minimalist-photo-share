
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, User, Bell, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background border-b border-border h-16 flex items-center px-4">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Минисеть</Link>
        
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
