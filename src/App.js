import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import NotFound from "./components/pages/NotFound";
import Navigation from "./components/layout/Navigation";
import News from "./components/news/News";
import AI from "./components/ai/AI";
import Promotions from "./components/sale/Promotions";
import Home from "./components/Home";
import EditAI from "./components/ai/editAI";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
{/*           <Route exact path="/" component={Home} /> */}
          <Route exact path="/news" component={News} />
          <Route exact path="/promotions" component={Promotions} />

          <Route exact path="/AI" component={AI} />
          <Route exact path="/AI/edit/:id" component={EditAI} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
