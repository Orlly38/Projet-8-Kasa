import Logo from "../Images/logo_kasa.svg";
import "../Styles/Header.css";

export default function Header() {
    return (
        <header className="header">
            <h1>
                <img className="header_logo" src={Logo} alt="Logo Kasa" />
            </h1>
            <div className="menu">
            <a href="/accueil" className="accueil">Accueil</a>
            <a href="/about" className="about">A propos</a>
            </div>
        </header>
    )
}