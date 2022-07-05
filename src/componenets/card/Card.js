import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Fnav/Navbar";
  
let pagenum = 1;
const Card = () => {
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(pagenum);
  

  useEffect(() => {
    const loadCardData = async () => {
      let response = await fetch(
        `http://training.panorbitprojects.com/api/RestaurantsList/?page=${page}`
      );
      let data = await response.json();
      let cdata = data.data.restaurants;
      setCardData((prevstate) => [...prevstate, ...cdata]);
      // console.log(data.data.restaurants);
    };
    loadCardData();
  }, [page]);

  const scrollToEnd = () => {
    if (page < 5) {
      setPage(page + 1);
    }
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop  ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };  

  return (
    <> 
      <div className="myData">
        <div className="outWrapper" >
          {cardData.map((ele, i) => (
            <Link to={`/restaurants/${ele.id}`} style={{ color: 'inherit', textDecoration: 'inherit', lineHeight:'inherit', position:'inherit', border:'inherit'}}>
              <div className="outWrapper carding" key={i}>
                <div className="cardWrapper">
                  <div className="shaddowBorder">
                    <div className="card">
                      <img src={ele.image} alt="foodimage" />
                      <div className="details">
                        <h3>{ele.name}</h3>
                        <p>{ele.items}</p>
                        <div className="rating">
                          <button>
                            <i className="fa fa-star"></i> {ele.rating}
                          </button>
                          <p style={{textDecoration:'none'}}>
                            <span>. </span>
                            {ele.deliveryTime}
                          </p>
                          <p>
                            <span>. </span>
                            {ele.costForTwo}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="disccount">
                      <h3>
                        <i className="fa-solid fa-badge-percent"></i>
                        {ele.offer}
                      </h3>
                    </div>
                  </div>
                  <hr />
                  <div className="quickView">
                    <h4>Quick view </h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Card;
