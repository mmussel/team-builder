import React, { useState} from 'react';
//making Form a prop and giving it a UseState
const Form = props => {
    const [member, setMember] = useState({
        id: Date.now(),
        name: '',
        email: '',
        role: ''
    });
//making a variable thatll pass in setMember with parameters to target the name and value then preventing default t happen and allow the page to populate with empty boxes
    const handleChanges = event => {
      setMember({ ...member, [event.target.name]: event.target.value});
    };

    const submitHandler = event => {
      event.preventDefault();
      props.addNewMember(member);
      setMember({ name: '', email: '', role: '' });
    };
//returning the info and creating styles for them then putting a submit action to send the data. putting an onChange for the handle Changes to have it sumbit data with each change to the page.
    return (
      <div style={{border:"3px solid black", padding:"30px", marginRight:"25%", marginLeft:"25%", backgroundColor:"lightgrey",}}>
        <form onSubmit={submitHandler}>
          <h1>Add New Member:</h1>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text" 
            id="name" 
            name="name" 
            value={member.name} 
            onChange={handleChanges}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={member.email} 
            onChange={handleChanges}
          />
          <br />
          <label htmlFor="role">Role:</label>
          <br />
          <input
            name="role"
            id="role"
            value={member.role}
            onChange={handleChanges}
          />
          <br/>
          <br/>
          <label htmlFor="addMember"></label>
          <button type="submit" id="addMember"> Submit</button>
          <br/>
          <br/>
        </form>
      </div>
    );
  };


export default Form;