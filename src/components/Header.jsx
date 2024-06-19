import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className='header_logo' src="/images/logo.png" />
            </Link>
            <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <div className="header_optionLineOne">Hello Guest</div>
                    <div className="header_optionLineTwo">Sign In</div>
                </div>
                <div className="header_option">
                    <div className="header_optionLineOne">Returns</div>
                    <div className="header_optionLineTwo">& Orders</div>
                </div>
                <div className="header_option">
                    <div className="header_optionLineOne">Your</div>
                    <div className="header_optionLineTwo">Prime</div>
                </div>
                <Link to="/Checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header_optionLineTwo header_basketCount'>0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header