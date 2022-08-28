import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data"

function App() {
    const cardElements = cardData.map(data => (
      <Card 
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
      />
    ))


    return (
      <div className="container" >
        <Navbar />
        <Hero />
        {cardElements}
      </div>
  );
}

export default App;
