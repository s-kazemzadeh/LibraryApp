import React, { useState } from "react";

export default function KlootTemp() {
    console.log('kapot domm sws')

    const [number, setNumber] = useState(0);

    function increaseNumber() {
        setNumber(5);
        console.log('bonk')
    }

    const increaseNumberLambda = () => {
        setNumber(10);
    }


    return (
        <>

            <h1>EWA GANGSTER MANBRO</h1>
            <h4>EWA GANGSTER MANBRO</h4>
            💀💀💀💀💀💀💀💀💀💀💀💀

            <button onClick={() => increaseNumber()}>go to 5</button>
            <button onClick={() => increaseNumberLambda()}>go to 10</button>
            <button onClick={() => {
                setNumber(20);
            }}>go to 20</button>

            <h5>{number}</h5>
        </>
    )
};