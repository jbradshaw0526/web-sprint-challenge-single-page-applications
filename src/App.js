import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const App = () => {

  return (
<div className="header">
  <h1>Goblin Pizza</h1>
  <p>Pizza is made by a goblin so eat at your own risk</p>
  <nav>
  <Link to="/"><button id="home-button">Home</button></Link>
        <Link to="/pizza">
       <button id="order-pizza">Order Pizza!</button></Link>
       <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
    </nav>
    <Switch>
    <Route path="/pizza" component={Form} />
    <Route path="/" component={Home} />
    </Switch>
</div>

  );

};
export default App;
