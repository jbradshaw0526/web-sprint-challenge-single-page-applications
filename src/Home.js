import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="homePage">
           <nav>
             <h1>Home to the famously bad Goblin Pizza</h1>
             <img src="https://cdnb.artstation.com/p/assets/images/images/008/225/463/large/alan-campos-cooky-06.jpg?1511305209" />
             <h1>the mystery meat pizza really is a mystery here no one knows</h1>
             <img src="https://i.redd.it/50587buym9241.jpg" />
             
             <Link to="/pizza"><p><button id="order-pizza">Order Pizza!</button></p></Link>

           </nav>

       </div>

          );

       }

       export default Home