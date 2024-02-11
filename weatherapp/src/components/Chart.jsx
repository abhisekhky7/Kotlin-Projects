import React, { useState, useEffect,memo, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const WeatherChart = ({city}) => {
  const [weatherData, setWeatherData] = useState([]);

    const getRandomNumbers = (quantity, min, max) => {
      const numbers = [];
      while (numbers.length < quantity) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);}
      }
      setWeatherData(numbers);
    };

    const value = useMemo(()=>{getRandomNumbers(12, 16, 40)},[city])

  const data = [
    {name: "January ",Max_Temp: weatherData[0],amt: "is_Amt",},
    {name: "February ",Max_Temp:  weatherData[1],amt: "is_Amt",},
    {name: "March ",Max_Temp: weatherData[2],amt: "is_Amt",},
    {name: "April ",Max_Temp: weatherData[3],amt: "is_Amt",},
    {name: "May ",Max_Temp: weatherData[4],amt: "is_Amt",},
    {name: "June ",Max_Temp: weatherData[5],amt: "is_Amt",},
    {name: "July ",Max_Temp: weatherData[6],amt: "is_Amt",},
    {name: "August ",Max_Temp: weatherData[7],amt: "is_Amt",},
    {name: "September ",Max_Temp: weatherData[8],amt: "is_Amt",},
    {name: "October ",Max_Temp: weatherData[9],amt: "is_Amt",},
    {name: "November ",Max_Temp: weatherData[10],amt: "is_Amt",},
    {name: "December ",Max_Temp: weatherData[11],amt: "is_Amt",},
  ];

  return (
    <div className=" container p-0 mt-4 overflow-hidden d-flex justify-content-center "> 
      <LineChart width={600}height={350}data={data}margin={{top: 5,right: 30,left: 20, boMax_Tempom: 5,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis  yPadding={20} tickLine={false}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Max_Temp" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default (WeatherChart);
