import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductDemo from "@/components/ProductDemo";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto">
        <HeroSection />
        <ProductDemo />
        {/* Any additional sections would be included here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
