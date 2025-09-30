import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CLERK_PUBLISHABLE_KEY } from "./lib/clerk";

const queryClient = new QueryClient();

const App = () => (
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sign-in/*" element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
                <SignIn routing="path" path="/sign-in" />
              </div>
            } />
            <Route path="/sign-up/*" element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
                <SignUp routing="path" path="/sign-up" />
              </div>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ClerkProvider>
);

export default App;
