import React from 'react';
import './Loader.css';
import loaderImg from '../../assets/images/loader.gif'; 

const Loader = () => {
  return (
    <>
        <img src={loaderImg} alt="loader" className='loader-img'/>
    </>
  )
}

export default Loader;