import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar } from "lucide-react";

const updates = [
  {
    title: "Q4 Performance Update",
    category: "Corporate News",
    date: "2 days ago",
    excerpt: "Exceptional results across all regions. Occupancy rates reached 94%.",
  },
  {
    title: "New Employee Wellness Program Launched",
    category: "HR Announcement",
    date: "1 week ago",
    excerpt: "Enhanced benefits package now available to all team members.",
  },
  {
    title: "Safety Training Schedule Released",
    category: "Operations",
    date: "1 week ago",
    excerpt: "Mandatory training sessions scheduled for all facility staff.",
  },
  {
    title: "IT System Maintenance - Dec 15",
    category: "IT Update",
    date: "2 weeks ago",
    excerpt: "Scheduled maintenance window: 10 PM - 2 AM EST.",
  },
];

export const NewsUpdates = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div
              key={index}
              className="border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="font-semibold text-sm">{update.title}</h3>
                <Badge variant="secondary" className="shrink-0 text-xs">
                  {update.category}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {update.excerpt}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {update.date}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
