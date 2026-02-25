import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import Process from "./pages/Process";
import BookCall from "./pages/BookCall";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Router = import.meta.env.VITE_V0 === "true" ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/process" element={<Process />} />
          <Route path="/book" element={<BookCall />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;