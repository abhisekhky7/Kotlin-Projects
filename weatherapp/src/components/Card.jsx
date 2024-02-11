import React, { memo } from "react";
import "./Card.css";

const Card = ({ weather, city, unit, toggleUnit }) => {
  
  const celValue= Math.floor(weather.main.temp)


  
  return (
    <div className=" container-fluid myCard">
      {weather && (
        <>
          <div className="d-flex justify-content-center">
            <h3 className="mainHeader">
              Data For <span>{weather.name}</span>
            </h3>
          </div>
          <div className="ct cardContainer">
            <div className=" m-4">  {/* Temp Card */}
              <div className="card " style={{ width: "15rem" }}>
                <div className="card-header ct">Temperature</div>
                <div className="card-body ">
                  <div className="ct ">
                    <span className="fs-3" style={{ fontWeight: 500 }}>
                    {celValue}
                    </span>
                    <span className="fs-3">  {unit ==="metric"?"°C":"°F" }</span>
                  </div>
                  <div className="innerBody">
                    <h6 className="ct">Temperature is {weather.main.temp}  {unit ==="metric"?"°C":"°F" }</h6>

                    <h6 className="ct">
                      Min temp is : {Math.floor(weather.main.temp_min)} {unit ==="metric"?"°C":"°F" }
                    </h6>
                    <h6 className="ct">
                      Max temp is : {Math.floor(weather.main.temp_max)} {unit ==="metric"?"°C":"°F" }
                    </h6>
                    <div className="ct">
                      <button className="btn btn-info btn-sm mt-2" onClick={toggleUnit} style={{ color: "white" }}>
                        Convert to {unit === "metric" ? "Fahrenheit" : "Celsius"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="  m-4 "> {/* Weather Card */}
            <div className="card " style={{ width: "15rem" }}>
                <div className="card-header ct" style={{ width: "15rem" }}>
                  Weather Condition
                </div>
                <div className="card-body  ">
                  <div className="ct">
                    <span className="mc fs-3"> {weather.main.humidity}</span>
                    <span style={{ fontSize: "25px" }}> %</span>
                  </div>
                  <div className="innerBody">
                    <h6 className="ct">
                      Humidity is {weather.main.humidity} %
                    </h6>
                    <h6 className="ct">pressure: {weather.main.pressure}</h6>
                    <h6 className="ct">visibility: {weather.visibility} </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="  m-4 "> {/* Wind Card */}
            <div className="card " style={{ width: "15rem" }}>
                <div className="card-header ct" style={{ width: "15rem" }}>
                  Wind Info
                </div>
                <div className="card-body  ">
                  <div className="ct">
                    <span className="mc fs-3"> {weather.wind.speed}</span>
                    <span style={{ fontSize: "25px" }}> km/hr</span>
                  </div>
                  <div className="innerBody">
                    <h6 className="ct">
                      Wind speed is {weather.wind.speed} %
                    </h6>
                    <h6 className="ct">Wind deg : {weather.wind.deg}</h6>
                    <h6 className="ct">Description: {weather.weather[0].description} </h6>
                  </div>
                </div>
              </div>
            </div>
            
            {/* End of card div */}
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Card);
