import React from 'react'
import './Home.css'
import Product from './Product'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="row" style={{background:'rgb(234,237,237)'}}>
                    <div className="col-md-6" style={{marginTop:'200px',display:'flex',zIndex:'1'}}><Product id="45827375" title='Sony ULT WEAR Over Ear Wireless Noise Cancelling Headphones with ULT POWER SOUND, IOS & Android - Black' price={29.99} image="/images/headset.png" rating={5} /></div>
                    <div className="col-md-6" style={{marginTop:'200px',display:'flex',zIndex:'1'}}><Product id="44234623" title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5L Glass Bowl, Removable Splash Guard, 1000 W, Black' price={190} image="/images/kenwood.png" rating={4} /></div>
                </div>
                <div className="row" style={{background:'rgb(234,237,237)'}}>
                    <div className="col-md-4" style={{marginTop:'350px',display:'flex',zIndex:'1'}}><Product id="44234623" title='KOORUI 24 Inch Gaming Monitor HDMI X2 /DP, VESA Compatible, Tilt Adjustable, Eye Care' price={99} image="/images/display.png" rating={3} /></div>
                    <div className="col-md-4" style={{marginTop:'350px',display:'flex',zIndex:'1'}}><Product id="44234574" title='Echo Show 5 (3rd Gen, 2023 release) | Smart display and alarm clock with clearer sound | Charcoal' price={74.99} image="/images/echo.png" rating={2} /></div>
                    <div className="col-md-4" style={{marginTop:'350px',display:'flex',zIndex:'1'}}><Product id="44455664" title='Apple iPad Pro 12.9 (1st Gen) 128GB 4G - Silver - Unlocked (Renewed)' price={329.95} image="/images/ipad.png" rating={4} /></div>
                </div>
                <div className="row" style={{background:'rgb(234,237,237)'}}>
                    <div className="col-md-12" style={{marginTop:'350px',display:'flex',zIndex:'1'}}><Product id="63556624" title='SAMSUNG C49J890, Curved 1800R Gaming PC Screen, Ultra-Large, 49-Inch VA Panel, Dual Full HD Resolution (3.840 x 1.080), 144 Hz, 5ms, Black' price={1094.98} image="/images/monitor.png" rating={5} /></div>
                </div>
        </div>
    </div>
  )
}

export default Home