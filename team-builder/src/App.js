import React, { useState } from "react";
import "./App.css";

import Member from "./Member"
import Form from "./Form";
//improrting the files I made.

//creating an app function and giving it a useState with an empty array
function App() {
  const [member, setMember] = useState([])
//creating a variable and making the id= todays date the name is the members name and so on
  const addNewMember = memberInfo => {
    const newMember = {
      id: Date.now(), 
      name: memberInfo.name, 
      email: memberInfo.email, 
      role: memberInfo.role };
    setMember([...member, newMember]);
  };
//then returning the form and Member
  return(
    <div>
      <Form addNewMember={ addNewMember } />
      <Member member={ member } />
    </div>
  );
}

export default App; 
