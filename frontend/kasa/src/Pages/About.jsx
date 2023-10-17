import Header from "../Components/Header";
import Banner_about from "../Components/Banner_about";
import DatasAbout from "../about.json";
import Collapse from "../Components/Collapse";
import Footer from "../Components/Footer";
import "../Styles/About.css";


export default function About() {
    return (
      <div className="About">
        <Header />
        <Banner_about />
        <main className="about_main">
                {DatasAbout.map(data => (
                    <Collapse
                        key={data.id}
                        id={data.id}
                        title={data.aboutTitle}
                        content={data.aboutText}
                    />
                ))}
            </main>
        <Footer />
      </div>
    );
  }  