import "./Navbar.css";
import imgs from "./swiggy-1.svg";
import {BiCart} from "react-icons/bi"

const Navbar = () => {

  return (
    <>
      <div className="nav" >
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <img id="slogo-img" src={imgs} alt="logos" />
            <a href="#default" id="logo">
              <span>Jayanagar</span> Kurukshetra, Haryana, India
            </a>
            <i
               className="fa fa-angle-down"
              id="arrow"
              style={{ fontSize: "25px" }}
            ></i>
          </div> 
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="/" className="topNav">
            <i className="fa fa-search"></i>Search
          </a>
          <a href="/" className="topNav">
            <i className="fa fa-percent"></i>Offer{" "}
            <sup style={{ color: "rgb(255, 136, 0)", fontWeight: "bold" }}>
              New
            </sup>
          </a>
          <a href="/" className="topNav">
            <i className="fa fa-person"></i>Help
          </a>
          <a href="/" className="topNav">
            <i className="fa fa-user"></i>Sign in
          </a>
          <a href="/" className="topNav">
            {/* <i className="fa fa-cart-shopping"></i> */}
            <BiCart style={{width:'28px', height:'18px'}}/>
            Cart
          </a>
        </div>
      </div>

    
    </>
  );
};

export default Navbar;
