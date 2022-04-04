import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header" >
       
      <Link to="/">
        <img
          className="header__logo"
          src="book1.jpg"
          
        />
       
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineTwo">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineTwo">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        


        <Link to="/checkout">
       
          <div className="header__optionBasket">
          <Badge color="secondary" badgeContent={basket?.length}>
          <ShoppingCartIcon />{" "}
        </Badge>
          </div>
        </Link>
      </div>
     
    </div>

  );
}

export default Header;
