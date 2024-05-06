import {React, useState} from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useBasketValue} from './BasketProvider';


function Header() {
    const{details}=useBasketValue()
    const user=details.email?details.email.split('@')[0]:'Guest'
    const length=details.basket?Object.keys(details.basket).length:0
    const [inpuText,setInputText]=useState('')
    const logout = async () => {
        try {
          const response = await axios.post('http://localhost:8000/logout', null, { withCredentials: true });
          // https://amazon-clone-backend-x7dm.onrender.com/logout
          if (response.data === 'logout success') {
            window.location.reload();
          }
        } catch (error) {
          console.error( error);
        }
      };
    const search=async()=>{
      try {
        const response=await axios.post('http://localhost:8000/chat',{inpuText})
      } catch (error) {
        console.error( error);
      }
      setInputText('')
    }
  return (
    <div className='header'>
    <Link to='/' style={{textDecoration:'none'}}><div className='header_logo' >SensorHub</div></Link>{/* <img  className='header_logo' src={logo} alt='logo' /> */}
      
      <div className='header_search'>
      <input className='header_searchInput' type='test' placeholder='Enter the project name' value={inpuText} onChange={(e)=>setInputText(e.target.value)}/>
      <div onClick={search}>
        <SearchIcon className='header_searchIcon'/>
      </div>
      </div>
      
        
        <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOne'>
                Hello {user}     
            </span>
            <span className='header_optionLineTwo'>
                {user!=='Guest'? 
                (<span onClick={logout} style={{ cursor: 'pointer',textDecoration:'none'}}>Sign Out</span>)
                :
                (<span><Link to='/login' style={{ color: 'white', textDecoration: 'none' }}>Sign In</Link></span>)
                }
            </span>
        </div>
        

        <div className='header_option'>
            <span className='header_optionLineOne'>
                Returns
            </span>
            <span className='header_optionLineTwo'>
                Orders
            </span>
        </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>
                Your
            </span>
            <span className='header_optionLineTwo'>
                Prime
            </span>
        </div>
        <Link to='/checkout' style={{ color: 'white', textDecoration: 'none' }}>
        <div className='header_optionBasket'>
            <ShoppingBasketIcon/>
             <span className='header_optionLineTwo header_basketCount' >{length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
