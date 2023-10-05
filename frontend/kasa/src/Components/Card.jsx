import "../Styles/Card.css"
import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
    return (
         <div className="cards">
        <Link to={`../../src/data/${id}`} className="card">
            <img className="card_img" src={cover} alt={title} />
            <div className="card_overlay"></div>
            <h2 className="card_title">{title}</h2>
        </Link>
        </div>
    )
}