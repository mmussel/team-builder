import React from 'react';
//maping through member and displaying member name, email and rols and giving it a style and key to reference.
const Member = props => {
    return (
      <div>
        {props.member.map(member => (
          <div style={{fontSize:"40px", padding:"10px", width:"15%"}} key={member.id}>
            <h4>{member.name}</h4>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    );
  };

export default Member;