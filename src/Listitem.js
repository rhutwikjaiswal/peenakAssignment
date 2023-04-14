import React, { useState } from "react";
import './App.css';


const Listitem = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    
     const [olditems, setOldItems] = useState([]);

   const addItem=()=> {
    if(name !== "" && surname !== "" && mobile !== "" && email !== "" ){
      var contactName = "Full Name : " + name+ " "+surname;  
      var contactmobile = " Mobile no : " + mobile;
      var contactemail =  " Email-Id : " + email;
      setOldItems([...olditems,[contactName,contactmobile,contactemail]]);
      //console.log(olditems);
    }else{
      alert("Please fill the required input!!!");
    }
  
    }

  
    function removeItem(index) {
      let confirmtext = window.confirm("Are You sure?");
      if (confirmtext === true) {
        let newItems = [...olditems];
      newItems.splice(index, 1);
      setOldItems(newItems);
      
      } else {
       console.log("You cancelled");
      }
     
    } 
  return (
    <>
     <div className="container">
      <h1>Contact Form</h1>
       <div className="addContainer">
       <b> First Name : </b><input type="text" placeholder="Enter Name" name="name" onChange={(e) =>setName(e.target.value)} required />
         <br/>
       <b> Last Name : </b><input type="text" placeholder="Enter Surname" name="surname" onChange={(e) =>setSurname(e.target.value)} required />
         <br/>
       <b> Mobile no :</b> <input type="number" placeholder="Enter Mobile" name="mobile" onChange={(e) =>setMobile(e.target.value)} required />
         <br/>
       <b> Email - id  : </b><input type="email" placeholder="Enter Email" name="email" onChange={(e) =>setEmail(e.target.value)} required />
         <br/>
        <button  onClick={() => addItem()}>Add</button>
      </div>

      {olditems.map((item, index) => (
      <ul key={index} className="item">
        <li>{item[0]}</li>
        <li>{item[1]}</li>
        <li>{item[2]}</li>
        <button onClick={() => removeItem(index)}>Remove</button>
      </ul>   
        
    ))}
       
  </div>
  </>
  )
}

export default Listitem;

