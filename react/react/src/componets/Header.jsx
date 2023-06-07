import React, { useState } from 'react';
import "../mensaje.css"
const Header = ({ text }) =>{
    const [showHeader, setShowHeader] = useState(false);

    const handleClick = () => {
        setShowHeader(!showHeader);
    };

    return (
        <header>
            <h1>Header</h1>
            <button className='a' onClick={handleClick}>Mostrar/Ocultar</button>
            {showHeader && <p className='mensaje'>{text}</p>}
        </header>
    );
}
export default Header;