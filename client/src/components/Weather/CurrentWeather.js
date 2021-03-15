import React from "react";

export function CurrentWeather({ weather }) {
  // UV INDEX STYLING \\
  let inputStyle =
    weather.current?.uvi >= 8
      ? {
          backgroundColor: "red",
          borderRadius: "5px",
          color: "white",
          padding: "3px",
          fontWeight: "bold",
        }
      : (weather.current?.uvi >= 6) & (weather.current?.uvi < 8)
      ? {
          backgroundColor: "orange",
          borderRadius: "5px",
          padding: "3px",
          fontWeight: "bold",
        }
      : (weather.current?.uvi > 2) & (weather.current?.uvi < 6)
      ? {
          backgroundColor: "yellow",
          borderRadius: "5px",
          border: "1px solid white",
          padding: "3px",
          fontWeight: "bold",
        }
      : {
          backgroundColor: "green",
          borderRadius: "5px",
          color: "white",
          padding: "3px",
          fontWeight: "bold",
        };
  return (
    <div>
      <div
        className="card"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/125457/pexels-photo-125457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        }}
      >
        <div className="card-section">
          <img
            src={`https://openweathermap.org/img/wn/${weather.current?.weather[0].icon}@2x.png`}
            alt={""}
          />
        </div>
        <div className="card-section">
          <h2 style={{ color: "white", fontWeight: "bold" }} className="">
            <span>{`${weather.current?.temp.toFixed(0)}° F`}</span>
          </h2>
          <h6
            className=""
            style={{
              textTransform: "capitalize",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {weather.current?.weather[0].description}
          </h6>
          <p className="" style={{ color: "white", fontWeight: "bold" }}>
            Humidity {weather.current?.humidity}%
          </p>
          <p className="" style={{}}>
            <span style={{ color: "white", fontWeight: "bold" }}>
              UV Index{" "}
            </span>
            <span style={inputStyle}>{weather.current?.uvi}</span>
          </p>
          <p className="" style={{ color: "white", fontWeight: "bold" }}>
            Wind{" "}
            <span style={{ color: "white" }}>
              {weather.current?.wind_speed} MPH
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
