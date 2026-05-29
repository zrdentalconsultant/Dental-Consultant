import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// Components
import ScrollToTop from "@/components/home/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <Router>
          {/* Scroll to top on route change */}
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;