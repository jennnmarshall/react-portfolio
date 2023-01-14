import React from "react";
// import "./styles/styles.css";
import Subheader from "./components/Subheader";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Subheader />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
