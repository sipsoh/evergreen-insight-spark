import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink, Calendar, FileText, CheckSquare } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import facilityImage from "@/assets/facility-bath.jpg";

const FacilityBath = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <Navigation />
      
      {/* Facility Hero */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={facilityImage} 
          alt="Arden Courts Bath" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 pb-8">
          <div className="container px-6">
            <Badge className="mb-4 bg-accent">Memory Care Community</Badge>
            <h1 className="text-5xl font-bold text-white mb-2">
              Arden Courts Bath
            </h1>
            <p className="text-xl text-white/90">
              Akron, Ohio • Region 1
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
                      171 N. Cleveland Massillon Road<br />
                      Akron, OH 44333
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">(330) 668-6889</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Fax</p>
                    <p className="text-sm text-muted-foreground">(330) 668-6242</p>
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
                    <dd className="font-medium">AKR004t0</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">PS BU</dt>
                    <dd className="font-medium">5358</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Lawson Facility</dt>
                    <dd className="font-medium">4504</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Year Built</dt>
                    <dd className="font-medium">1999</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Building SF</dt>
                    <dd className="font-medium">24,600</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Land Acres</dt>
                    <dd className="font-medium">1.07</dd>
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
                        LW
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">Executive Director</Badge>
                      <h3 className="font-semibold">Lauren Wells</h3>
                      <p className="text-sm text-muted-foreground mb-2">Started: April 25, 2022</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span className="text-muted-foreground">lwells@egmgmt.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="h-3 w-3" />
                          <span className="text-muted-foreground">(330) 668-6889</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        KY
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">Regional Support Coordinator</Badge>
                      <h3 className="font-semibold">Katherine Yeagler</h3>
                      <div className="space-y-1 mt-3">
                        <div className="flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span className="text-muted-foreground">kyeagler@egmgmt.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="h-3 w-3" />
                          <span className="text-muted-foreground">(330) 668-6890</span>
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
                    { task: "Monthly Safety Inspection Report", due: "Dec 19", priority: "High" },
                    { task: "Staff Training Completion", due: "Dec 21", priority: "Medium" },
                    { task: "Holiday Staffing Confirmation", due: "Dec 18", priority: "High" },
                    { task: "Resident Family Event Planning", due: "Dec 28", priority: "Medium" },
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
                      <h4 className="font-semibold text-sm mb-1">Winter Weather Protocol</h4>
                      <p className="text-xs text-muted-foreground">Review updated snow day procedures for December.</p>
                      <p className="text-xs text-muted-foreground mt-2">2 days ago</p>
                    </div>
                    <div className="pb-3 border-b last:border-0">
                      <h4 className="font-semibold text-sm mb-1">Family Holiday Party - Dec 23</h4>
                      <p className="text-xs text-muted-foreground">Annual holiday celebration at 2:00 PM.</p>
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

export default FacilityBath;
