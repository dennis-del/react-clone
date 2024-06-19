import React from 'react'
import './CheckoutProduct.css'
import StarRateIcon from '@mui/icons-material/StarRate';


function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct_image' src={image} alt="" />
        <div className='checkoutproduct_info'>
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct_rating">
            {Array(rating).fill().map((_, i)=>(
                    <p><StarRateIcon/></p>
                ))}
            </div>
            <button>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct