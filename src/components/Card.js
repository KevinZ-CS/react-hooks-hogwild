import React, { useState } from "react";
import ExtraContent from "./ExtraContent";

function Card({ hog }) {
    const [click, setClick] = useState(false)

    function handleClick() {
        setClick(!click)
    }

    return (
        <div>
            <h1>{hog.name}</h1>
            <img src={hog.image} alt='hog' height='250' width='250' onClick={handleClick} />
            {click ? <ExtraContent hog={hog} /> : null }
        </div>
    )
}

export default Card