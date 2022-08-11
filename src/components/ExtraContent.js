import React from "react";

function ExtraContent({ hog }) {
    return (
    <ul>
        <li>{hog.specialty}</li>
        <li>{hog.greased ? 'Is greased' : 'Is not greased'}</li>
        <li>{hog.weight}</li>
        <li>{hog["highest medal achieved"]}</li>
    </ul>
    )
}

export default ExtraContent