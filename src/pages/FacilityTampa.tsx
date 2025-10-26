import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink, FileText } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GoogleMap } from "@/components/GoogleMap";
import facilityImage from "@/assets/facility-tampa.jpg";

const FacilityTampa = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <Navigation />
      
      {/* Facility Hero */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={facilityImage} 
          alt="Arden Courts Tampa" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 pb-8">
          <div className="container px-6">
            <Badge className="mb-4 bg-accent">Memory Care Community</Badge>
            <h1 className="text-5xl font-bold text-white mb-2">
              Arden Courts Tampa
            </h1>
            <p className="text-xl text-white/90">
              Tampa, Florida • Region 2
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
                      14950 Casey Road<br />
                      Tampa, FL 33624
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">(813) 963-6100</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Fax</p>
                    <p className="text-sm text-muted-foreground">(813) 908-6200</p>
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
                    <dd className="font-medium">TMP005t0</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">PS BU</dt>
                    <dd className="font-medium">5639</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Lawson Facility</dt>
                    <dd className="font-medium">4060</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Year Built</dt>
                    <dd className="font-medium">1999</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Building SF</dt>
                    <dd className="font-medium">26,400</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Land Acres</dt>
                    <dd className="font-medium">5.02</dd>
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
                        DW
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">Executive Director</Badge>
                      <h3 className="font-semibold">Denise Wilim</h3>
                      <div className="space-y-1 mt-3">
                        <div className="flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span className="text-muted-foreground">dwilim@egmgmt.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="h-3 w-3" />
                          <span className="text-muted-foreground">(813) 963-6100</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        AH
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">Regional Support Coordinator</Badge>
                      <h3 className="font-semibold">Amanda Hill</h3>
                      <div className="space-y-1 mt-3">
                        <div className="flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span className="text-muted-foreground">ahill@egmgmt.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="h-3 w-3" />
                          <span className="text-muted-foreground">(813) 963-6101</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        TJ
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">Memory Care Advisor</Badge>
                      <h3 className="font-semibold">Teresa Jackson</h3>
                      <div className="space-y-1 mt-3">
                        <div className="flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span className="text-muted-foreground">tjackson@egmgmt.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="h-3 w-3" />
                          <span className="text-muted-foreground">(813) 963-6102</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <GoogleMap address="14950 Casey Road, Tampa, FL 33624" />

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
                      <h4 className="font-semibold text-sm mb-1">New Resident Welcome Event</h4>
                      <p className="text-xs text-muted-foreground">Join us for a welcome gathering this Friday at 3 PM.</p>
                      <p className="text-xs text-muted-foreground mt-2">4 days ago</p>
                    </div>
                    <div className="pb-3 border-b last:border-0">
                      <h4 className="font-semibold text-sm mb-1">Staff Training - Jan 5</h4>
                      <p className="text-xs text-muted-foreground">Mandatory dementia care training session.</p>
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

export default FacilityTampa;
