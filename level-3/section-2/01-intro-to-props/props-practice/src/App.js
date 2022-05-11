import logo from './logo.svg';
import './style.css';
import Joke from "./component/Joke"

export default function App() {
  return (
    <>
      <Joke
          setup="I got my daughter a fridge for her birthday."
          punchLine="I can't wait to see her face light up when she opens it."
      />
      <Joke
          setup="How did the hacker escape the police?"
          punchLine="How did the hacker escape the police?"
      />
      <Joke
          setup="Why don't pirates travel on mountain roads?"
          punchLine="Scurvy."
      />
      <Joke
          setup="Why do bees stay in the hive in the winter?"
          punchLine="Swarm."
      />
      <Joke
          setup="What's the best thing about Switzerland?"
          punchLine="I don't know, but the flag is a big plus!"
      />
      <Joke
          punchLine="It’s hard to explain puns to kleptomaniacs because 
          they always take things literally."
      />
      
    </>
  );
}
