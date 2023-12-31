import Card from "../Components/Card"
import "../Styles/Gallery.css"
import datas from "../../src/logements.json";

export default function Gallery() {
    return (
        <main className="gallery">
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}