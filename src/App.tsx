import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuditProvider } from "./context/AuditContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileCallBar } from "./components/MobileCallBar";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <AuditProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-ink transition-colors duration-200">
            <Header />
            <main className="flex-1 pb-16 lg:pb-0">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
            <MobileCallBar />
            <Toaster position="top-right" richColors />
          </div>
        </AuditProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
