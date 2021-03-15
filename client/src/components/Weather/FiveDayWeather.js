import React from "react";
import Modal from "react-modal";

const FiveDayWeather = ({ weather, open, onClose, onRequestClose }) => {
  {
    /* MODAL STYLES */
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      zIndex: 1001,
      transform: "translate(-50%, -50%)",
      maxHeight: "100vh",
      overflowY: "auto",
      // background: "#fff",
      backgroundImage: `url("https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgb(72,72,72,.95)",
    },
  };

  // CURRENT DAY DATE \\
  const currentDay = new Date(
    weather.daily?.[0].dt * 1000
  ).toLocaleDateString();
  console.log(weather);
  return (
    <Modal isOpen={open} onRequestClose={onRequestClose} style={customStyles}>
      <div className="flex-container">
        <div class="grid-x grid-margin-x small-up-5 ">
          {Object.keys(weather).length > 0 &&
            weather.daily
              .filter((dayObject, index) => index > 0 && index < 6)
              .map((dayObject, index) => (
                <div key={index} className="cell">
                  <div className="card" style={{ minHeight: "380px" }}>
                    <div className="card-section">
                      <h5>
                        {new Date(dayObject.dt * 1000).toLocaleDateString()}
                      </h5>
                      <img
                        src={`https://openweathermap.org/img/wn/${dayObject.weather[0].icon}@2x.png`}
                        alt={""}
                      />
                    </div>
                    <div
                      className="card-section"
                      style={{
                        textTransform: "capitalize",
                        backgroungColor: "white",
                      }}
                    >
                      <p>{dayObject.weather[0].description}</p>
                      <p>Low {dayObject.temp.min.toFixed(0)}°</p>
                      <p>High {dayObject.temp.max.toFixed(0)}°</p>
                      <p>Humidity {dayObject.humidity.toFixed(0)}%</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <a
        style={{ border: "1px solid white", fontWeight: "bold" }}
        onClick={onClose}
        class="button primary"
        href="#/"
      >
        Close
      </a>
    </Modal>
  );
};

export default FiveDayWeather;
