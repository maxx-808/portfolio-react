import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />

        <Route exact path="/" component={Home} />

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
