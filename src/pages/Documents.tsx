import { useState } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const documentsByDepartment = {
  hr: [
    { name: "Employee Handbook", type: "PDF", date: "2024-01-15", size: "2.5 MB" },
    { name: "Benefits Guide 2024", type: "PDF", date: "2024-01-10", size: "1.8 MB" },
    { name: "PTO Policy", type: "PDF", date: "2024-01-05", size: "450 KB" },
    { name: "Performance Review Template", type: "DOCX", date: "2023-12-20", size: "125 KB" },
  ],
  it: [
    { name: "IT Security Policy", type: "PDF", date: "2024-02-01", size: "3.2 MB" },
    { name: "Software Installation Guide", type: "PDF", date: "2024-01-20", size: "1.5 MB" },
    { name: "Network Access Request Form", type: "DOCX", date: "2024-01-15", size: "85 KB" },
    { name: "Help Desk Procedures", type: "PDF", date: "2023-12-10", size: "920 KB" },
  ],
  health: [
    { name: "Health & Safety Guidelines", type: "PDF", date: "2024-02-10", size: "2.8 MB" },
    { name: "Emergency Response Plan", type: "PDF", date: "2024-02-05", size: "1.9 MB" },
    { name: "Medication Administration Policy", type: "PDF", date: "2024-01-25", size: "1.2 MB" },
    { name: "Infection Control Procedures", type: "PDF", date: "2024-01-20", size: "1.6 MB" },
  ],
  operations: [
    { name: "Standard Operating Procedures", type: "PDF", date: "2024-02-15", size: "4.5 MB" },
    { name: "Facility Maintenance Schedule", type: "XLSX", date: "2024-02-10", size: "340 KB" },
    { name: "Supply Chain Management", type: "PDF", date: "2024-01-30", size: "2.1 MB" },
    { name: "Quality Assurance Manual", type: "PDF", date: "2024-01-15", size: "3.8 MB" },
  ],
  finance: [
    { name: "Financial Policies & Procedures", type: "PDF", date: "2024-02-20", size: "2.9 MB" },
    { name: "Expense Report Template", type: "XLSX", date: "2024-02-01", size: "220 KB" },
    { name: "Budget Planning Guidelines", type: "PDF", date: "2024-01-25", size: "1.7 MB" },
    { name: "Accounts Payable Procedures", type: "PDF", date: "2024-01-10", size: "1.3 MB" },
  ],
  marketing: [
    { name: "Brand Guidelines", type: "PDF", date: "2024-02-18", size: "5.2 MB" },
    { name: "Marketing Strategy 2024", type: "PDF", date: "2024-02-01", size: "3.4 MB" },
    { name: "Social Media Policy", type: "PDF", date: "2024-01-20", size: "890 KB" },
    { name: "Content Calendar Template", type: "XLSX", date: "2024-01-15", size: "180 KB" },
  ],
};

const departmentLabels = {
  hr: "Human Resources",
  it: "Information Technology",
  health: "Health & Wellness",
  operations: "Operations",
  finance: "Finance & Accounting",
  marketing: "Sales & Marketing",
};

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterDocuments = (docs: typeof documentsByDepartment.hr) => {
    if (!searchQuery) return docs;
    return docs.filter(doc =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Company Documents</h1>
          <p className="text-muted-foreground">
            Access important company documentation and resources by department
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="hr" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6">
            {Object.entries(departmentLabels).map(([key, label]) => (
              <TabsTrigger key={key} value={key}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(documentsByDepartment).map(([dept, docs]) => (
            <TabsContent key={dept} value={dept}>
              <Card>
                <CardHeader>
                  <CardTitle>{departmentLabels[dept as keyof typeof departmentLabels]} Documents</CardTitle>
                  <CardDescription>
                    {filterDocuments(docs).length} document(s) available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filterDocuments(docs).map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {doc.type} • {doc.size} • Updated {doc.date}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                    {filterDocuments(docs).length === 0 && (
                      <p className="text-center text-muted-foreground py-8">
                        No documents found matching your search.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default Documents;
