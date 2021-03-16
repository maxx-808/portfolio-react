import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={ProjectPage} />
        <br />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
