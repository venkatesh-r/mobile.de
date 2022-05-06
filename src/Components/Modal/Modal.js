import React from 'react';
import './modal.css';

const Modal = ({selectedImage, setSelectedImage, productitle}) => {
  const backDropModal = (e) => {
      if(e.target.classList.contains('backdrop')) {
        setSelectedImage(null);
      }
  }
  const closeModal = (e) => {
    e.preventDefault()
    setSelectedImage(null);
  }
  return (
    <div className='backdrop' onClick={backDropModal}>
        <div className='modal-container'>
               <div className='image-wrapper'>
                    <div className='title'>{productitle}</div>
                    <button type="button" className='close close-btn' onClick={closeModal}>
                         <span aria-hidden="true">&times;</span>
                    </button>
                    <img src={`https://${selectedImage}?rule=mo-640.jpg`} alt={selectedImage}/>
                </div>
            </div>
    </div>
  )
}

export default Modal