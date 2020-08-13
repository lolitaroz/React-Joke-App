import React from "react"

function Joke(props) {
    console.log(props.question)
    return (
        <div>
            <h3>Question: {props.question}</h3>
            <h3>Answer: {props.answer}</h3>
            <img src={props.imgSrc}/>
        </div>
    )
}

export default Joke
