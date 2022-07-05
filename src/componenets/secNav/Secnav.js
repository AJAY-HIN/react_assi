import React from 'react'
import './Secnav.css'

export default function Secnav() {
  return (
  <>
       <div className="scrollmenu">
    <div className="counts">
      <h1 className="h1Counts">50 restaurants</h1>
    </div>
    <div className="secNavList">
      <a href="/" className="secNavSearch"><i className="fa fa-search"></i>Search</a>
     <a href="/" style={{textDecoration: 'underline', textUnderlineOffset:'16px'}} >Relevance</a>
    <a href="/">Delivery Time</a>
    <a href="/">Logo</a>
    <a href="/">Rating</a>
    <a href="/">Cost: Low To High</a>
    <a href="/">Cost: High To Low</a>
    <a href="/" style={{fontWeight: 'bold', color: 'black', fontSize:'18px'}}>Filters <i className="fa fa-filter" style={{color: 'rgb(255, 94, 0)', fontSize: 'larger'}}></i></a>

    </div>
  </div>
</>
      
 
  )
}
