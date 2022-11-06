import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./Form.css";

function Form(props){

    const [value, setValue] = React.useState("");
    const BASE_API_URL = `https://api.artic.edu/api/v1/artworks/search?q=`;
    
    
    const submitHandler = (event) => {
        event.preventDefault();
        axios
        .post(`${BASE_API_URL}${value}`)
          .then((res) => {
            props.newArtHandler(res.data.data);
            // console.log(res.data.data[0]);
          })
          .catch((error) => console.log(error));
    }

    

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="value">value :</label>
                <input
                type="text" id="value" value={value} onChange={(event)=>setValue(event.target.value)}></input>
                <button type="submit">Cari</button>
                </form>        
        </div>
    )
}

export default Form;