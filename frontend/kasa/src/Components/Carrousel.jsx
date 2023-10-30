import "../Styles/Carrousel.css";
import arrowPrev from "../Images/arrow-prev.png";
import arrowNext from "../Images/arrow-next.png";
import { useState } from "react";

export function calculatePageNumber (currentPage, increment, pictureSize) {
    if(currentPage === 0 && increment ===-1){
        return pictureSize-1; 
    }
    if(currentPage === pictureSize-1 && increment ===1){
        return 0; 
    }
    return currentPage + increment;
}

export default function Carrousel({ pictures, title }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex(calculatePageNumber(currentIndex,-1,pictures.length))
    }

    const nextSlide = () => {
        setCurrentIndex(calculatePageNumber(currentIndex,1, pictures.length))
    }



    const slideNumbering = () => {
        if (pictures.length > 1) {
            return `${currentIndex + 1}/${pictures.length}`;
        }
        return "";
    }

    return (
        <div className="carrousel">
            <img
                className="carrousel_img"
                src={pictures[currentIndex]}
                alt={title}
            />
            <img
                className={pictures.length <= 1 ? 'carrousel_icon--hidden' : 'carrousel_icon carrousel_icon_prev'}
                src={arrowPrev}
                alt="show previous"
                onClick={prevSlide}
            />
            <img
                className={pictures.length <= 1 ? 'carrousel_icon--hidden' : 'carrousel_icon carrousel_icon_next'}
                src={arrowNext}
                alt="show next"
                onClick={nextSlide}
            />
            <span
                className="carrousel_slideNumbering">
                {slideNumbering()}
            </span>
        </div>
    )
}

 