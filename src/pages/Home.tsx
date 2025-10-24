import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { QuickLinks } from "@/components/QuickLinks";
import { NewsUpdates } from "@/components/NewsUpdates";
import { EmployeeDirectory } from "@/components/EmployeeDirectory";
import { FacilityDirectory } from "@/components/FacilityDirectory";
import { DepartmentDirectory } from "@/components/DepartmentDirectory";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={heroBanner} 
          alt="Evergreen Management Communities" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-6">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to Evergreen Management
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Your central hub for news, resources, and collaboration across all our communities.
            </p>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="container px-6 py-6">
        <Alert className="border-primary/50 bg-primary/5">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm">
            <strong>Important:</strong> Annual compliance training due by December 31st. 
            Please complete all required modules in the Learning Management System.
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Content */}
      <div className="container px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <NewsUpdates />
            <QuickLinks />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <DepartmentDirectory />
            <EmployeeDirectory />
            <FacilityDirectory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
