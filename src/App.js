import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/contact" component={Contact} />

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
