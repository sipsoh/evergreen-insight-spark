import { Link, useLocation } from "react-router-dom";
import { Home, Building2, Users, FileText, Briefcase, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Building2, label: "Facilities", path: "/facilities" },
  { icon: Users, label: "Employee Directory", path: "/directory" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: Briefcase, label: "Applications", path: "/apps" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b bg-white">
      <div className="container flex gap-1 px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors hover:text-primary",
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
