import React, { useEffect, useState, useRef } from "react";
import arrowr from "./arrow-right.svg";
import arrowl from "./arrow-left.svg";
import "./Carousal.css";
import { Outlet } from "react-router-dom";

const Carousal = () => {
  const [dataImg, setDataImg] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let response = await fetch(
        "http://training.panorbitprojects.com/api/GetCarousalData/"
      );
      let data = await response.json();
      setDataImg(data.data);
        };
        loadData();
      }, []);


    //   const nextImage = () => {
    //     setTranst(-12.38);
    //      dataImg.unshift(dataImg.pop());
    //       setTranst(0)
    //   }


    //   const prevImage = () => {
    //     setTranst(-12.38);
    //     dataImg.push(dataImg.shift());
    //     setTranst(0)
    // }


let carRef = useRef()
let sliderRef = useRef()
let nextI = useRef();
let prevI = useRef();

// useEffect(()=>{
//   prevImage();
//   nextImage();
//   transinionde();
// },[])

let direction;

const prevImage =  () => {
  direction = -1;
  carRef.current.style.justifyContent = 'center';
  sliderRef.current.style.transform = 'translate(12.38%)';  
};


const nextImage = () => {

  direction = 1;
  carRef.current.style.justifyContent = 'center';    
  sliderRef.current.style.transform = 'translate(-12.38%)';  
  
};





let slider = document.querySelector('.slider');
const transiti = () => {

  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'ease 0.6s';
  })
};

useEffect(()=>{
  transiti();
  slider.addEventListener('transitionend', transiti )
},[])


//  let slider = document.querySelector('.slider');
// const transinionde = () => {
//   // get the last element and append it to the front
  
//   // if (direction === 1) {
//   //   dataImg.unshift(dataImg.pop());
//   // } else {
//   //   dataImg.push(dataImg.shift());
//   // }

//   if (direction === 1) {
//     slider.prepend(slider.lastElementChild);
//   } else {
//     slider.appendChild(slider.firstElementChild);
//   }
  
//   sliderRef.current.style.transition = 'none';
//   sliderRef.current.style.transform = 'translate(0)';
//   setTimeout(() => {
//     sliderRef.current.style.transition = 'ease 0.6s';
//   })


//   // if(direction === 1){
//   //     let change =  dataImg.shift();
//   //     let change2 = dataImg.push(change);

//   // }
// };






  return (
    <>
      <div className="parentContainer">
        <div className="container">
          <div className="carousel" ref={carRef}>
          <div className="slider" ref={sliderRef} >

            {dataImg.map((imgs, i) => (
              <div key={i} style={{ poistion: "relative", textAlign: "center " }}  
               
                  
                  className="carImage"
                  style={{ backgroundImage: `url(${imgs.backgroundImage})` }}>
                
                  <h1>Flat 20% off</h1>
                </div>
           
            ))}
          </div>
              </div>
         
        </div>
        <div className="controls">
          <button className="next" ref={nextI} onClick={nextImage}>
            <img src={arrowr} alt="arrow" />
          </button>
          <button className="prev" ref={prevI} onClick={prevImage} >
            <img src={arrowl} alt="arroe" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousal;
