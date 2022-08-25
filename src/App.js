import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Form from './Form';
import { useState,useEffect } from 'react';



const URL = "https://random-data-api.com/api/users/random_user?size=4";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => setData(result));

      
		

  },[]);

  localStorage.removeItem('name');
  localStorage.removeItem('id');

  return (

    <div>


    <Routes>
    <Route path='/' element={<Home data={data} />} />
      <Route path='/form' element={<Form/>}/>
    </Routes>
    

    </div>
  );
}

export default App;
