import React from 'react';

const UserForm = (props) => (
  <div>
    id <input name="id" type="text" onChange={props.handleInputChange} value={props.user.id} />
    Name <input name="name" type="text" onChange={props.handleInputChange} value={props.user.name} />
    Age <input name='age' type="text" onChange={props.handleInputChange} value={props.user.age} />

    <button onClick={props.handleSubmit}>Add new User</button>
  </div>
);

export default UserForm;