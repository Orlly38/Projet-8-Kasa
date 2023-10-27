import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Error.css"

export default function Error() {
    return (
      <div className="error">
        <Header />
        <div className="error_container">
          <h1 className="error_404"> 404 </h1>
          <div className="error_oups">
            Oups! La page que vous demandez n'existe pas.
          </div>
        </div>
          <a href="/accueil" className="error_return">Retourner à la page d'accueil</a>
        <Footer />
      </div>
    );
  } 