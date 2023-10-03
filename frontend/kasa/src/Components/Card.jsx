import "../Styles/Card.css"


import { Link } from "react-router-dom";
export default function Card({ id, title, cover }) {
    return (
         <div className="cards">
        <Link to={`../../backend/data/${id}`} className="card">
            <img className="card__img" src={cover} alt={title} />
            <div className="card__overlay"></div>
            <h2 className="card__title">{title}</h2>
        </Link>
        </div>
    )
}