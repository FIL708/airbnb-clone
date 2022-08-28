import star from "../images/star.png";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location.toLowerCase() === "online") {
        badgeText = "Online"
    };
    

    return (
        <section className="Card">
            <img 
                src={require(`../images/${props.img}`)}
                 alt=""
                className="card--photo" />
            {badgeText && <div className="card--badge">{badgeText}</div>}
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