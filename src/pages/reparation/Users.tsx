import React from 'react';

function Users(props) {
  return (
    <div>
    <h1>test</h1>
    {props.users.map((user)=>{
     return (<div key={user.id}>
              <h2>{user.username}</h2>
              <p>{user.password}</p>
             </div>);
    })}
    </div>
  );
}

export default Users;