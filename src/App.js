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
 }
