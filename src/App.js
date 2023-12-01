import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Analytics />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
