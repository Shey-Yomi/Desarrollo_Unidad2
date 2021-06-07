import React, {useState} from 'react';
import UserTable from './componentes/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './componentes/AddUserForm';
import EditUserForm from './componentes/EditUserForm';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Sheyla', username: 'shey' },
    { id: uuidv4(), name: 'Marco', username: 'marc' },
    { id: uuidv4(), name: 'Carolina', username: 'caro' },
    { id: uuidv4(), name: 'Andrea', username: 'andy'}
  ]

  const [users, setUsers] = useState(usersData);
  
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(user => user.id != id))
  }

  //Editar usuario
  const [bandera, setbandera] = useState(false);
  const [currentUser, setcurrentUser] = useState({
    id: null,
    name: '',
    username: ''
  });

  const editRow = (user) =>{
    setbandera(true);
    setcurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setbandera(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>Proyecto CRUD</h1>
      <div className="flex-row">
      <div className="flex-large">
          {
            bandera ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
            </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
          editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
