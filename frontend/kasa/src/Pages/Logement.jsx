import Header from "../Components/Header";
import Carrousel from "../Components/Carrousel"
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import datas from "../../src/logements.json";
import starActive from "../Images/star-active.png";
import starInactive from "../Images/star-inactive.png";
import Collapse from "../Components/Collapse";
import "../Styles/Logements.css"

export default function Logement() {

  const [filteredDatas, setFilteredDatas] = useState([]);

  const { id } = useParams(); 
  //useParams permet d'obtenir l'ID de la page à partir de l'URL

  useEffect(() => {
      const filteredData = datas.filter((data) => data.id === id);
      setFilteredDatas(filteredData)
  }, [id]); 
    // useEffect permet, ici, de filtrer les données du fichier JSON pour ne conserver que l'ID de la page

  const correctId = datas.find((data) => data.id === id);

  if (!correctId) {
      return <Navigate to="/pageNotFound" />;
  }

  return (
      <div className="logements">
          <Header />

          {filteredDatas.map(data => {

              const fullName = data.host.name;
              const [firstName, lastName] = fullName.split(' '); 
            // Split permet,ici, de séparer le prénom et le nom de l'hôte

              const rating = data.rating;
              const stars = [];
              for (let i = 0; i < rating; i++) {
                  stars.push(<img key={i} src={starActive} alt="filled star" />);
              }
              for (let i = rating; i < 5; i++) {
                  stars.push(<img key={i} src={starInactive} alt="empty star" />);
              }

              const tags = data.tags;
              const tagList = tags.map(tag => (
                  <span key={tag}>{tag}</span>
              ))

              const equipments = data.equipments;
              const equipmentList = equipments.map(equipment => (
                  <span key={equipment}>{equipment}<br /></span>
              ))

              return (
                  <main key={data.id} className="logement_main">
                      <Carrousel
                          id={data.id}
                          title={data.title}
                          pictures={data.pictures}
                      />
                    <div className="logement_infos">
                        <div className="logement_title_tag">
                            <div className="logement_main_title">
                                <h1>{data.title}</h1>
                                <p>{data.location}</p>
                            </div>
                            <div className="logement_main_tags">
                                {tagList}
                            </div>
                        </div>
                        <div className="logement_main_host_rating">
                            <div className="logement_main_host">
                                <div><p>{firstName}<br />{lastName}</p></div>
                                <img
                                    className="logement_main_host_img"
                                    src={data.host.picture}
                                    alt={fullName}
                                />
                            </div>
                            <div className="logement_host_rating">
                                {stars} 
                            </div>
                        </div>
                      </div>
                      <div className="logement_main_collapse">
                          <div className="logement_main_collapse_details">
                              <Collapse
                                  title="Description"
                                  content={data.description}
                              />
                          </div>
                          <div className="logement_main_collapse_details">
                              <Collapse
                                  title="Équipements"
                                  content={equipmentList}
                              />
                          </div>
                      </div>
                  </main>
              )
          })}
          <Footer />
      </div>
  )
}









//export default function Logement() {
//    return (
//      <div className="logement">
//        <Header />
//        <Carrousel />
//        <Footer />
//      </div>
//    );
//  }  