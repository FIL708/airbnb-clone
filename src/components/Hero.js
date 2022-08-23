import grid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="Hero">
            <img 
                src={grid} 
                alt="hero grid"
                loading="lazy"
                className="hero--grid" />
            <h1 className="hero--head">Online Experiences</h1>
            <p className="hero-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}