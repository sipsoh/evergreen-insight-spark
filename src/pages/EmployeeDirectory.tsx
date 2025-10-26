import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone, Building2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const employees = [
  { name: "Derek Loyd", role: "Regional Director of Operations", region: "Region 1", email: "dloyd@egmgmt.com", phone: "(847) 894-3200" },
  { name: "Andrew Defosses", role: "Regional Director of Operations", region: "Region 2", email: "adefosses@egmgmt.com", phone: "(847) 894-3201" },
  { name: "Brad Schlageter", role: "Chief Information Officer", region: "Corporate", email: "bschlageter@egmgmt.com", phone: "(847) 894-3233" },
  { name: "Angela Franciosa", role: "Executive Director", region: "Allentown", email: "afranciosa@egmgmt.com", phone: "(610) 366-9010" },
  { name: "Sarah Johnson", role: "HR Director", region: "Corporate", email: "sjohnson@egmgmt.com", phone: "(847) 894-3210" },
  { name: "Michael Chen", role: "IT Manager", region: "Corporate", email: "mchen@egmgmt.com", phone: "(847) 894-3234" },
  { name: "Emily Rodriguez", role: "Operations Manager", region: "Region 1", email: "erodriguez@egmgmt.com", phone: "(847) 894-3202" },
  { name: "David Martinez", role: "Executive Director", region: "Bath", email: "dmartinez@egmgmt.com", phone: "(330) 666-2700" },
  { name: "Jennifer Lee", role: "Executive Director", region: "Tampa", email: "jlee@egmgmt.com", phone: "(813) 973-2000" },
  { name: "Robert Kim", role: "Finance Director", region: "Corporate", email: "rkim@egmgmt.com", phone: "(847) 894-3220" },
];

const EmployeeDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Employee Directory</h1>
          <p className="text-muted-foreground">Search and connect with employees across all facilities and departments</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Search Employees</CardTitle>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, role, or location..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                    <Avatar className="h-16 w-16 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">{employee.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="h-3 w-3 text-primary" />
                        <p className="text-sm text-primary font-medium">{employee.region}</p>
                      </div>
                      <div className="mt-3 flex flex-col gap-2">
                        <a href={`mailto:${employee.email}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{employee.email}</span>
                        </a>
                        <a href={`tel:${employee.phone}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{employee.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No employees found matching your search.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EmployeeDirectory;
