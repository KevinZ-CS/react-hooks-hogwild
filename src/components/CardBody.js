import React from "react";
import Card from "./Card";


function CardBody({ hogsData }) {

    const hogCard = hogsData.map((hog) => {
            return <Card key={hog.name} hog={hog} />
    })

    return (
        <div>
            {hogCard}
        </div>
    )
}

export default CardBody