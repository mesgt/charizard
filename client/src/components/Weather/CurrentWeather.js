import React from "react";

export function CurrentWeather({ weather }) {
  console.log();
  let inputStyle =
    weather.current?.uvi >= 8
      ? {
          backgroundColor: "red",
          borderRadius: "5px",
          color: "white",
          padding: "3px",
        }
      : (weather.current?.uvi >= 6) & (weather.current?.uvi < 8)
      ? { backgroundColor: "orange", borderRadius: "5px", padding: "3px" }
      : (weather.current?.uvi > 2) & (weather.current?.uvi < 6)
      ? {
          backgroundColor: "yellow",
          borderRadius: "5px",
          border: "1px solid black",
          padding: "3px",
        }
      : {
          backgroundColor: "green",
          borderRadius: "5px",
          color: "white",
          padding: "3px",
        };
  return (
    <div>
      <div className="card" style={{ backgroundColor: "#89a8ede0" }}>
        <div className="card-section">
          <img
            src={`https://openweathermap.org/img/wn/${weather.current?.weather[0].icon}@2x.png`}
            alt={""}
          />
        </div>
        <div className="card-section">
          <h5 style={{ color: "white" }} className="">
            <span>{`${weather.current?.temp.toFixed(0)}° F`}</span>
          </h5>
          <h6
            className=""
            style={{ textTransform: "capitalize", color: "white" }}
          >
            {weather.current?.weather[0].description}
          </h6>
          <p className="" style={{ lineHeight: "40%", color: "white" }}>
            Humidity {weather.current?.humidity}%
          </p>
          <p className="" style={{ lineHeight: "40%" }}>
            <span style={{ color: "white" }}>UV Index </span>
            <span style={inputStyle}>{weather.current?.uvi}</span>
          </p>
          <p className="" style={{ lineHeight: "40%", color: "white" }}>
            Wind{" "}
            <span style={{ lineHeight: "40%", color: "white" }}>
              {weather.current?.wind_speed} MPH
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
