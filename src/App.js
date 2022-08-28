import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data"
import data from './data';

function App() {
    const cardElements = cardData.map(item => (
      <Card
        item={item}
      />
    ))

    return (
      <div className="container" >
        <Navbar />
        <Hero />
        <section className='cards--list'>
          {cardElements}
        </section>
      </div>
  );
}

export default App;
