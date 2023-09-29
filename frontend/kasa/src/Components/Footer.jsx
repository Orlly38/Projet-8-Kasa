import React from 'react';
import LogoFooter from "../Images/logo_kasa_footer.png";
import '../Styles/Footer.css'

export default function Footer() {
    return (
       <div className="footer">
            <img className="logo_footer" src={LogoFooter} alt="Logo Kasa" />
            <p className="text_footer">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
