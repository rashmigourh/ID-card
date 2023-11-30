import React from 'react'
// import IMG1 from "../../assests/img.jpg"
import { useState, useEffect } from 'react';
import "./Card.css"

const Card=(props)=> {
  const [results, setResults]=useState([]);

  const information=async()=>{
    const url="https://randomuser.me/api/?page=1&results=1&seed=abc";
    let data=await fetch(url);
    let parseData=await data.json();
    setResults(parseData.results);
  }
  useEffect(() => {
    information();
  }, [])

    return(
      <>
      {
       results && results.map((e)=>{
        return <div className="container"  key={e.id.value}>
        <div className="card">
          <div className="head_part">
            <div className="details">
              <h2>YOUR IDENTITY CARD</h2>
              <p>{e.location.street.number+" "+e.location.street.name+", "+e.location.city+", "+e.location.country+"-"+e.location.postcode}</p>
              <p>{e.email}</p>
            </div>
          </div>
        <div className="card_container">
            <div className="card_image">
              <img src={e.picture.large} alt="Rashmi" />
            </div>
  
          <div className="card_content">
          <div className="field d-flex">
                <p>ID: {e.id.name+"-"+e.id.value}</p>
              </div>
              <div className="field d-flex">
                <p>Name: {e.name.title+" "+e.name.first+" "+e.name.last}</p>
              </div>
              <div className="field">
                <p>Gender: {e.gender}</p>
              </div>
              <div className="field">
                <p>DOB: {e.dob.date.substring(0,10)+" "}</p>
              </div>
              <div className="field">
                <p>Age: {e.dob.age}</p>
              </div>
              <div className="field">
                <p>Phone No: {e.phone}</p>
              </div>
          </div>
          </div>
          <div className="end_part">
            <p>hello</p>
          </div>
          </div>
          </div>
       })
      }
      </>
    )
}

export default Card
