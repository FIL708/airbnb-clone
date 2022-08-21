import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <header>
            <img 
                src={logo}
                alt="airbnb-logo"  
                className="navbar--logo"
                />
        </header>
    )
}