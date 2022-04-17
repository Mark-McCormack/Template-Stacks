import { useState } from 'react';
import Axios from 'axios';

function DeleteComponent() {
  const [name, setName] = useState('');

  const deleteUser = () => {
    Axios.delete('http://localhost:3000/delete/deleteUser', {data: { name }}).then((response) => {
      console.log('User Deleted', response.data);
    });
  };
  
  return (
    <div>
      <h1>Delete Component</h1>
      <div>
        <input type="text" placeholder="Name..." onChange={(event) => { setName(event.target.value) }}/>
        <button onClick={deleteUser}> Delete User </button>
      </div>
    </div>
  );
}

export default DeleteComponent;
