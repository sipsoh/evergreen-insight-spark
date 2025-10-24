import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Users, Laptop, Heart, Briefcase, DollarSign, TrendingUp, ExternalLink } from "lucide-react";

const departments = [
  { 
    name: "Human Resources", 
    path: "/departments/hr", 
    icon: Users, 
    color: "text-green-600",
    bgColor: "bg-green-600/10",
    desc: "Benefits, policies, training"
  },
  { 
    name: "Information Technology", 
    path: "/departments/it", 
    icon: Laptop, 
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    desc: "Support, systems, security"
  },
  { 
    name: "Health & Wellness", 
    path: "/departments/health", 
    icon: Heart, 
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
    desc: "Clinical programs, compliance"
  },
  { 
    name: "Operations", 
    path: "/departments/operations", 
    icon: Briefcase, 
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
    desc: "Facility management, logistics"
  },
  { 
    name: "Finance & Accounting", 
    path: "/departments/finance", 
    icon: DollarSign, 
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/10",
    desc: "Budgets, payroll, reporting"
  },
  { 
    name: "Sales & Marketing", 
    path: "/departments/marketing", 
    icon: TrendingUp, 
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
    desc: "Census, outreach, branding"
  },
];

export const DepartmentDirectory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Departments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <Link key={index} to={dept.path}>
                <div className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`rounded-full ${dept.bgColor} p-2`}>
                      <Icon className={`h-4 w-4 ${dept.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{dept.name}</h3>
                      <p className="text-xs text-muted-foreground">{dept.desc}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
