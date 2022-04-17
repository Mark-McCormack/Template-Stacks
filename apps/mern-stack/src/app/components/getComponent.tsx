import { useState, useEffect } from 'react';
import Axios from 'axios';

function GetComponent() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/get/getUsers').then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Get Component</h1>
      <div>
        {listOfUsers.map((user: any) => {
          return <div>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.username}</div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default GetComponent;
