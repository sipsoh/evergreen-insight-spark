import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FileText, Calendar, Phone, Mail, DollarSign, UserCheck } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { icon: FileText, label: "Policies & Procedures", color: "text-blue-600" },
  { icon: Calendar, label: "Event Calendar", color: "text-green-600" },
  { icon: Phone, label: "IT Support", color: "text-purple-600" },
  { icon: Mail, label: "HR Forms", color: "text-orange-600" },
  { icon: DollarSign, label: "Payroll", color: "text-emerald-600" },
  { icon: UserCheck, label: "Time & Attendance", color: "text-pink-600" },
];

export const QuickLinks = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.label}
                variant="outline"
                className="h-auto flex-col gap-2 py-4"
              >
                <Icon className={cn("h-6 w-6", link.color)} />
                <span className="text-xs font-medium">{link.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
