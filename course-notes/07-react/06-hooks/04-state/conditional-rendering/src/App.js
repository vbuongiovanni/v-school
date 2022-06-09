import './style.css';
import Joke from "./component/Joke"
import jokesData from "./component/jokesData"

export default function App() {
  
  const jokeElements = jokesData.map(joke => {
    return (
      <Joke
        setup={joke.setup}
        punchLine={joke.punchLine}
        upVotes = {34}
        isOffensive = {false}
        isShown
      />
    )
  })
  
  return (
    <>
      {jokeElements}
    </>
  )
}

