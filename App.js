import React from "react"

import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke
                question="What's the best thing about Switzerland?"
                answer="I don't know, but the flag is a big plus!"
                imgScr="./SwissFlag"
            />

            <Joke
                question="Did you hear about the mathematician who's afraid of negative numbers?"
                answer="He'll stop at nothing to avoid them!"
                imgScr="./NegNum"
            />

            <Joke
                question="Hear about the new restaurant called Karma?"
                answer="There's no menu: You get what you deserve."
                imgScr="./Karma"
            />

            <Joke
                question="Did you hear about the actor who fell through the floorboards?"
                answer="He was just going through a stage."
                imgScr="./Actor"
            />

            <Joke
                question="Did you hear about the claustrophobic astronaut?"
                answer="He just needed a little space."
                imgScr="./Astronaut"
            />

        </div>
    )
}

export default App
