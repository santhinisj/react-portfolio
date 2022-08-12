import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Cover from "./components/cover";
import React from "react";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Cover />
      <Skills />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
