import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
    return (
        <div className='row' style={{display:'flex',padding:'20px',backgroundColor:'white',height:'max-content'}}>
            <div className='col-md-9'>
                <img className='checkout_ad' src="https://www.treadmillreviews.net/wp-content/uploads/2023/09/AmazonPrimeBigDealDays.jpg.webp" alt="" />
                <div>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                    <CheckoutProduct id="63556624" title='SAMSUNG C49J890, Curved 1800R Gaming PC Screen, Ultra-Large, 49-Inch VA Panel, Dual Full HD Resolution (3.840 x 1.080), 144 Hz, 5ms, Black' price={1094.98} image="/images/monitor.png" rating={5} />
                    <CheckoutProduct id="44455664" title='Apple iPad Pro 12.9 (1st Gen) 128GB 4G - Silver - Unlocked (Renewed)' price={329.95} image="/images/ipad.png" rating={4} />
                </div>
            </div>
            <div className='col-md-3'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout