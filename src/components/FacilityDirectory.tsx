import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Search, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const facilities = [
  { name: "Arden Courts Annandale", city: "Annandale", state: "VA", region: "Region 3", path: "/facility/annandale" },
  { name: "Arden Courts Allentown", city: "Allentown", state: "PA", region: "Region 1", path: "/facility/allentown" },
  { name: "Arden Courts Bath", city: "Akron", state: "OH", region: "Region 1", path: "/facility/bath" },
  { name: "Arden Courts Tampa", city: "Tampa", state: "FL", region: "Region 2", path: "/facility/tampa" },
  { name: "Arden Courts Sterling Heights", city: "Sterling Heights", state: "MI", region: "Region 4", path: "/facility/sterling" },
  { name: "Arden Courts Westlake", city: "Westlake", state: "OH", region: "Region 1", path: "/facility/westlake" },
  { name: "Arden Courts Parma", city: "Parma", state: "OH", region: "Region 1", path: "/facility/parma" },
  { name: "Linden Village", city: "Lebanon", state: "PA", region: "Region 1", path: "/facility/linden" },
];

export const FacilityDirectory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Facility Directory</CardTitle>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search facilities..."
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{facility.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {facility.city}, {facility.state} • {facility.region}
                  </p>
                </div>
              </div>
              <Link to={facility.path}>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
