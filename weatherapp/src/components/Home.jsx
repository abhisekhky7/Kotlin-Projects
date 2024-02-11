import React,{useEffect, useState,useCallback} from 'react'
import Card from './Card'
import Chart from './Chart'
import Form from './Form'

const Home = () => {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [recentSearches, setRecentSearches] = useState([]);
  const [unit,setUnit] = useState("metric")
  const [loading,setLoading]=useState(false)
  const apiKey = "7ef7372c73fd61f1c04a50e175999583"

  const expensiveFunction = useCallback(() => {
    fetchWeather()
  }, [city,unit]);


  const fetchWeather = async()=>{
    try {
      setLoading(true)
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`)
      if(!res.ok){
        alert("Error getting weather info...")
      }
      if(res.ok){
        const data = await res.json()
        setWeather(data)
        setLoading(false)
      }
      
      if(!recentSearches.includes(city)){
      setRecentSearches((prevSearches) => [city, ...prevSearches.slice(0, 4)]);
      }
    } catch (error) {
      console.log("Error occured", error)
    }finally{
      setLoading(false)
    }
  }
const handleSubmit = (e)=>{
  e.preventDefault();
  if(city.length>0){
  expensiveFunction()

}
  else{
    alert("Please Enter valid city name")
  }
  
}

const getChildInfo = (d) =>{
    setCity(d)
    if(city.length>0){
      expensiveFunction()
    }
}
 
const toggleUnit = ()=>{
  setUnit((prev)=>prev==="metric"?"imperial":"metric")
  expensiveFunction()
  console.log(unit)
}

return (
    <div className=' container-fluid d-flex justify-content-center flex-column'>
       <Form handleSubmit={handleSubmit} setCity={setCity} city={city} recentSearches={recentSearches} getChildInfo={getChildInfo} />
    <div  className='ct' >
    {loading ?<div className=" spinner-border text-info"></div>:<>
      { weather&&  <div className='container justify-content-center'>
          {console.log(weather.main.temp)}
          <Card weather={weather} city={city} unit={unit} toggleUnit={toggleUnit} />
          <div className='ct container w-50 border border-info'><span id='chartTitle'>Past 12 month Max temperature</span></div>
          <Chart city={weather.name}/>
        </div> 
        }  {/* End of weather */}
    </> }
    </div>
                    
      </div>
  )
}

export default Home;