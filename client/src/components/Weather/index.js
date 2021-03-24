import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Modal from "react-modal";
import "./weather.css";
import CurrentWeather from "./CurrentWeather";
import FiveDayWeather from "./FiveDayWeather";
Modal.setAppElement("#root");

function Weather() {
  // STATE FOR WEATHER API \\
  const [weather, setWeather] = useState({});

  // STATE FOR MODAL OPEN/CLOSE \\
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // GET LOCATION AND API REQUEST WHEN PAGE LOADS \\
  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            API.weather(
              position.coords.latitude,
              position.coords.longitude
            ).then((res) => {
              setWeather(res.data);
            });
          },
          (err) => {
            API.weather(44.97997, -93.26384).then((res) => {
              setWeather(res.data);
            });
          }
        );
      } else {
        alert("Geolocation is not supported by this browser");
      }
    }
    getLocation();
  }, []);
  return (
    <>
      <CurrentWeather weather={weather} />
      <div className="center">
      <a
        style={{
          border: "1px solid white",
          fontWeight: "bold",
          backgroundColor: "#1779ba"
        }}
        onClick={() => setModalIsOpen(true)}
        className="button secondary"
        href="#/"
      >
        5 Day Forecast
      </a>
      </div>
      <FiveDayWeather
        onRequestClose={() => setModalIsOpen(false)}
        open={modalIsOpen}
        weather={weather}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
}

export default Weather;
