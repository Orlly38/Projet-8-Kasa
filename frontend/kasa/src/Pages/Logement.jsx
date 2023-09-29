import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image_logement from "../Images/image_logement.jpeg";

export default function Logement() {
    return (
      <div className="logement">
        <Header />
        <img className="img_logement" src={Image_logement} alt="Payage1" />
        <Footer />
      </div>
    );
  } 