import { Link } from "react-router-dom";
import { Search, User, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import evergreenBrands from "@/assets/evergreen-brands.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img src={evergreenBrands} alt="Evergreen Management" className="h-16" />
        </Link>
        
        <div className="flex flex-1 items-center justify-center px-8">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search sites, people, and content..."
              className="w-full pl-10"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
