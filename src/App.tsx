import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import Solutions from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CasesPage from "./pages/Cases";
import AboutUsPage from "./pages/About";
import PrivacyPolicyPage from "./pages/Privacy";
import TermsOfUsePage from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/servicos" element={<Solutions />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre-nos" element={<AboutUsPage />} />
          <Route path="/privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos" element={<TermsOfUsePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;