import React, { useState } from "react";
import './App.css';


const Listitem = () => {

    const [name, setName] = useState("");
    const [sirname, setSirname] = useState("");

    
     const [olditems, setOldItems] = useState([]);

   const addItem=()=> {
        setOldItems([...olditems,[name, sirname]]);
        console.log(olditems);
    }

  
    function removeItem(index) {
      const newItems = [...olditems];
      newItems.splice(index, 1);
      setOldItems(newItems);
      
    } 
  return (
     <div className="container">
       <div className="addContainer">
        First Name : <input type="text" placeholder="Enter Name" name="name" onChange={(e) =>setName(e.target.value)} />
         <br/>
        Last Name : <input type="text" placeholder="Enter  Sirname" name="sirname" onChange={(e) =>setSirname(e.target.value)} />
         <br/>
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


// const Listitem = () => {

//     const [name, setName] = useState("");
//     const [sirname, setSirname] = useState("");

    
//      const [olditems, setOldItems] = useState([]);

//    const addItem=(name)=> {
//         setOldItems([...olditems,name]);
//     }

  
//     function removeItem(index) {
//       const newItems = [...olditems];
//       newItems.splice(index, 1);
//       setOldItems(newItems);
//     } 
//   return (
//      <div className="container">
//        <div className="addContainer">
//         Name : <input type="text" placeholder="Enter Name" name="name" onChange={(e) =>setName(e.target.value)} />
//         <br/>
//        Sirname : <input type="text" placeholder="Enter  Sirname" name="sirname" onChange={(e) =>setSirname(e.target.value)} />
//        <br/>
//         <button  onClick={() => addItem()}>Add</button>
//       </div>

//       {olditems.map((item, index) => (
//       <div key={index} className="item">
//         <span>{item}</span>
//         <button onClick={() => removeItem(index)}>Remove</button>
//       </div>
//     ))}
       
//   </div>

//   )
// }

// export default Listitem;
