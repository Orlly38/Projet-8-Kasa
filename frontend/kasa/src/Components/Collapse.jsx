import "../Styles/Collapse.css";
import arrow from "../Images/arrow.png";
import React, { useState, useRef, useEffect } from "react";

export default function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);
    const openContent = () => {
        setIsOpen(!isOpen);
    }

    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');

    useEffect(() => {
        if (isOpen) {
            setContentHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setContentHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className={`${isOpen ? 'collapse collapse_open' : 'collapse collapse_close'}`} style={{ marginBottom: isOpen ? contentHeight : '0px' }}>
            <div className="collapse_dropdown">
                <h3 className="collapse_title">
                    {title}
                    <img
                        className={`collapse_dropdown_arrow ${isOpen ? 'collapse_ouverture' : 'collapse_fermeture'}`}
                        onClick={openContent}
                        src={arrow}
                        alt="Voir le contenu"
                    />
                </h3>
                <div className={`${isOpen ? 'collapse_dropdown_txt--visible' : 'collapse_dropdown_txt--hidden'}`}
                    ref={contentRef}
                >
                    {content}
                </div>
            </div>
        </div >
    );
}