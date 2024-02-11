// import React, { useEffect, useState } from "react";

// const useFetch = (city,unit) => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const apiKey = "7ef7372c73fd61f1c04a50e175999583";
  
//  useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//       const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}appid=${apiKey}`)
//         if (!res.ok) {
//           alert("Error getting weather info...");
//         }
//         if (res.ok) {
//           const resdata = await res.json();
//           setData(resdata);
//           setError(null);
//         }
//       } catch (err) {
//         setError(err);
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [city,unit]);
//   return { data, loading, error};
// };

// export default useFetch;
