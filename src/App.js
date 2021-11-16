import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Views
import Home from "./Views/Home/Home";
import Followers from "./Views/Followers/Followers";

// Layout
import MainLayouts from "./Layouts/MainLayouts";

//Styles
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayouts>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/followers/:user">
            <Followers />
          </Route>
        </MainLayouts>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
