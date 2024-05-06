import './App.css';
import CheckOut from './CheckOut';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Login';
import Register from './Register'
import { useEffect} from 'react';
import io from'socket.io-client'
import axios from 'axios'
import { useBasketValue } from './BasketProvider';
const socket=io('http://localhost:8000',{withCredentials:true})
// https://amazon-clone-backend-x7dm.onrender.com



function App() {
  const {details,setDetails}=useBasketValue();
  const getData=async()=>
  {
    const response=await axios.get('http://localhost:8000/get',{withCredentials:true},{headers:{
      'Content-Type':'application/json',
    }})
  }
  const itemAdd = (data) => {
    setDetails(data);
  };  
  const user=(data)=>
  {
    setDetails(data);
  }
  const removeItem=(data)=>
  {
    setDetails(data)
  }
  useEffect(()=>
  {
    socket.on('user',user)
    socket.on('itemAdd',itemAdd);
    socket.on('removeItem',removeItem)
    getData()
    return () => {
      socket.off('removeItem',removeItem)
      socket.off('user',itemAdd);
      socket.off('getBasket',user)
    };
  },[]);

  return (
     <Router>
        <div className="App">
          <Routes>
            <Route path='/login/register' element={<Register/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={<><Header/><CheckOut /></>} />
            <Route path='/' element={<><Header/> <Home /></>} />
          </Routes>
        </div>
    </Router>  
  );
}

export default App


