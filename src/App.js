import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';
import React, {useEffect} from 'react';

import axios from "axios";

const BASE_API_URL = `https://api.artic.edu/api/v1/artworks?page=1&limit=5`;



function App() {
  const [artWorks, setArtWorks] = React.useState([]);
  const [newArtWorks, setNewArtWorks] = React.useState();
  const [newArtWorks2, setNewArtWorks2] = React.useState([]);
  useEffect(() => {
    async function getArtWorks() {
      await axios
        .get(`${BASE_API_URL}`)
        .then((res) => {
          const responseData = res.data.data;
          setArtWorks(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }
    getArtWorks();
  }, []);

  

  const artHandler = (data) => {
    setNewArtWorks(data)
    
    newArtWorks.forEach(data =>  {
      console.info(data.api_link);
       axios
        .get(`${data.api_link}`)
        .then((res) => {
          let responseData = res.data.data;
          setNewArtWorks2(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    });
    
  }

 const resetArr = () => {
  setNewArtWorks2(null);
 }
 

 return (
  <div className="App">
    <Form
    newArtHandler = {artHandler}
    />
    <button onClick={resetArr}>Reset</button>
  <div className="media-scroller2">
    {newArtWorks2 && 
      <CardList
        title = {newArtWorks2.title}
          artist = {newArtWorks2.artist_title}
          urlFoto = {newArtWorks2.image_id}
          description = {newArtWorks2.department_title
          
          }
          originPlace = {newArtWorks2.place_of_origin
          }
          startDate ={newArtWorks2.date_start}
      />
    }
    <br></br>
  </div>
  <div className="media-scroller">
  {
    artWorks.map(
      (data, index) => {
        return(
          
          <CardList
          key = {index}
          keyIndex = {index}
          title = {data.title}
          artist = {data.artist_title}
          urlFoto = {data.image_id}
          description = {data.department_title
          
          }
          originPlace = {data.place_of_origin
          }
          startDate ={data.date_start}
          />
          
        )
      }
    )
  }
  </div>
  
    
  </div>
);

}
export default App;
