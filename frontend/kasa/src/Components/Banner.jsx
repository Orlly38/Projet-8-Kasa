import "../Styles/Banner.css"
import BannerHome from "../Images/banner_home.png";

export default function Banner() {
    return (
       <div className="Banner_home">
            <div className="img_container">
                <img className="img_banner_home" src={BannerHome} alt="Payage1" />
                <p className="text_banner_home">Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
} 