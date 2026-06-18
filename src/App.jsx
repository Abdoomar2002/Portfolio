import React from "react";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-primary/30">
      <Background />
      <ScrollProgress />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
