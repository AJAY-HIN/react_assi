import React, { useState, useEffect } from "react";
import "./Food.css";
import Cart from './Cart'
import { NavLink } from "react-router-dom";

const Food = (prop) => {
  const [food, setFood] = useState([]);
  const [food2, setFood2] = useState([]);

  useEffect(() => {
    const foodDatas = async () => {
      let res = await fetch("http://training.panorbitprojects.com/api/Menu/");
      let data = await res.json();
      setFood(data.data.menu);
      // console.log(data.data.menu);
    };
    foodDatas();
  }, []);

  const groupData = () => {
    let g = Object.entries(
      food.reduce((r, c) => ((r[c.Type] = [...(r[c.Type] || []), c]), r), {})
    );
    let d = g.reduce(
      (r, c) => (r.children.push({ name: c[0], children: c[1] }), r),
      { name: "Children Array", children: [] }
    );
    setFood2(d);
    console.log(d);
  };

  useEffect(() => {
    groupData();
  }, [food]);

  return (
    <>
        <div className='type'> 
      {food2.children?.map( (ele) => 
        <>
            <a href={`#${ele.name}`} id="typeOfFood">{ele.name}</a>
            {/* <NavLink to={`#${ele.name}`} id="typeOfFood">{ele.name}</NavLink> */}
        </>
      )}
      </div> 
      <div className="otuFood">
        <div className="forScroll">       
          <div className="scrollFood">
            {food2.children?.map((ele) => (
              <div className="borderhr">
                <div id="itemCount">
                  <h2 id={ele.name}>{ele.name} </h2>
                  <h3>{ele.children.length} Items </h3>
                </div>

                {ele.children.map((element) => (
                  <div className="orderItem">
                    <div className="allData">
                      <div className="dishName">
                        <i class="fa fa-heart"></i>
                        <h3>{element.name}</h3>
                        <p>₹ {element.price}</p>
                        <p>{element.details}</p>
                      </div>
                      <div className="myImage">
                        <img
                          src={element.image}
                          className="foodig"
                          alt="fsdmbjhguef"
                        />
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* {food2.children.map(ele =>(
          <div>
            <p>{ele.name}</p>
          </div>
        ))} */}

            {/* <Chat type={food} />
        <Snacks type={food} /> 
        <South type={food} />
        <Breads type={food} />
        <Dessert type={food} />
        <Chinese type={food}/>
        <Veg type={food} />  */}
          </div>
        </div>
   

      </div>

      <Cart />

    </>
  );
};

export default Food;
