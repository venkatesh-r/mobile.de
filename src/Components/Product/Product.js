import React from 'react';
import './product.css';

const Product = ({data, productitle, setSelectedImage}) => {
 return (
    <div className="container">
    <div className="row">
       {data.map((val) => (
             <div className="col-12 col-sm-6 col-md-4 product-list" key={val.uri} onClick={()=>setSelectedImage(val.uri)}>
                <img src={`https://${val.uri}?rule=mo-200.jpg`}  className="img-thumbnail" alt=""/>
                <p>{productitle}</p>
            </div>
            ))} 
    </div>
  </div>
  )
}

export default Product;