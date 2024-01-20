import React,{useState} from 'react'
import "./Style.css"
import {useDispatch} from 'react-redux'
import { loginUser } from '../Store/UserSlice'

export default function Login() {

const [email,setEmail] =useState('')
const [password,setPassword] =useState('')

const dispatch = useDispatch()

const handleSubmit = (e)=>{
  e.preventDefault()
   dispatch(loginUser())
}

  return (
      <form className='form-group custom-form' onSubmit={handleSubmit}> 
      <label >Email</label>
        <input type="text" required className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <label>Password</label>
       <input type="password" required className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <br/>
       <button type='submit' className='btn btn-success btn-md'>Login</button>

      </form>
       
  )
}
