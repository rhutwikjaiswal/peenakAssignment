import React, { useState } from "react";
import './App.css';


const Listitem = () => {

    const [item, setItem] = useState("");

    
     const [olditems, setOldItems] = useState([]);

   const addItem=(e)=> {
        setOldItems([...olditems, item]);
    }

  
    function removeItem(index) {
      const newItems = [...olditems];
      newItems.splice(index, 1);
      setOldItems(newItems);
      setItem("");
    } 
  return (
     <div className="container">
       <div className="addContainer">
        <input type="text" placeholder="Add an item" name="item" onChange={(e) =>setItem(e.target.value)} />
        <button  onClick={() => addItem()}>Add</button>
      </div>

      {olditems.map((item, index) => (
      <div key={index} className="item">
        <span>{item}</span>
        <button onClick={() => removeItem(index)}>Remove</button>
      </div>
    ))}
       
  </div>















  )
}

export default Listitem;
