import React from 'react'
import "./Signup.css";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
function Signup  (){
  return (
 
    <div id="signup">
      <form
        onSubmit={(e)=>{
          e.preventDefault();
          alert("Signup successfully...👍");
        }}
      >
    
        <span id="signuptitle"> Sign Up Page</span>
          <div className="list">
     
     
           <label  htmlFor="name">Username</label> 
           <input type="text" id="name"  required/>
           </div>


              <div className="list">
           <label  htmlFor="email">Email</label> 
           <input type="text" id="email"  required/>
           </div>

              <div className="list">
            <label  htmlFor="password1">Password</label> 
           <input type="password" id="password1"  required/>
            </div>

             <div className="list">
            <label  htmlFor="conpass1"> Confirm Password</label> 
           <input type="password" id="conpass1"  required/>
            </div>

           <button id="signup-btn">SignUp <MdOutlinePersonAddAlt1/></button>
        </form>
       

      
    </div>
  )
}

export default Signup;
