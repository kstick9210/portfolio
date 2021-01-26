import React from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";

import Header from './components/Header/Header';
import Links from "./components/Links/Links";
import About from "./pages/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Switch>

        <Route exact path="/" render={() =>
          <>
            <Header />
            <p className="home-blurb">
              Full stack dev specializing in React apps.<br />
              Former project manager for the feds.<br />
              I can fix your CSS.
            </p>
            <Links />
            <div className="line"></div>
            <Projects />
            <div className="line"></div>
          </>
        }></Route>

        <Route exact path="/about" render={() =>
          <About />
        }></Route>

      </Switch>
      <Footer />
    </main>
  );
}

export default App;