import React from "react";
import Modal from "react-modal";

const FiveDayWeather = ({ weather, open, onClose, onRequestClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
    },
    overlay: {
      backgroundColor: "gray",
    },
  };
  console.log(weather.daily?.[0]);
  return (
    <Modal isOpen={open} onRequestClose={onRequestClose} style={customStyles}>
      <div className="flex-container">
        <div class="grid-x grid-margin-x small-up-5 ">
          <div className="cell">
            <div className="card">
              <div className="card-section">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[0].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div className="card-section">
                <p>{weather.daily?.[0].weather[0].description}</p>
                <p>Low {weather.daily?.[0].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[0].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[0].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <div className="card-section">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[1].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div className="card-section">
                <p>{weather.daily?.[0].weather[0].description}</p>
                <p>Low {weather.daily?.[0].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[0].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[0].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <div className="card-section">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[2].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div className="card-section">
                <p>{weather.daily?.[0].weather[0].description}</p>
                <p>Low {weather.daily?.[0].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[0].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[0].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <div className="card-section">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[3].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div className="card-section">
                <p>{weather.daily?.[0].weather[0].description}</p>
                <p>Low {weather.daily?.[0].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[0].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[0].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <div className="card-section">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[4].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div className="card-section">
                <p>{weather.daily?.[0].weather[0].description}</p>
                <p>Low {weather.daily?.[0].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[0].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[0].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a onClick={onClose} class="button primary" href="#/">
        Close
      </a>
    </Modal>
  );
};

export default FiveDayWeather;
