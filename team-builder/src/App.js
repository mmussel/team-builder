import React, { useState } from "react";
import "./App.css";

import Member from "./Member"
import Form from "./Form";

function App() {
  const [member, setMember] = useState([])

  const addNewMember = memberInfo => {
    const newMember = {
      id: Date.now(), 
      name: memberInfo.name, 
      email: memberInfo.email, 
      role: memberInfo.role };
    setMember([...member, newMember]);
  };

  return(
    <div>
      <Form addNewMember={ addNewMember } />
      <Member member={ member } />
    </div>
  );
}

export default App; 
