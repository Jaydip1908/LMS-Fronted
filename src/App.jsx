import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from './components/ui/button';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, []);

  console.log(data);

  return (
    <Button>
      <h1 className="text-6xl font-bold underline">
        {data}
      </h1>
    </Button>
  );
}

export default App;
