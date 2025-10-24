import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Search, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const employees = [
  { name: "Derek Loyd", role: "Regional Director of Operations", region: "Region 1", email: "dloyd@egmgmt.com", phone: "(847) 894-3200" },
  { name: "Andrew Defosses", role: "Regional Director of Operations", region: "Region 2", email: "adefosses@egmgmt.com", phone: "(847) 894-3201" },
  { name: "Brad Schlageter", role: "Chief Information Officer", region: "Corporate", email: "bschlageter@egmgmt.com", phone: "(847) 894-3233" },
  { name: "Angela Franciosa", role: "Executive Director", region: "Allentown", email: "afranciosa@egmgmt.com", phone: "(610) 366-9010" },
];

export const EmployeeDirectory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Directory</CardTitle>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search employees..."
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {employees.map((employee, index) => (
            <div key={index} className="flex items-start gap-4">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm">{employee.name}</h3>
                <p className="text-xs text-muted-foreground">{employee.role}</p>
                <p className="text-xs text-primary font-medium mt-1">{employee.region}</p>
                <div className="mt-2 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{employee.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{employee.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
