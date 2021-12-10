import React from "react";
import {
  Header,
  Home,
  SearchList,
  BreadCrumb,
  Item,
} from "./configuration/deliveryComponent";
import ApplicationProvider from "./context/contextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./common/styles/styles.scss";

function App() {
  return (
    <div>
      <ApplicationProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/item">
              <BreadCrumb />
              <SearchList />
            </Route>
            <Route path="/items/:id" exact>
              <BreadCrumb />
              <Item />
            </Route>
          </Switch>
        </Router>
      </ApplicationProvider>
    </div>
  );
}

export default App;
