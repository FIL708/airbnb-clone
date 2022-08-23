import photo from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
    return (
        <section className="Card">
            <div className="card--photoSection">
                <img 
                    src={photo} 
                    alt="Katie Zaferes"
                    className="card--photo" />
                <div className="card--info">SOLD OUT</div>
            </div>
            <div className="card--stats" >
                <img 
                    src={star} 
                    alt="star"
                    className="card--star" />
                    <span>5.0</span>
                    <span className="gray">(6) • </span>
                    <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </section>
    )
}