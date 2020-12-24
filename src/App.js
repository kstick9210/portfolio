import React from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";

import Header from './components/Header/Header';
import Links from "./components/Links/Links";
import About from "./pages/About/About";
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <main>
      <Switch>

        <Route exact path="/" render={() =>
          <>
            <Header />
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
    </main>
  );
}

export default App;