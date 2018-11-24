import React from 'react';

const UserRow = ({ user: { name, age, id }, handleDelete, editUser }) => (
  <tr>
    <td>{name}</td>
    <td>{age}</td>
    <td><button onClick={() => { editUser(id) } }>Edit</button></td>
    <td><button onClick={() => {handleDelete(id)}}>Delete</button></td>
  </tr>
)

export default UserRow;