import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FacilityDetails from "./pages/FacilityDetails";
import FacilityBath from "./pages/FacilityBath";
import FacilityTampa from "./pages/FacilityTampa";
import AllFacilities from "./pages/AllFacilities";
import DepartmentHR from "./pages/DepartmentHR";
import DepartmentIT from "./pages/DepartmentIT";
import DepartmentHealth from "./pages/DepartmentHealth";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import Documents from "./pages/Documents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facilities" element={<AllFacilities />} />
          <Route path="/facility/annandale" element={<FacilityDetails />} />
          <Route path="/facility/bath" element={<FacilityBath />} />
          <Route path="/facility/tampa" element={<FacilityTampa />} />
          <Route path="/departments/hr" element={<DepartmentHR />} />
          <Route path="/departments/it" element={<DepartmentIT />} />
          <Route path="/departments/health" element={<DepartmentHealth />} />
          <Route path="/employees" element={<EmployeeDirectory />} />
          <Route path="/documents" element={<Documents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
