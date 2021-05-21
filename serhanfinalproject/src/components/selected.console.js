import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './loading';

export default function Selectedconsole(props) {

    const [chosenConsole, setChosenConsole] = useState(null);

    useEffect(() => {
        const retrieveSingleConsole = async () => {
            const findConsole = await axios.get(`https://csc225.mockable.io/consoles/${props.selectedConsole}`)
            setChosenConsole(findConsole.data);
        }
        retrieveSingleConsole();
    }, [props.selectedConsole])

    if (!chosenConsole) return <Loading />

    return (
        <div className="container text-center bg-light border border-dark mt-5">
            <img className="mt-5" src={chosenConsole.image}/>
            <ul class="text-left list-group list-group list-group-flush p-5">
                <h3><li class="list-group-item">Name: {chosenConsole.name}</li></h3>
                <h3><li class="list-group-item">Price: ${chosenConsole.price}</li></h3>
                <h3><li class="list-group-item">Release: {chosenConsole.releaseYear}</li></h3>
                <h3><li class="list-group-item">Country: {chosenConsole.country}</li></h3>
            </ul>
            <button className = "btn btn-primary mb-4 btn-lg"  onClick={() => props.setSelectedConsole(null)}>Back</button>
        </div>
    )
}
