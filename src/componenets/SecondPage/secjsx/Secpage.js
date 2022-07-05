import React, { useState, useEffect, useRef } from "react";
import {  useParams } from "react-router-dom";
import "../seccss/Secpage.css";
import Food from "./Food";
import {FaLeaf} from 'react-icons/fa';


const Secpage = () => {
  const [current, setCurrent] = useState()
  const [resto, setResto] = useState({});
  const [state, setState] = useState([]);


  const params = useParams();
  let id = params.productId;


  
  let heightRef = useRef()

  useEffect(()=>{
    const myFunc = () =>{
      if(heightRef.current.style.position.top == '10px'){
        heightRef.current.style.height = "200px";
      }
    }
    myFunc();
  },[])
  
 

  useEffect(() => {
    const loadCardData = async () => {
      let response = await fetch(
        `http://training.panorbitprojects.com/api/RestaurantDetails/?id=${id}`
      );
      let data = await response.json();
      // console.log(data);
      let cdata = data;
      setResto(cdata.data);
    };
    loadCardData();
  }, [id]);












  return ( 
    <>
    <Section/>
      <div className="secBack" >
        <div className="bGround" ref={heightRef}>
          <div className="data">
            <div className="dataImg">
            <img src={resto?.image} alt="sdfqgre" />
            </div>
              <div className="ratings">
              <h1>{resto.name}</h1>
              <h5>South Indian</h5>
              <h5>{resto.address}</h5>
              <div className="ratecosttime">
              <div className="ctr ">
                <h5><i className="bi bi-star-fill"></i>{resto.rating}Ratings</h5>
                <h6>{resto.ratingCount}</h6>
              </div>
              <div className="ctr ctr2">
              <h5>{resto.deliveryTime}</h5>
              <h6>Delivery Time</h6>
              </div>
              <div className="ctr ctr3">
              <h5>{resto.costForTwo}</h5>
              <h6>Cost for two</h6>
              </div>

              </div>

              </div>

                <div className="offers">
                <fieldset>
                <legend>Offers</legend>
                <h4><i className="bi bi-emoji-heart-eyes"></i> {resto.offer}up to ₹100 + Flat    ₹30 cashback with Paytm</h4>
                  <br/>
                <h4><i className="bi bi-emoji-heart-eyes"></i> 30% off | use Party code</h4>
                </fieldset>
      
                </div>
              </div>
              
            </div>
            <div className="searchNav">
          <div className="searchBox">
            <i className="bi bi-search"></i>
            <input placeholder="search for dishes..." />
            <button>
          
              {/* <i class="bi bi-suit-heart"></i>  */}
              <FaLeaf style={{color:"green"}}/>
              <div>&nbsp;&nbsp;</div> Pureveg
            </button>
            <button>
             
              <i class="bi bi-suit-heart"></i> <div>&nbsp;&nbsp;&nbsp;</div>{" "}
              Favourite
            </button>
          </div>
        </div>

         
          
<div className="giveFlex">
<Food />

</div>
 </div>
{/* {state.map((ele, i) => 
  <div key={i}>
    <h1>{ele.name}</h1>
  </div>
)} */}
         
    </>
  );
};

export default Secpage;


function Section(){
  return (
    <>
    <div className="section">
      <small>Home  /Rest  /Bengluru  /Hotel</small>
    </div>
    </>
  )

}