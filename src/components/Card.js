import star from "../images/star.png";

export default function Card(props) {
    return (
        <section className="Card">
            <img 
                src={require(`../images/${props.img}`)}
                 alt=""
                className="card--photo" />
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
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