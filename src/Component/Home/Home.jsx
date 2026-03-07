import { useContext } from "react";
import "./Home.css";
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
import villa from "../../assets/villa.jpg";
import villa2 from "../../assets/villa2.jpg";
import villa3 from "../../assets/villa3.jpg";
import resort from "../../assets/resort.jpg";
import resort2 from "../../assets/resort2.jpg";
import resort3 from "../../assets/resort3.jpg";
import mountain from "../../assets/mountain.jpg";
import mountain2 from "../../assets/mountain2.jpg";
import mountain3 from "../../assets/mountain3.jpg";
import cottage from "../../assets/cottage.jpg";
import cottage2 from "../../assets/cottage2.jpg";
import cottage3 from "../../assets/cottage3.jpg";
import hostel from "../../assets/hostel.jpg";
import hostel2 from "../../assets/hostel2.jpg";
import hostel3 from "../../assets/hostel3.jpg";
import rentalroom from "../../assets/rentalroom.jpg";
import rentalroom2 from "../../assets/rentalroom2.jpg";
import rentalroom3 from "../../assets/rentalroom3.jpg";
import hotel from "../../assets/hotel.jpg";
import hotel2 from "../../assets/hotel2.jpg";
import hotel3 from "../../assets/hotel3.jpg";
import bhk from "../../assets/bhk.jpg";
import bhk2 from "../../assets/bhk2.jpg";
import bhk3 from "../../assets/bhk3.jpg";
import { dataContext } from "../Context/UserContext";
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

function Home() {
  let {
    title,
    setTitle,
    addlisting,
    setaddlisting,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setprice,
  } = useContext(dataContext);
  return (
    <div id="home">
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
      <Card
        image1={villa}
        image2={villa2}
        image3={villa3}
        title={"Villa in Camp"}
        price={"₹50,000"}
      />
      <Card
        image1={resort}
        image2={resort2}
        image3={resort3}
        title={"Resort in Igatpuri"}
        price={"₹40,000"}
      />
      <Card
        image1={mountain}
        image2={mountain2}
        image3={mountain3}
        title={"Mountain in Temple Hill"}
        price={"₹30,000"}
      />
      <Card
        image1={cottage}
        image2={cottage2}
        image3={cottage3}
        title={"Cottage in Adgaon "}
        price={"₹40,000"}
      />
      <Card
        image1={hostel}
        image2={hostel2}
        image3={hostel3}
        title={"Hostel in Datamandir "}
        price={"₹20,000"}
      />
      <Card
        image1={rentalroom}
        image2={rentalroom2}
        image3={rentalroom3}
        title={" Rental Room in Ozar"}
        price={"₹10,000"}
      />
      <Card
        image1={hotel}
        image2={hotel2}
        image3={hotel3}
        title={"Hotel Room in Pathardi"}
        price={"₹40,000"}
      />
      <Card
        image1={bhk}
        image2={bhk2}
        image3={bhk3}
        title={"1BHK in Lahavit"}
        price={"₹30,000"}
      />
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
      {addlisting ? (
        <Card
          image1={URL.createObjectURL(addImage1)}
          image2={URL.createObjectURL(addImage2)}
          image3={URL.createObjectURL(addImage3)}
          title={title}
          price={price}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
