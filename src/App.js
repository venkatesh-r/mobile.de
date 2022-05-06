import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useEffect, useState } from "react";
import Loader from './Components/UI/Loader';
import Product from './Components/Product/Product';
import Modal from './components/Modal/Modal';

function App() {
  const baseURL = "http://localhost:7000/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [productitle, setProducttitle] = useState(null);
  const [error, setError] = useState(null);

  const fetchProduct = async()=>{
    setLoading(true);
    try{
      setLoading(false);
      const response = await fetch(baseURL);
      const product = await response.json();
      setData(product.images);
      setProducttitle(product.title)
    }catch(error){
      setLoading(false);
      setError(error)
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchProduct();
  }, []);


  if(loading){
  return(
    <main>
      <Loader/>
    </main>
  )
}

if(error) {
  return(
    <main>
       Please try again
    </main>
  )
}

return (
  <main>
      <Header/>
      <Product data={data} setSelectedImage={setSelectedImage} productitle={productitle}/>
      { selectedImage && <Modal selectedImage={selectedImage} productitle={productitle} setSelectedImage={setSelectedImage} /> }
  </main>
);
}

export default App;
