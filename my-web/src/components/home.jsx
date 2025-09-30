import React from "react";
import "../styles/home.css"
import {Typewriter} from "react-simple-typewriter"

function Home() {
  return (
    <>


      /* Start your code here */
      <section className="home-section">
        <div className="hero-content">

          <h1>
            Hello, I'm <span className="highlight"> Hala Obeid! </span>
          </h1>

          <h2>

          I'm {" "}
          <span className="typewriter">


          <Typewriter
            words={[
              "a Software Developer",
              "an AI Enthusiast",
              "a Problem Solver",
              "a CS Student"
            ]}
            loop 
            cursor
            typeSpeed={70} 
            deleteSpeed={50}
            delaySpeed={1500}
            cursorColor="blue"
            />

            

          </span>
         </h2>

         <p className="hero-desc">
          I love working on large languages and explore new ideas in tech and design.
         </p>
         <button
         className="view_button"
         onClick={() => document.getElementById("projects").scrollIntoView({behavior : "smooth"})}
         >
          view my Projects
          </button>
   
         </div>
      </section>
   </>
          );
}

export default Home;