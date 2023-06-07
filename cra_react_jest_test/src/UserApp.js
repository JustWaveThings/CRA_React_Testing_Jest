
import React, {useState, useEffect} from 'react'
import UserAsync from './UserAsync'

function  UserApp() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, []);

  if (error){
    return <span>{error}</span>
  }

  return (
    <div> {user ?  <UserAsync user={user}/> : <span>Loading...</span> } </div>
  )
}

export default UserApp