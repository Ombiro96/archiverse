import React from "react";
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";

import Main from "./main";
import AboutUs from "./about-us";
import Projects from "./projects";
import Contacts from "./contact-us";

export default function App(){
    return(
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/projects" component={Projects} />
      {/* <Route component={NotFound} /> */}
    </Switch>
    )
}

