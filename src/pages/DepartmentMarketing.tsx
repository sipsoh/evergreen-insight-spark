import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Mail, 
  Phone, 
  Megaphone,
  Palette,
  Camera,
  Globe,
  PenTool,
  BarChart3,
  Image,
  Video,
  Share2,
  ExternalLink,
  Download,
  Calendar
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";

const hubTiles = [
  {
    title: "Brand Guidelines & Assets",
    icon: Palette,
    gradient: "from-pink-600 to-pink-800",
    description: "Logos, colors, fonts, and brand standards"
  },
  {
    title: "Marketing Templates",
    icon: PenTool,
    gradient: "from-purple-600 to-purple-800",
    description: "Flyers, presentations, and collateral"
  },
  {
    title: "Photo & Video Library",
    icon: Camera,
    gradient: "from-indigo-600 to-indigo-800",
    description: "Approved imagery and video content"
  },
  {
    title: "Social Media Resources",
    icon: Share2,
    gradient: "from-blue-600 to-blue-800",
    description: "Social guidelines and content calendar"
  },
  {
    title: "Website & Digital",
    icon: Globe,
    gradient: "from-teal-600 to-teal-800",
    description: "Web updates and digital presence"
  },
  {
    title: "Analytics & Reports",
    icon: BarChart3,
    gradient: "from-orange-600 to-orange-800",
    description: "Marketing performance dashboards"
  },
];

const quickLinks = [
  { name: "Brand Portal", icon: Palette },
  { name: "Image Request Form", icon: Image },
  { name: "Canva Templates", icon: PenTool },
  { name: "Social Media Calendar", icon: Calendar },
  { name: "Press Kit", icon: FileText },
  { name: "Video Library", icon: Video },
  { name: "Marketing Request Form", icon: Megaphone },
  { name: "The Image Group", icon: Globe },
];

const teamMembers = [
  { name: "Dawn Melanson", role: "Marketing", initials: "DM", email: "DMelanson@egmgmt.com" },
  { name: "Cassandra Love", role: "Marketing", initials: "CL", email: "clove@egmgmt.com" },
];

const DepartmentMarketing = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <Navigation />
      
      {/* Department Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 py-16">
        <div className="container px-6">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Department</Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Marketing
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Building brand awareness, creating compelling content, and driving engagement across all Evergreen communities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-6 py-8">
        {/* Hub Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <Button className="bg-pink-600 hover:bg-pink-700 w-full">
                <Megaphone className="h-4 w-4 mr-2" />
                Submit Marketing Request
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 w-full">
                <Image className="h-4 w-4 mr-2" />
                Request Photography/Video
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="p-6">
              <Alert className="border-purple-500/50 bg-purple-500/5 mb-0">
                <Palette className="h-4 w-4 text-purple-600" />
                <AlertDescription className="text-sm">
                  <strong className="text-purple-700">Brand Consistency:</strong> Always use approved logos and brand colors. Download assets from the Brand Portal.
                </AlertDescription>
              </Alert>
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
                  <Megaphone className="h-5 w-5 text-pink-600" />
                  Marketing News & Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">New Brand Guidelines Released</h3>
                    <Badge variant="default" className="shrink-0 text-xs">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Updated brand guidelines are now available in the Brand Portal. Please review and ensure all materials align with the new standards.
                  </p>
                  <p className="text-xs text-muted-foreground">Dec 1, 2024</p>
                </div>

                <div className="border-b pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">2025 Marketing Calendar Available</h3>
                    <Badge variant="secondary" className="shrink-0 text-xs">Planning</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    The 2025 marketing calendar with key campaigns, events, and deadlines is now available. Review to align facility activities.
                  </p>
                  <p className="text-xs text-muted-foreground">Nov 20, 2024</p>
                </div>

                <div className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">Social Media Best Practices Updated</h3>
                    <Badge variant="secondary" className="shrink-0 text-xs">Guidelines</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    New social media guidelines are available covering content creation, posting schedules, and community engagement.
                  </p>
                  <p className="text-xs text-muted-foreground">Nov 10, 2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links - Marketing Resources</CardTitle>
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
                        <Icon className="h-4 w-4 text-pink-600 shrink-0" />
                        <span className="text-xs font-medium truncate">{link.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Collateral & Templates */}
            <Card>
              <CardHeader>
                <CardTitle>Marketing Collateral & Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-pink-600" />
                      Print Materials
                    </h4>
                    {[
                      "Brochure Templates",
                      "Flyer Templates",
                      "Business Cards",
                      "Letterhead",
                      "Signage Guidelines",
                    ].map((item, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-between text-sm"
                        size="sm"
                      >
                        <span className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          {item}
                        </span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </Button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-pink-600" />
                      Digital Assets
                    </h4>
                    {[
                      "Email Signatures",
                      "PowerPoint Templates",
                      "Social Media Graphics",
                      "Email Templates",
                      "Digital Ad Specs",
                    ].map((item, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-between text-sm"
                        size="sm"
                      >
                        <span className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          {item}
                        </span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Marketing Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-pink-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">marketing@egmgmt.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-pink-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Department Line</p>
                    <p className="text-sm text-muted-foreground">(847) 894-3350</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Marketing
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Marketing Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
              {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Avatar className="h-12 w-12 border-2 border-pink-600/20">
                      <AvatarFallback className="bg-pink-600/10 text-pink-600 font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{member.name}</h3>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Palette className="h-4 w-4 mr-2 text-pink-600" />
                  Brand Guidelines PDF
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Image className="h-4 w-4 mr-2 text-pink-600" />
                  Logo Downloads
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Camera className="h-4 w-4 mr-2 text-pink-600" />
                  Photo Request Form
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Megaphone className="h-4 w-4 mr-2 text-pink-600" />
                  PR & Media Contacts
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentMarketing;
