import { useState } from 'react';
import Axios from 'axios';

function UpdateComponent() {
  // Variables with default values and their set functions
  const [name, setName] = useState('');

  const updateUser = () => {
    // Runs an UPDATE Command to URL with data in object. Logs Data when its complete
    Axios.put('http://localhost:3000/update/updateUser', { name }).then((response) => {
      console.log('User Updated', response.data);
    });
  };
  
  return (
    <div>
      <h1>Update Component</h1>
      <div>
        <input type="text" placeholder="Name..." onChange={(event) => { setName(event.target.value) }}/>
        <button onClick={updateUser}> Update User </button>
      </div>
    </div>
  );
}

export default UpdateComponent;
