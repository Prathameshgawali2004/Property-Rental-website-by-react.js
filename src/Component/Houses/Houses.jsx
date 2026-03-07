import React from "react";
import "./Houses.css";
import Card from "../Card/Card";
import house from "../../assets/house.jpg";
import housekitchen from "../../assets/housekitchen.jpg";
import houseroom from "../../assets/houseroom.jpg";

import farmhouse from "../../assets/farmhouse.jpg";
import farmhouse2 from "../../assets/farmhouse2.jpg";
import farmhouse3 from "../../assets/farmhouse3.jpg";

import flat from "../../assets/flat.jpg";
import flat2 from "../../assets/flat2.jpg";
import flat3 from "../../assets/flat3.jpg";

import skyblue from "../../assets/skyblue.jpg";
import skyblue2 from "../../assets/skyblue2.jpg";
import skyblue3 from "../../assets/skyblue3.jpg";

function Houses() {
  return (
    <div id="houses">
      <Card
        image1={house}
        image2={housekitchen}
        image3={houseroom}
        title={"3BHK Villa in Nashik"}
        price={"₹40,000"}
      />
      <Card
        image1={farmhouse}
        image2={farmhouse2}
        image3={farmhouse3}
        title={"Farmhouse in Mumbai"}
        price={"₹60,000"}
      />
      <Card
        image1={flat}
        image2={flat2}
        image3={flat3}
        title={"1BHK in Pune"}
        price={"₹30,000"}
      />
      <Card
        image1={skyblue}
        image2={skyblue2}
        image3={skyblue3}
        title={"Skyhouse in Barnes School"}
        price={"₹60,000"}
      />
    </div>
  );
}

export default Houses;
