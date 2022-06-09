import logo from './logo.svg';
import './style.css';
import Joke from "./component/Joke"
import jokesData from "./component/jokesData"

// but wait.. how do we pass data types that are NOT strings?
  // you can just wrap other datatypes in curly braces

// This includes arrays, meaning you can used array.map() to make code more readable and concise:
// for example:
/* 
let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
return (
  <>
    {colors.map(color => <h1>{color}</h1>)}
  </>
)
 */

export default function App() {
  
  const jokeElements = jokesData.map(joke => {
    return (
      <Joke
        setup={joke.setup}
        punchLine={joke.punchLine}
        upVotes = {34}
        isOffensive = {false}
      />
    )
  })
  
  return (
    <>
      {jokeElements}
    </>
  )
}


/*  - code coded version of Joke Components
<>
<Joke
    setup="I got my daughter a fridge for her birthday."
    punchLine="I can't wait to see her face light up when she opens it."
    upVotes = {34}
    isOffensive = {true}
/>
<Joke
    setup="How did the hacker escape the police?"
    punchLine="Ransomware"
    upVotes = {123}
    isOffensive = {false}
/>
<Joke
    setup="Why don't pirates travel on mountain roads?"
    punchLine="Scurvy."
    upVotes = {124}
    isOffensive = {false}
/>
<Joke
    setup="Why do bees stay in the hive in the winter?"
    punchLine="Swarm."
    upVotes = {42}
    isOffensive = {false}
/>
<Joke
    setup="What's the best thing about Switzerland?"
    punchLine="I don't know, but the flag is a big plus!"
    upVotes = {12}
    isOffensive = {false}
/>
<Joke
    punchLine="It’s hard to explain puns to kleptomaniacs because 
    they always take things literally."
    upVotes = {1023}
    isOffensive = {false}
/>
</>
 */