import star from "../images/star.png";

export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location.toLowerCase() === "online") {
        badgeText = "Online"
    };
    
    return (
        <section className="Card">
            <img 
                src={require(`../images/${props.item.coverImg}`)}
                 alt=""
                className="card--photo" />
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className="card--stats" >
                <img 
                    src={star} 
                    alt="star"
                    className="card--star" />
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount}) • </span>
                    <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><strong>From ${props.item.price}</strong> / person</p>
        </section>
    )
}