import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import ContactUs from "@/pages/ContactUs";
import FAQ from "@/pages/FAQ";
import NotFound from "@/pages/not-found";
import Androidapp from "@/pages/Android-development";
import DigitalMarketing from "@/pages/DigitalMarketing";
import UiUxDesign from "@/pages/UiUxDesign";
import SeoPage from "@/pages/Seo";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/faq" component={FAQ} />
      <Route path="/Androidapp" component={Androidapp} />
      <Route path="/DigitalMarketing" component={DigitalMarketing} />
      <Route path="/UiUxDesign" component={UiUxDesign} />
      <Route path="/seo" component={SeoPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
        
    </Switch>
  );
}

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="dark">
            <Toaster />
            <Router />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
