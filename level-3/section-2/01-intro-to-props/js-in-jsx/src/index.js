import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// Project: How do we insert JS inside JSX? use curly braces of course!

function App() {
  const firstName = "Joe";
  const lastName = "Shmoe";
  return (
    <h1>Hello, {firstName} {lastName}!</h1>
  )
}

// all functions work when placed within braces. In practice, this is similar to using `r r_code_here` in an rmarkdown file

function PrintTime() {
  const date = new Date();
  let minutes = new String(date.getMinutes());
  let seconds = new String(date.getSeconds());
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  seconds = seconds.length === 1 ? "0" + seconds : seconds;
  let minutesSeconds = `${minutes}:${seconds}`

  const hours = date.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "morning";
  } else if (hours >= 12 && hours <= 17) {
    greeting = "afternoon";
  } else {
    greeting = "evening";
  }

  
  return (
    <div>
        <h1>The day is {date.getDay()}/{date.getMonth()}/{date.getFullYear()}</h1>
        <h1>The current time is {date.getHours()}:{minutesSeconds}</h1>
        <h1>Good {greeting}!</h1>
    </div>
    
  )
}
// 
// < App />
ReactDOM.render(
  <PrintTime />,
   document.getElementById('root')
  
  
)
