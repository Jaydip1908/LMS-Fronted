import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, []);

  console.log(data);

  return (
    <div style={{ textAlign: 'center', fontSize: '40px' }}>
      <h1>Data from API:</h1>
      {data}
    </div>
  );
}

export default App;
