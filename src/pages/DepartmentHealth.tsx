import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Phone, 
  Globe, 
  Heart, 
  BookOpen, 
  Shield, 
  Lightbulb, 
  Target, 
  Users, 
  ExternalLink,
  Megaphone,
  ClipboardList,
  Mail
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";

const quickLinks = [
  { name: "Yardi One", icon: Globe },
  { name: "CBIZ", icon: Globe },
  { name: "PharMerica ViewMasterRx", icon: Globe },
  { name: "Safely You Login", icon: Globe },
  { name: "Yardi Support Ticket", icon: Globe },
  { name: "Concur Travel and T&E", icon: Globe },
  { name: "Relias", icon: Globe },
  { name: "The Image Group", icon: Globe },
  { name: "DSSI", icon: Globe },
];

const hubTiles = [
  {
    title: "Manuals, Forms, and Department Hubs",
    icon: BookOpen,
    gradient: "from-emerald-600 to-emerald-800",
    description: "Access all department manuals and forms"
  },
  {
    title: "Regulatory Support",
    icon: Shield,
    gradient: "from-rose-600 to-rose-800",
    description: "Compliance and regulatory resources"
  },
  {
    title: "Core Standards",
    icon: Lightbulb,
    gradient: "from-amber-500 to-amber-700",
    description: "Quality standards and best practices"
  },
  {
    title: "Divisional Initiatives",
    icon: Target,
    gradient: "from-blue-600 to-blue-800",
    description: "Current divisional projects and goals"
  },
];

const specialists = [
  { name: "Jennifer Adams", role: "Director of Health & Wellness", initials: "JA" },
  { name: "Robert Chen", role: "Clinical Operations Manager", initials: "RC" },
  { name: "Maria Santos", role: "Quality Assurance Lead", initials: "MS" },
  { name: "David Thompson", role: "Regulatory Compliance Officer", initials: "DT" },
];

const DepartmentHealth = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <Navigation />
      
      {/* Department Hero */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-700 py-16">
        <div className="container px-6">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Department</Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Health & Wellness
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Supporting clinical excellence, regulatory compliance, and wellness initiatives across all facilities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-6 py-8">
        {/* Hub Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {hubTiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <Card 
                key={index} 
                className={`bg-gradient-to-br ${tile.gradient} text-white border-0 cursor-pointer hover:scale-[1.02] transition-transform`}
              >
                <CardContent className="p-6 flex flex-col items-center text-center min-h-[160px] justify-center">
                  <Icon className="h-10 w-10 mb-3 opacity-90" />
                  <h3 className="font-semibold text-lg leading-tight">{tile.title}</h3>
                  <p className="text-sm text-white/80 mt-2">{tile.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-cyan-50 to-teal-50 border-teal-200">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                <Globe className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold">IT Infrastructure Transition Site</h3>
                <p className="text-sm text-muted-foreground">Access transition resources</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                <Phone className="h-4 w-4 mr-2" />
                Survey Hotline
              </Button>
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 w-full">
                <FileText className="h-4 w-4 mr-2" />
                Survey Hotline Instructions
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Health & Wellness Specialists</h3>
                <p className="text-sm text-muted-foreground">Meet our team</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - News & Updates */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick News */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-teal-600" />
                  Quick News and Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-teal-500/50 bg-teal-500/5">
                  <ClipboardList className="h-4 w-4 text-teal-600" />
                  <AlertDescription className="text-sm">
                    <strong className="text-teal-700">Records Requests:</strong> Check out our new Records Request process, the guideline is in the Health & Wellness Manual. For general requests of any sort or mentions of litigation or lawsuits, send an email to{" "}
                    <a href="mailto:litigation@egmgmt.com" className="text-teal-600 underline">litigation@egmgmt.com</a>.
                  </AlertDescription>
                </Alert>

                <div className="border-b pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">Medical Records Request Process Updated</h3>
                    <Badge variant="default" className="shrink-0 text-xs">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    For any medical records requests, complete the appropriate Medical Records Request Form in the Forms section of the HW Department site and email the completed form to litigation@egmgmt.com.
                  </p>
                  <p className="text-xs text-muted-foreground">Dec 1, 2024</p>
                </div>

                <div className="border-b pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">Annual Wellness Training Due</h3>
                    <Badge variant="secondary" className="shrink-0 text-xs">Reminder</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    All staff must complete annual wellness training modules by December 31st. Access training through Relias.
                  </p>
                  <p className="text-xs text-muted-foreground">Nov 15, 2024</p>
                </div>

                <div className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">New Infection Control Protocols</h3>
                    <Badge variant="secondary" className="shrink-0 text-xs">Policy Update</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Updated infection control protocols have been published. Review the new guidelines in the Core Standards section.
                  </p>
                  <p className="text-xs text-muted-foreground">Nov 8, 2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links - Your One Stop for Most Accessed Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {quickLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto py-3 justify-start gap-2 text-left"
                      >
                        <Icon className="h-4 w-4 text-teal-600 shrink-0" />
                        <span className="text-xs font-medium truncate">{link.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Health & Wellness Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-teal-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">hw@egmgmt.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-teal-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Department Line</p>
                    <p className="text-sm text-muted-foreground">(847) 894-3300</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Health & Wellness
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Specialists */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Health & Wellness Specialists</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {specialists.map((member, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Avatar className="h-12 w-12 border-2 border-teal-600/20">
                      <AvatarFallback className="bg-teal-600/10 text-teal-600 font-semibold">
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

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Heart className="h-4 w-4 mr-2 text-teal-600" />
                  Wellness Programs
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Shield className="h-4 w-4 mr-2 text-teal-600" />
                  Compliance Portal
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BookOpen className="h-4 w-4 mr-2 text-teal-600" />
                  Training Materials
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2 text-teal-600" />
                  Policy Documents
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHealth;
