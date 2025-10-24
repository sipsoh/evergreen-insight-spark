import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, Calendar, Mail, Phone, Download, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DepartmentHR = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <Navigation />
      
      {/* Department Hero */}
      <div className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="container px-6">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Department</Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Human Resources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Supporting our team members with benefits, policies, training, and workplace resources.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Department Team */}
          <div className="space-y-6">
            {/* Department Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Department Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">hr@egmgmt.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">(847) 894-3200</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HR Team */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">HR Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Sarah Johnson", role: "VP of Human Resources", initials: "SJ" },
                  { name: "Michael Chen", role: "HR Manager", initials: "MC" },
                  { name: "Emily Rodriguez", role: "Benefits Coordinator", initials: "ER" },
                ].map((member, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
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

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Submit Time Off Request
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Update Employee Info
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Benefits Enrollment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Middle & Right Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Department News */}
            <Card>
              <CardHeader>
                <CardTitle>Department News & Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "2025 Benefits Enrollment Now Open",
                      date: "Dec 1, 2024",
                      content: "Annual benefits enrollment period is now open through December 31st. Review your options and make selections in the benefits portal.",
                    },
                    {
                      title: "New Employee Wellness Program",
                      date: "Nov 15, 2024",
                      content: "We're excited to announce our enhanced wellness program with gym memberships, mental health resources, and wellness coaching.",
                    },
                    {
                      title: "Updated PTO Policy",
                      date: "Nov 1, 2024",
                      content: "Review the updated paid time off policy effective January 1, 2025. Key changes include rollover provisions and accrual rates.",
                    },
                  ].map((news, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold">{news.title}</h3>
                        <Badge variant="secondary" className="shrink-0 text-xs">
                          {news.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{news.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* HR Forms & Documents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    HR Forms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Time Off Request Form",
                      "Employee Information Update",
                      "Benefits Enrollment Form",
                      "Direct Deposit Form",
                      "Emergency Contact Form",
                      "Expense Reimbursement",
                    ].map((form, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-between text-sm"
                        size="sm"
                      >
                        <span className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          {form}
                        </span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Policies & Handbooks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Employee Handbook",
                      "Code of Conduct",
                      "Anti-Harassment Policy",
                      "FMLA Policy",
                      "Remote Work Policy",
                      "Professional Development",
                    ].map((policy, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-between text-sm"
                        size="sm"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {policy}
                        </span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits & Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Health Insurance", desc: "Medical, dental, vision coverage" },
                    { title: "Retirement Plans", desc: "401(k) with company match" },
                    { title: "Paid Time Off", desc: "Vacation, sick leave, holidays" },
                    { title: "Life Insurance", desc: "Company-paid and voluntary" },
                    { title: "Wellness Program", desc: "Gym memberships, coaching" },
                    { title: "Employee Assistance", desc: "Confidential support services" },
                  ].map((benefit, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                      <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming HR Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { event: "Benefits Information Session", date: "Dec 15, 2024", time: "2:00 PM EST" },
                    { event: "New Hire Orientation", date: "Jan 3, 2025", time: "9:00 AM EST" },
                    { event: "Leadership Training Workshop", date: "Jan 20, 2025", time: "10:00 AM EST" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <h3 className="font-semibold text-sm">{item.event}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.date} • {item.time}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Register
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHR;
