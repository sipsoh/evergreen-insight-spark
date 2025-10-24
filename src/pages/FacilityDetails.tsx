import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink, Building, Calendar, FileText, CheckSquare } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import facilityImage from "@/assets/facility-annandale.jpg";

const FacilityDetails = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <Navigation />
      
      {/* Facility Hero */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={facilityImage} 
          alt="Arden Courts Annandale" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 pb-8">
          <div className="container px-6">
            <Badge className="mb-4 bg-accent">Memory Care Community</Badge>
            <h1 className="text-5xl font-bold text-white mb-2">
              Arden Courts Annandale
            </h1>
            <p className="text-xl text-white/90">
              Annandale, Virginia • Region 3
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Facility Info */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Facility Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Address</p>
                    <p className="text-sm text-muted-foreground">
                      3310 Gallows Road<br />
                      Annandale, VA 22003
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">(703) 555-0190</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Master Data Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Master Data</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Yardi ID</dt>
                    <dd className="font-medium">ADL000t0</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">PS BU</dt>
                    <dd className="font-medium">670</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Lawson Facility</dt>
                    <dd className="font-medium">4752</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Year Built</dt>
                    <dd className="font-medium">2002</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Building SF</dt>
                    <dd className="font-medium">27,127</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Land Acres</dt>
                    <dd className="font-medium">3.28</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Personnel */}
            <Card>
              <CardHeader>
                <CardTitle>Key Personnel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        SG
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">Executive Director</Badge>
                      <h3 className="font-semibold">Sabrina Richmond</h3>
                      <p className="text-sm text-muted-foreground mb-2">Started: April 14, 2025</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span className="text-muted-foreground">srichmond@egmgmt.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="h-3 w-3" />
                          <span className="text-muted-foreground">(703) 555-0190</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        OG
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">Regional Support Coordinator</Badge>
                      <h3 className="font-semibold">Olena Georges</h3>
                      <div className="space-y-1 mt-3">
                        <div className="flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span className="text-muted-foreground">ogeorges@egmgmt.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="h-3 w-3" />
                          <span className="text-muted-foreground">(703) 555-0191</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* In My Court Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-primary" />
                  In My Court - Action Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { task: "Complete Q4 Budget Review", due: "Dec 20", priority: "High" },
                    { task: "Submit Maintenance Work Orders", due: "Dec 18", priority: "Medium" },
                    { task: "Review Staffing Schedule", due: "Dec 22", priority: "Medium" },
                    { task: "Approve Time & Attendance Records", due: "Dec 15", priority: "High" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded border-2 border-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{item.task}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Calendar className="h-3 w-3" />
                            Due: {item.due}
                          </p>
                        </div>
                      </div>
                      <Badge 
                        variant={item.priority === "High" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {item.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents & Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-primary" />
                    Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Facility Policies",
                      "Emergency Procedures",
                      "Staff Handbook",
                      "Compliance Documents",
                    ].map((doc, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start text-sm"
                        size="sm"
                      >
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        {doc}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="pb-3 border-b last:border-0">
                      <h4 className="font-semibold text-sm mb-1">Holiday Schedule Posted</h4>
                      <p className="text-xs text-muted-foreground">Review the updated holiday coverage schedule.</p>
                      <p className="text-xs text-muted-foreground mt-2">3 days ago</p>
                    </div>
                    <div className="pb-3 border-b last:border-0">
                      <h4 className="font-semibold text-sm mb-1">Fire Drill - Dec 20</h4>
                      <p className="text-xs text-muted-foreground">Scheduled fire drill at 10:00 AM.</p>
                      <p className="text-xs text-muted-foreground mt-2">1 week ago</p>
                    </div>
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

export default FacilityDetails;
