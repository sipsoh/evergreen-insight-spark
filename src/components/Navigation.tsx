import { Link, useLocation } from "react-router-dom";
import { Home, Building2, Users, FileText, Briefcase, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Building2, label: "Facilities", path: "/facilities", hasDropdown: true },
  { icon: Briefcase, label: "Departments", path: "/departments", hasDropdown: true },
  { icon: Users, label: "Employee Directory", path: "/employees" },
  { icon: FileText, label: "Documents", path: "/documents" },
];

const departmentLinks = [
  { label: "Human Resources", path: "/departments/hr" },
  { label: "Information Technology", path: "/departments/it" },
  { label: "Health & Wellness", path: "/departments/health" },
  { label: "Operations", path: "/departments/operations" },
  { label: "Finance & Accounting", path: "/departments/finance" },
  { label: "Sales & Marketing", path: "/departments/marketing" },
];

const facilityLinks = [
  { label: "Arden Courts Annandale", path: "/facility/annandale" },
  { label: "Arden Courts Bath", path: "/facility/bath" },
  { label: "Arden Courts Tampa", path: "/facility/tampa" },
  { label: "View All Facilities", path: "/facilities" },
];

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b bg-white">
      <div className="container flex gap-1 px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
            (item.label === "Departments" && location.pathname.startsWith("/departments")) ||
            (item.label === "Facilities" && location.pathname.startsWith("/facility"));
          
          if (item.hasDropdown && item.label === "Departments") {
            return (
              <DropdownMenu key={item.path}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center gap-2 border-b-2 rounded-none px-4 py-3 h-auto text-sm font-medium transition-colors hover:text-primary hover:bg-transparent",
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {departmentLinks.map((dept) => (
                    <DropdownMenuItem key={dept.path} asChild>
                      <Link to={dept.path} className="cursor-pointer">
                        {dept.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }
          
          if (item.hasDropdown && item.label === "Facilities") {
            return (
              <DropdownMenu key={item.path}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center gap-2 border-b-2 rounded-none px-4 py-3 h-auto text-sm font-medium transition-colors hover:text-primary hover:bg-transparent",
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {facilityLinks.map((facility) => (
                    <DropdownMenuItem key={facility.path} asChild>
                      <Link to={facility.path} className="cursor-pointer">
                        {facility.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }
          
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
