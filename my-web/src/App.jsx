import React from "react";
import "./App.css"
import cardsData from "./assets/cardsData";

import Card from "./components/card";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
function App() {

  return (
    <>
    <Navbar/>
    <section></section>

      <Home/>

      <section id="projects">

      <h1> Projects</h1>
      <div className="projects">

        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
      </section>
      <Contact></Contact>

      /* Add components here */

    </>
  );

}

export default App