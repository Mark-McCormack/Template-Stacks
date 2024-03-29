import { useState } from 'react';
import Axios from 'axios';

function CreateComponent() {
  // Variables with default values and their set functions
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');

  const createUser = () => {
    // Runs a POST Command to URL with data in object. Logs Data when its complete
    Axios.post('http://localhost:3000/create/createUser', { name, age, username }).then((response) => {
      console.log('User Created', response.data);
    });
  };
  
  return (
    <div>
      <h1>Create Component</h1>
      <div>
        <input type="text" placeholder="Name..." onChange={(event) => { setName(event.target.value) }}/>
        <input type="number" placeholder="Age..." onChange={(event) => { setAge(parseInt(event.target.value)) }}/>
        <input type="text" placeholder="Username..." onChange={(event) => { setUsername(event.target.value); }}/>
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  )
}

export default CreateComponent;