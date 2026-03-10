import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import Process from "./pages/Process";
import BookCall from "./pages/BookCall";
import LogisticsAutomation from "./pages/industries/Logistics";
import RealEstateOperations from "./pages/industries/RealEstate";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

const TransitionWrapper = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/process" element={<Process />} />
          <Route path="/book" element={<BookCall />} />
          <Route path="/logistics-automation" element={<LogisticsAutomation />} />
          <Route path="/real-estate-operations" element={<RealEstateOperations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="noise-overlay" />
        <ScrollToTop />
        <Navbar />
        <main>
          <TransitionWrapper />
        </main>
        <Footer />
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
