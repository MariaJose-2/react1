import React, { useState } from 'react';
import "../mensaje.css"
const Footer = ({ text }) =>{
    const [showFooter, setShowFooter] = useState(false);

    const handleClick = () => {
        setShowFooter(!showFooter);
    };

    return (
        <footer>
            <h1>Footer</h1>
            <button className='a' onClick={handleClick}>Mostrar/Ocultar</button>
            {showFooter && <p className='mensaje'>{text}</p>}
        </footer>
    );
}
export default Footer;