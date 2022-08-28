import star from "../images/star.png";

export default function Card(props) {
    return (
        <section className="Card">
            <div className="card--photoSection">
                <img 
                    src={require(`../images/${props.img}`)}
                    alt=""
                    className="card--photo" />
                <div className="card--info">SOLD OUT</div>
            </div>
            <div className="card--stats" >
                <img 
                    src={star} 
                    alt="star"
                    className="card--star" />
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong> / person</p>
        </section>
    )
}