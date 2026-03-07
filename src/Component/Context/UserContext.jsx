import { createContext, useState } from "react";
export let dataContext = createContext();

function UserContext({ children }) {
  let [title, setTitle] = useState("");
  let [addlisting, setaddlisting] = useState(false);
  let [addImage1, setaddImage1] = useState(null);
  let [addImage2, setaddImage2] = useState(null);
  let [addImage3, setaddImage3] = useState(null);
  let [price, setprice] = useState(null);
  let value = {
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
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}

export default UserContext;
