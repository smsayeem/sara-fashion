import React from "react";
import "./style.scss";
import logo from "../../assets/logo1.png";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../utilities/firebase";
import { connect } from "react-redux";
import CartIcon from "../cart-icon";
import CartDropdown from "../cart-dropdown";

function Header({ currentUser, dropdownHidden }) {
  // console.log("Header currentUser=", currentUser);
  return (
    <div className="header">
      <Link className="logo-container">
        <img src={logo} alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {dropdownHidden ? null : <CartDropdown />}
    </div>
  );
}
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return {
    currentUser,
    dropdownHidden: hidden,
  };
};

export default connect(mapStateToProps)(Header);
