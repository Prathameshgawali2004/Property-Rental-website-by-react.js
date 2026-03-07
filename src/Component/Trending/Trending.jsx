import React from 'react'
import "./Trending.css"
import Card from '../Card/Card'

import villa from "../../assets/villa.jpg" 
import villa2 from "../../assets/villa2.jpg" 
import villa3 from "../../assets/villa3.jpg" 
import resort from "../../assets/resort.jpg" 
import resort2 from "../../assets/resort2.jpg" 
import resort3 from "../../assets/resort3.jpg"
import mountain from "../../assets/mountain.jpg"
import mountain2 from "../../assets/mountain2.jpg"
import mountain3 from "../../assets/mountain3.jpg"
import cottage from "../../assets/cottage.jpg"
import cottage2 from "../../assets/cottage2.jpg"
import cottage3 from "../../assets/cottage3.jpg"
function Trending  (){
  return (
    <div id="trending">
      <Card image1={villa } image2={villa2} image3={villa3} title={"Villa in Camp"} price={"₹50,000"}/>
     <Card image1={resort} image2={resort2} image3={resort3} title={"Resort in Igatpuri"} price={"₹40,000"}/>
      <Card image1={mountain} image2={mountain2} image3={mountain3} title={"Mountain in Temple Hill"} price={"₹30,000"}/>
      <Card image1={cottage } image2={cottage2} image3={cottage3} title={"Cottage in Adgaon "} price={"₹40,000"}/>
    </div>
  )
}

export default Trending
