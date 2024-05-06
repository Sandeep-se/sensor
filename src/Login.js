import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import {Link ,useNavigate} from 'react-router-dom'
import logo from './blacklogo.png'


function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

     const signIn=async(e)=>
    {
        e.preventDefault()
        // https://amazon-clone-backend-x7dm.onrender.com/signIn
        const response=await axios.post('http://localhost:8000/signIn',{email,password},{withCredentials:true},{headers:{
            'Content-Type':'application/json',
          }})
        try{
            if(response.data==='sigIn success')
            {
                navigate('/')
            }
            alert(response.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }
  return (
    <div className='login'>
        {/* <Link to='/'>
        <img src={logo} className='login_logo' alt='logo'/>
        </Link> */}
        <Link to='/' style={{textDecoration:'none'}}><div className='login_logo' >SensorHub</div></Link>
        <div className='logo_container'>
            <h1>sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
                
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                <p style={{fontSize:'12px'}}>By sigining-in you agree to the SensorHub</p>
                <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>
            <Link to='/login/register'> <button type='submit' 
            className='login_registerButton'>Create Your Account</button></Link>
        </div>
    </div>
  ) 
} 

export default Login
