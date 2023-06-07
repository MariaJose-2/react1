import React, { useState } from 'react';
import "../mensaje.css"
const Main = ({ text }) =>{
    const [showMain, setShowMain] = useState(false);

    const handleClick = () => {
        setShowMain(!showMain);
    };

    return (
        <main>
            <h1>Main</h1>
            <button className='a' onClick={handleClick}>Mostrar/Ocultar</button>
            {showMain && <p className='mensaje'>{text}</p>}
        </main>
    );
}
export default Main;