import React from "react";
import { Route, useLocation } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Home from "../../pages/Home";

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/something">
        <h1 style={{ background: "blue" }}>Something</h1>
      </Route>
    </AnimatedSwitch>
  );
};

export default Routes;
