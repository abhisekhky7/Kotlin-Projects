import React from 'react'
import './Form.css'
const Form = ({handleSubmit,setCity,city,recentSearches,getChildInfo }) => {
  return (<div className="p-1 d-flex justify-content-center">
        <form onSubmit={handleSubmit} >
       <div className='myForm' style={{border:"2px solid gray"}} > 
         <input className=' myInput m-auto' type="text" 
            value={city} onChange={(e) => setCity(e.target.value)} 
            placeholder="Enter city name..." />
      { recentSearches.length>0? <>
      
        <button type="button" className=" dropdown-toggle mt-2 p-1" data-bs-toggle="dropdown" style={{border:"none",backgroundColor:"white"}}></button>
        <ul className="dropdown-menu myMenu">
          {recentSearches.map((item,i)=>{
            return <li key={i} onClick={()=>getChildInfo(item)}>{item}</li>
          })}
    </ul>
      </> : <></>}  
        <button type="submit" className='btn btn-outline-info m-1 bg-info btn-sm' style={{color:"white"}} >Search</button>
        </div>
      </form>
    </div>
  )
}

export default Form;