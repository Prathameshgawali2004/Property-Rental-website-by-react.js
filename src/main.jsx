import  { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 
{ createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider} 
  from "react-router-dom"

import App from "./App.jsx";
import Home from "./Component/Home/Home.jsx";
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import Trending from "./Component/Trending/Trending.jsx";
import Rooms from "./Component/Rooms/Rooms.jsx";
import Farm from "./Component/Farm/Farm.jsx";



import Houses from "./Component/Houses/Houses.jsx";
import Listing from "./Component/Listing/Listing.jsx";
import UserContext from "./Component/Context/UserContext";
import Contact from "./Component/Contact/Contact";

const router = createBrowserRouter( createRoutesFromElements( 
<Route path="/" element={<App />}>
   <Route index element={<Home />}/> 
   <Route path="login" element={<Login />}/>
    <Route path="signup" element={<Signup/>}/>  
     <Route path="trending" element={<Trending/>}/>
     <Route path="rooms" element={<Rooms/>}/>
      <Route path="farm" element={<Farm/>}/>
      <Route path="houses" element={<Houses/>}/>
      <Route path="listing" element={<Listing/>}/>
      <Route path="contact" element={<Contact/>}/>
       </Route>
       
)
);
    createRoot(document.getElementById("root")).render(
     <StrictMode> 
      <UserContext>
      <RouterProvider router={router} /> 
      </UserContext>
      </StrictMode>
    );