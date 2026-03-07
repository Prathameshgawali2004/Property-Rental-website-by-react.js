import React from 'react'
import"./Farm.css"
import Card from "../Card/Card";
import area from "../../assets/area.jpg";
import area2 from "../../assets/area2.jpg";
import area3 from "../../assets/area3.jpg";

import button from "../../assets/button.jpg";
import button2 from "../../assets/button2.jpg";
import button3 from "../../assets/button3.jpg";

import span from "../../assets/span.jpg";
import span2 from "../../assets/span2.jpg";
import span3 from "../../assets/span3.jpg";

import text from "../../assets/text.jpg";
import text2 from "../../assets/text2.jpg";
import text3 from "../../assets/text3.jpg";
function Farm  () {
  return (
    <div id="farm">
      <Card
        image1={area}
        image2={area2}
        image3={area3}
        title={"1Bhk in Air Force Near"}
        price={"₹20,000"}
      />
      <Card
        image1={button}
        image2={button2}
        image3={button3}
        title={"3Bhk In Kolkata"}
        price={"₹60,000"}
      />
      <Card
        image1={span}
        image2={span2}
        image3={span3}
        title={"Farmhouse in Bangalore"}
        price={"₹30,000"}
      />
      <Card
        image1={text}
        image2={text2}
        image3={text3}
        title={"Farmhouse in Hydrabad"}
        price={"₹40,000"}
      />

    </div>
  )
}

export default Farm
