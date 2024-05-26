import { useEffect, useState } from 'react';
import { getPost } from './api';
import './App.css';
import PostCard from './components/PostCard';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPost()
      .then(posts => setData(posts))
      .catch(error => setError(error)); // Catch any errors
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (data === null) {
    return <div>Loading...</div>; // Add a loading state
  } else {
    return (
      <div className="App">
        {data.map((post, index) => (
          <PostCard key={index} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default App;
