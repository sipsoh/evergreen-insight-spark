import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const facilities = [
  {
    name: "Arden Courts Annandale",
    address: "4237 Sleepy Hollow Rd, Annandale, VA 22003",
    region: "Region 1",
    execDirector: "Angela Franciosa",
    rdo: "Derek Loyd",
    phone: "(703) 354-4300",
    path: "/facility/annandale"
  },
  {
    name: "Arden Courts Bath",
    address: "3590 S Cleveland Massillon Rd, Akron, OH 44333",
    region: "Region 2",
    execDirector: "David Martinez",
    rdo: "Andrew Defosses",
    phone: "(330) 666-2700",
    path: "/facility/bath"
  },
  {
    name: "Arden Courts Tampa",
    address: "11330 N 56th St, Temple Terrace, FL 33617",
    region: "Region 2",
    execDirector: "Jennifer Lee",
    rdo: "Andrew Defosses",
    phone: "(813) 973-2000",
    path: "/facility/tampa"
  },
  {
    name: "Arden Courts Allentown",
    address: "4350 Green Pond Rd, Bethlehem, PA 18020",
    region: "Region 1",
    execDirector: "Angela Franciosa",
    rdo: "Derek Loyd",
    phone: "(610) 366-9010",
    path: "/facility/allentown"
  },
  {
    name: "Arden Courts Sterling Heights",
    address: "35800 Schoenherr Rd, Sterling Heights, MI 48312",
    region: "Region 2",
    execDirector: "Robert Williams",
    rdo: "Andrew Defosses",
    phone: "(586) 939-2991",
    path: "/facility/sterling-heights"
  },
  {
    name: "Arden Courts Westlake",
    address: "29855 Detroit Rd, Westlake, OH 44145",
    region: "Region 2",
    execDirector: "Susan Thompson",
    rdo: "Andrew Defosses",
    phone: "(440) 835-9101",
    path: "/facility/westlake"
  },
  {
    name: "Arden Courts Parma",
    address: "6935 Ridge Rd, Parma, OH 44129",
    region: "Region 2",
    execDirector: "Michael Anderson",
    rdo: "Andrew Defosses",
    phone: "(440) 845-0300",
    path: "/facility/parma"
  },
  {
    name: "Arden Courts Linden Village",
    address: "12301 Academy Rd, Philadelphia, PA 19154",
    region: "Region 1",
    execDirector: "Patricia Davis",
    rdo: "Derek Loyd",
    phone: "(215) 612-3600",
    path: "/facility/linden-village"
  }
];

const AllFacilities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFacilities = facilities.filter(facility => 
    facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.execDirector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">All Facilities</h1>
          <p className="text-muted-foreground">Browse and search all Arden Courts memory care facilities</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, location, region, or executive director..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredFacilities.length > 0 ? (
            filteredFacilities.map((facility) => (
              <Link key={facility.path} to={facility.path}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{facility.name}</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{facility.address}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{facility.phone}</span>
                      </div>
                      
                      <div className="pt-2 border-t mt-3">
                        <div className="flex items-center gap-2 mb-1">
                          <User className="h-4 w-4 text-primary" />
                          <span className="font-medium">Executive Director:</span>
                        </div>
                        <span className="text-muted-foreground ml-6">{facility.execDirector}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        <span className="font-medium">RDO:</span>
                        <span className="text-muted-foreground">{facility.rdo}</span>
                      </div>
                      
                      <div className="pt-2">
                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          {facility.region}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-muted-foreground">
              No facilities found matching your search.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AllFacilities;
