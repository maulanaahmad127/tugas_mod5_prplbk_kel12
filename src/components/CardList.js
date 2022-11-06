import React from 'react';
import Detail from "./Detail"

import "./CardList.css"



function CardList(props) {
    const [isClicked, setisClicked] = React.useState(false);
    let description = props.description;
    let place = props.originPlace;
    let startDate = props.startDate;
    const detailHandler = () => {

        setisClicked(!isClicked);
        console.info(isClicked);

    }
    return (

        <div className="media-element">
            <img src={`https://www.artic.edu/iiif/2/${props.urlFoto}/full/843,/0/default.jpg`} alt="Avatar" />
            <h4>{props.title}</h4>
            <p>Artist :  {props.artist}</p>
            <button onClick={detailHandler}>Detail</button>
            {isClicked &&
                (
                    <Detail description={description}
                        place={place}
                        startDate={startDate} />
                )}

        </div>


    )
}

export default CardList;