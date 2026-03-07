import React from 'react'
import"./Rooms.css"
import Card from '../Card/Card'
import hostel from "../../assets/hostel.jpg"
import hostel2 from "../../assets/hostel2.jpg"
import hostel3 from "../../assets/hostel3.jpg"

import rentalroom from "../../assets/rentalroom.jpg"
import rentalroom2 from "../../assets/rentalroom2.jpg"
import rentalroom3 from "../../assets/rentalroom3.jpg"

import hotel from "../../assets/hotel.jpg"
import hotel2 from "../../assets/hotel2.jpg"
import hotel3 from "../../assets/hotel3.jpg"

import bhk from "../../assets/bhk.jpg"
import bhk2 from "../../assets/bhk2.jpg"
import bhk3 from "../../assets/bhk3.jpg"

function Rooms  (){
  return (
    <div id="Rooms">
      <Card image1={ hostel } image2={hostel2} image3={ hostel3} title={"Hostel in Datamandir "} price={"₹20,000"}/>
         <Card image1={rentalroom  } image2={rentalroom2} image3={ rentalroom3} title={" Rental Room in Ozar"} price={"₹10,000"}/>
        <Card image1={ hotel } image2={hotel2} image3={ hotel3} title={"Hotel Room in Pathardi"} price={"₹40,000"}/>
         <Card image1={ bhk } image2={bhk2} image3={bhk3} title={"1BHK in Lahavit"} price={"₹30,000"}/> 
    </div>
  )
}

export default Rooms

