import "../Styles/Collapse.css";
import arrow from "../Images/arrow.png";
import React, { useState, useRef } from "react";

export default function Collapse ({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);
    const openContent = () => {
        setIsOpen(!isOpen);
    }

    const contentRef = useRef(null);

    return (
        <div className={`${isOpen ? 'collapse collapse_open' : 'collapse collapse_close'}` }>
            <div className="collapse_div">
                <h3 className="collapse_title">
                    {title}
                    <img
                        className={`collapse_arrow ${isOpen ? 'collapse_ouverture' : 'collapse_fermeture'}`}
                        onClick={openContent}
                        src={arrow}
                        alt="Voir le contenu"
                    />    
                </h3>
                <div className={`${isOpen ? 'collapse_txt--visible' : 'collapse_txt--hidden'}`}
                    ref={contentRef}>
                    {content}
                </div>
            </div>
        </div >
    );
}