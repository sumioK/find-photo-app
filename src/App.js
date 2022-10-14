import './App.css';
import React, {useState,useEffect} from 'react';

function App() {

  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('apple');
  useEffect(() => {
    console.log('useEffect runnning')
    fetch(`https://api.unsplash.com/serch/photos?query=${query}&client_id=${process.env}.React_APP_CLIENT_ID`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setImages(data.results)
    },[query])
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
