import { useEffect, useState } from 'react';
import { getPost, getRandomUser } from './api';
import './App.css';
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';

function App() {
  const [data, setData] = useState(null);
  const [userdata,setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPost()
      .then(posts => setData(posts))
      .catch(error => setError(error)); // Catch any errors
  }, []);

  useEffect(()=>{
    getRandomUser()
      .then(user => setUserData(user))
      .catch(error => setError(error))
  },[])

  const refresh = () => {
    getRandomUser()
      .then(user => setUserData(user))
      .catch(error => setError(error))

  }

  console.log(userdata)
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (data === null) {
    return <div>Loading...</div>; // Add a loading state
  } else {
    return (
      <div className="App">
        {userdata && <UserCard data={userdata}/>}
        <button onClick={refresh}>refresh user</button>
        {data.map((post, index) => (
          <PostCard key={index} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default App;
