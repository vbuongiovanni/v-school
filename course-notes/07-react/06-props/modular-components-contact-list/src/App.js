import './style.css';
import Contact from "./components/Contact"

// How can we parameterize React Components? Add properties to the <React /> component call!
// these properties are then passed to the first parameter defined in the Contact.JS function.

export default function App() {
  return (
    <div className="contacts">
      <Contact 
          img="mr-whiskerson.png"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"/>
      <Contact 
          img="fluffykins.png"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"/>
      <Contact 
          img="felix.png"
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"/>
      <Contact 
          img="pumpkin.png"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"/>
    </div>
  );
}

