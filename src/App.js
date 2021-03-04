import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Route exact path="/" component={Home} />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
