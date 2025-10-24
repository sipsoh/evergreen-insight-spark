import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Monitor, Mail, Phone, AlertCircle, ExternalLink, Laptop } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DepartmentIT = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <Navigation />
      
      {/* Department Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container px-6">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Department</Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Information Technology
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Providing technology support, infrastructure management, and digital solutions across all facilities.
          </p>
        </div>
      </div>

      {/* System Status Alert */}
      <div className="container px-6 py-6">
        <Alert className="border-green-500/50 bg-green-500/5">
          <AlertCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-sm">
            <strong>All Systems Operational:</strong> All core systems are running normally. 
            Next maintenance window: December 15, 10 PM - 2 AM EST.
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Content */}
      <div className="container px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* IT Support Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">IT Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">support@egmgmt.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Help Desk</p>
                    <p className="text-sm text-muted-foreground">(847) 894-3299</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full" size="sm">
                    Submit Support Ticket
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* IT Leadership */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">IT Leadership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Brad Schlageter", role: "Chief Information Officer", initials: "BS" },
                  { name: "David Martinez", role: "IT Director", initials: "DM" },
                  { name: "Lisa Wang", role: "Network Manager", initials: "LW" },
                ].map((member, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Avatar className="h-12 w-12 border-2 border-blue-600/20">
                      <AvatarFallback className="bg-blue-600/10 text-blue-600 font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{member.name}</h3>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Monitor className="h-4 w-4 mr-2" />
                  System Status Dashboard
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Laptop className="h-4 w-4 mr-2" />
                  Software Downloads
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  IT Policies
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Middle & Right Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* IT Updates */}
            <Card>
              <CardHeader>
                <CardTitle>IT News & Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "New Password Requirements Effective January 1",
                      date: "Dec 5, 2024",
                      content: "Enhanced security requirements will require stronger passwords and multi-factor authentication for all accounts.",
                      priority: "High",
                    },
                    {
                      title: "Microsoft 365 Updates Rolling Out",
                      date: "Nov 28, 2024",
                      content: "New features and improvements coming to Teams, Outlook, and SharePoint. Training sessions available.",
                      priority: "Medium",
                    },
                    {
                      title: "Network Upgrade Completed",
                      date: "Nov 20, 2024",
                      content: "Successfully completed network infrastructure upgrades across all facilities. Improved speed and reliability.",
                      priority: "Info",
                    },
                  ].map((news, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold">{news.title}</h3>
                        <Badge 
                          variant={news.priority === "High" ? "destructive" : news.priority === "Medium" ? "default" : "secondary"}
                          className="shrink-0 text-xs"
                        >
                          {news.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{news.content}</p>
                      <p className="text-xs text-muted-foreground">{news.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications & Tools */}
            <Card>
              <CardHeader>
                <CardTitle>Applications & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Microsoft 365", desc: "Email, Office apps, Teams" },
                    { name: "Yardi", desc: "Property management system" },
                    { name: "Lawson", desc: "Financial & HR system" },
                    { name: "SharePoint", desc: "Document management" },
                    { name: "Power BI", desc: "Analytics & reporting" },
                    { name: "VPN Access", desc: "Remote network connection" },
                  ].map((app, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <h3 className="font-semibold text-sm mb-1">{app.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{app.desc}</p>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Launch
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Knowledge Base & Training */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Knowledge Base
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Password Reset Guide",
                      "VPN Setup Instructions",
                      "Email Configuration",
                      "SharePoint User Guide",
                      "Mobile Device Setup",
                      "Security Best Practices",
                    ].map((article, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-between text-sm"
                        size="sm"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {article}
                        </span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { issue: "Password Reset", solution: "Use self-service portal or call help desk" },
                      { issue: "Email Not Working", solution: "Check internet connection, verify credentials" },
                      { issue: "Printer Issues", solution: "Restart printer, check network connection" },
                      { issue: "Software Installation", solution: "Submit ticket for admin access required" },
                    ].map((item, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-sm mb-1">{item.issue}</h4>
                        <p className="text-xs text-muted-foreground">{item.solution}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentIT;
