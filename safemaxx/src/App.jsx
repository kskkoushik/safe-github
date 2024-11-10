import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AdminDashboard from "./components/AdminDashboard";
import AppointmentForm from "./components/AppointmenForm";
import QueryManagement from "./components/QueryManagement";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ClientTestimonials from "./components/ClientTestimonials";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <WhyChooseUs />
                <ClientTestimonials />
                <ContactSection />
                <QueryManagement />
                <FooterSection />
              </main>
            }
          />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/schedule" element={<AppointmentForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
