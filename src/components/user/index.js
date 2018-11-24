import React, { Component } from 'react';
import UserTableHeader from './header';
import { Card, CardBody, Table } from 'reactstrap';

import UserRow from './UserRow';
import UserForm from './UserForm'
import defaultUserList from './defaultUserList';

const renderUserRow = (users, handleDelete, editUser) => (
  users.map( user =>  <UserRow key={user.id} user={user} editUser={editUser} handleDelete={handleDelete} /> )
)

class UserList  extends Component {
  state = {
    users: defaultUserList,
    user: {
      id: '',
      name: '',
      age: ''
    },
    isEditing: false,
  }

  handleDelete = (id) => {
    const users = this.state.users
    const filterUsers = users.filter(user => user.id != id)

    this.setState({
      users: filterUsers
    })
  }

  handleInputChange = (event) => {
    const user = this.state.user

    this.setState({
      user: { ...user, [event.target.name]: event.target.value}
    })
  }


  addUser = () => {
    const users = this.state.users
    const newUserList = users.concat(this.state.user)

    this.setState({
      users: newUserList,
      user: {id: '', name: "", age: ""}
    })
  }

  editUser = (id) => {
    const user = this.state.users.find(user => user.id == id)
    this.setState({isEditing: true, user })
  }

  updateUser = () => {
    const {users, user}= this.state
    const index = users.findIndex(u => u.id == this.state.user.id)
    const updateUsers =  [ ...users.slice(0, index), user, ...users.slice(index+1)]

    this.setState({ users: updateUsers, isEditing: false, user: {id: '', name: '', age: ''} })
  }

  render(){
    const { users, user, isEditing }= this.state;

    return (
      <React.Fragment>
        <Table bgColor={this.props.theamColor}>
          <UserTableHeader />
          <tbody>
            { renderUserRow(users, this.handleDelete, this.editUser) }
          </tbody>
        </Table>
        <Card>
          <CardBody>
            <UserForm user={ user } handleSubmit={isEditing ? this.updateUser : this.addUser} handleInputChange={this.handleInputChange} />
          </CardBody>
        </Card>

      </React.Fragment>
    )
  }
}

export default UserList;
