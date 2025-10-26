import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, FileText, Download, Filter, Calendar, FolderOpen, File, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Sample document data with more metadata
const allDocuments = [
  // HR Documents
  { id: 1, name: "Employee Handbook", department: "Human Resources", category: "Policies", type: "PDF", date: "2024-01-15", year: 2024, size: "2.5 MB", uploadedBy: "Sarah Johnson", version: "3.2" },
  { id: 2, name: "Benefits Guide 2024", department: "Human Resources", category: "Benefits", type: "PDF", date: "2024-01-10", year: 2024, size: "1.8 MB", uploadedBy: "Sarah Johnson", version: "1.0" },
  { id: 3, name: "PTO Policy", department: "Human Resources", category: "Policies", type: "PDF", date: "2024-01-05", year: 2024, size: "450 KB", uploadedBy: "Sarah Johnson", version: "2.1" },
  { id: 4, name: "Performance Review Template", department: "Human Resources", category: "Templates", type: "DOCX", date: "2023-12-20", year: 2023, size: "125 KB", uploadedBy: "Sarah Johnson", version: "1.5" },
  { id: 5, name: "Onboarding Checklist", department: "Human Resources", category: "Templates", type: "XLSX", date: "2024-02-01", year: 2024, size: "320 KB", uploadedBy: "Sarah Johnson", version: "2.0" },
  
  // IT Documents
  { id: 6, name: "IT Security Policy", department: "Information Technology", category: "Security", type: "PDF", date: "2024-02-01", year: 2024, size: "3.2 MB", uploadedBy: "Michael Chen", version: "4.0" },
  { id: 7, name: "Software Installation Guide", department: "Information Technology", category: "Guides", type: "PDF", date: "2024-01-20", year: 2024, size: "1.5 MB", uploadedBy: "Michael Chen", version: "2.3" },
  { id: 8, name: "Network Access Request Form", department: "Information Technology", category: "Forms", type: "DOCX", date: "2024-01-15", year: 2024, size: "85 KB", uploadedBy: "Michael Chen", version: "1.2" },
  { id: 9, name: "Help Desk Procedures", department: "Information Technology", category: "Procedures", type: "PDF", date: "2023-12-10", year: 2023, size: "920 KB", uploadedBy: "Michael Chen", version: "3.1" },
  { id: 10, name: "Disaster Recovery Plan", department: "Information Technology", category: "Security", type: "PDF", date: "2024-01-25", year: 2024, size: "4.1 MB", uploadedBy: "Michael Chen", version: "2.0" },
  
  // Health & Wellness Documents
  { id: 11, name: "Health & Safety Guidelines", department: "Health & Wellness", category: "Compliance", type: "PDF", date: "2024-02-10", year: 2024, size: "2.8 MB", uploadedBy: "Dr. Emily Rodriguez", version: "5.0" },
  { id: 12, name: "Emergency Response Plan", department: "Health & Wellness", category: "Safety", type: "PDF", date: "2024-02-05", year: 2024, size: "1.9 MB", uploadedBy: "Dr. Emily Rodriguez", version: "3.2" },
  { id: 13, name: "Medication Administration Policy", department: "Health & Wellness", category: "Policies", type: "PDF", date: "2024-01-25", year: 2024, size: "1.2 MB", uploadedBy: "Dr. Emily Rodriguez", version: "4.1" },
  { id: 14, name: "Infection Control Procedures", department: "Health & Wellness", category: "Procedures", type: "PDF", date: "2024-01-20", year: 2024, size: "1.6 MB", uploadedBy: "Dr. Emily Rodriguez", version: "3.0" },
  { id: 15, name: "Resident Care Standards", department: "Health & Wellness", category: "Standards", type: "PDF", date: "2024-02-15", year: 2024, size: "3.5 MB", uploadedBy: "Dr. Emily Rodriguez", version: "2.5" },
  
  // Operations Documents
  { id: 16, name: "Standard Operating Procedures", department: "Operations", category: "Procedures", type: "PDF", date: "2024-02-15", year: 2024, size: "4.5 MB", uploadedBy: "James Martinez", version: "6.0" },
  { id: 17, name: "Facility Maintenance Schedule", department: "Operations", category: "Schedules", type: "XLSX", date: "2024-02-10", year: 2024, size: "340 KB", uploadedBy: "James Martinez", version: "1.8" },
  { id: 18, name: "Supply Chain Management", department: "Operations", category: "Logistics", type: "PDF", date: "2024-01-30", year: 2024, size: "2.1 MB", uploadedBy: "James Martinez", version: "3.5" },
  { id: 19, name: "Quality Assurance Manual", department: "Operations", category: "Quality", type: "PDF", date: "2024-01-15", year: 2024, size: "3.8 MB", uploadedBy: "James Martinez", version: "4.2" },
  { id: 20, name: "Vendor Management Guide", department: "Operations", category: "Guides", type: "PDF", date: "2023-12-20", year: 2023, size: "1.9 MB", uploadedBy: "James Martinez", version: "2.3" },
  
  // Finance Documents
  { id: 21, name: "Financial Policies & Procedures", department: "Finance & Accounting", category: "Policies", type: "PDF", date: "2024-02-20", year: 2024, size: "2.9 MB", uploadedBy: "Linda Thompson", version: "5.1" },
  { id: 22, name: "Expense Report Template", department: "Finance & Accounting", category: "Templates", type: "XLSX", date: "2024-02-01", year: 2024, size: "220 KB", uploadedBy: "Linda Thompson", version: "3.0" },
  { id: 23, name: "Budget Planning Guidelines", department: "Finance & Accounting", category: "Guidelines", type: "PDF", date: "2024-01-25", year: 2024, size: "1.7 MB", uploadedBy: "Linda Thompson", version: "2.8" },
  { id: 24, name: "Accounts Payable Procedures", department: "Finance & Accounting", category: "Procedures", type: "PDF", date: "2024-01-10", year: 2024, size: "1.3 MB", uploadedBy: "Linda Thompson", version: "4.0" },
  { id: 25, name: "Annual Financial Report 2023", department: "Finance & Accounting", category: "Reports", type: "PDF", date: "2024-01-05", year: 2023, size: "5.2 MB", uploadedBy: "Linda Thompson", version: "1.0" },
  
  // Marketing Documents
  { id: 26, name: "Brand Guidelines", department: "Sales & Marketing", category: "Brand", type: "PDF", date: "2024-02-18", year: 2024, size: "5.2 MB", uploadedBy: "David Kim", version: "3.5" },
  { id: 27, name: "Marketing Strategy 2024", department: "Sales & Marketing", category: "Strategy", type: "PDF", date: "2024-02-01", year: 2024, size: "3.4 MB", uploadedBy: "David Kim", version: "2.0" },
  { id: 28, name: "Social Media Policy", department: "Sales & Marketing", category: "Policies", type: "PDF", date: "2024-01-20", year: 2024, size: "890 KB", uploadedBy: "David Kim", version: "2.2" },
  { id: 29, name: "Content Calendar Template", department: "Sales & Marketing", category: "Templates", type: "XLSX", date: "2024-01-15", year: 2024, size: "180 KB", uploadedBy: "David Kim", version: "1.3" },
  { id: 30, name: "Campaign Performance Report Q4", department: "Sales & Marketing", category: "Reports", type: "PDF", date: "2024-01-10", year: 2024, size: "2.7 MB", uploadedBy: "David Kim", version: "1.0" },
];

const departments = [...new Set(allDocuments.map(doc => doc.department))];
const categories = [...new Set(allDocuments.map(doc => doc.category))];
const fileTypes = [...new Set(allDocuments.map(doc => doc.type))];
const years = [...new Set(allDocuments.map(doc => doc.year))].sort((a, b) => b - a);

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("date-desc");
  const [showFilters, setShowFilters] = useState(true);

  const toggleDepartment = (dept: string) => {
    setSelectedDepartments(prev =>
      prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
    );
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearAllFilters = () => {
    setSelectedDepartments([]);
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedYear("all");
    setSearchQuery("");
  };

  const filteredDocuments = useMemo(() => {
    let filtered = allDocuments;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Department filter
    if (selectedDepartments.length > 0) {
      filtered = filtered.filter(doc => selectedDepartments.includes(doc.department));
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(doc => selectedCategories.includes(doc.category));
    }

    // Type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(doc => selectedTypes.includes(doc.type));
    }

    // Year filter
    if (selectedYear !== "all") {
      filtered = filtered.filter(doc => doc.year === parseInt(selectedYear));
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedDepartments, selectedCategories, selectedTypes, selectedYear, sortBy]);

  const activeFiltersCount = selectedDepartments.length + selectedCategories.length + selectedTypes.length + (selectedYear !== "all" ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold">Document Management System</h1>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {filteredDocuments.length} {filteredDocuments.length === 1 ? 'Document' : 'Documents'}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Evergreen Senior Living - Centralized company documentation repository
          </p>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden`}>
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    <h2 className="font-semibold text-lg">Filters</h2>
                    {activeFiltersCount > 0 && (
                      <Badge variant="default">{activeFiltersCount}</Badge>
                    )}
                  </div>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                <ScrollArea className="h-[calc(100vh-300px)]">
                  <div className="space-y-6">
                    {/* Department Filter */}
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full group">
                        <div className="flex items-center gap-2">
                          <FolderOpen className="h-4 w-4" />
                          <span className="font-medium">Department</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-3 space-y-2">
                        {departments.map(dept => (
                          <div key={dept} className="flex items-center space-x-2">
                            <Checkbox
                              id={`dept-${dept}`}
                              checked={selectedDepartments.includes(dept)}
                              onCheckedChange={() => toggleDepartment(dept)}
                            />
                            <Label
                              htmlFor={`dept-${dept}`}
                              className="text-sm cursor-pointer flex-1"
                            >
                              {dept}
                            </Label>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Separator />

                    {/* Category Filter */}
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full group">
                        <div className="flex items-center gap-2">
                          <File className="h-4 w-4" />
                          <span className="font-medium">Category</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-3 space-y-2">
                        {categories.map(cat => (
                          <div key={cat} className="flex items-center space-x-2">
                            <Checkbox
                              id={`cat-${cat}`}
                              checked={selectedCategories.includes(cat)}
                              onCheckedChange={() => toggleCategory(cat)}
                            />
                            <Label
                              htmlFor={`cat-${cat}`}
                              className="text-sm cursor-pointer flex-1"
                            >
                              {cat}
                            </Label>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Separator />

                    {/* File Type Filter */}
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full group">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          <span className="font-medium">File Type</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-3 space-y-2">
                        {fileTypes.map(type => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={`type-${type}`}
                              checked={selectedTypes.includes(type)}
                              onCheckedChange={() => toggleType(type)}
                            />
                            <Label
                              htmlFor={`type-${type}`}
                              className="text-sm cursor-pointer flex-1"
                            >
                              {type}
                            </Label>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Separator />

                    {/* Year Filter */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Year</span>
                      </div>
                      <Select value={selectedYear} onValueChange={setSelectedYear}>
                        <SelectTrigger>
                          <SelectValue placeholder="All years" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All years</SelectItem>
                          {years.map(year => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Card>
              <CardContent className="p-6">
                {/* Search and Controls */}
                <div className="flex gap-4 mb-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search documents by name, category, or uploader..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date-desc">Newest First</SelectItem>
                      <SelectItem value="date-asc">Oldest First</SelectItem>
                      <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                      <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Documents Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[40%]">Document Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Upload Date</TableHead>
                        <TableHead>Version</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDocuments.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={8} className="text-center py-12 text-muted-foreground">
                            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p className="text-lg font-medium">No documents found</p>
                            <p className="text-sm">Try adjusting your filters or search query</p>
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredDocuments.map((doc) => (
                          <TableRow key={doc.id} className="hover:bg-accent/50">
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <FileText className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">{doc.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    Uploaded by {doc.uploadedBy}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="whitespace-nowrap">
                                {doc.department}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">{doc.category}</span>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">{doc.type}</Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {doc.size}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {doc.date}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              v{doc.version}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Results summary */}
                {filteredDocuments.length > 0 && (
                  <div className="mt-4 text-sm text-muted-foreground text-center">
                    Showing {filteredDocuments.length} of {allDocuments.length} documents
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documents;
