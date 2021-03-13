import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Modal from "react-modal";
import "./weather.css";
import CurrentWeather from "./CurrentWeather";
import FiveDayWeather from "./FiveDayWeather";

function Weather() {
  const [weather, setWeather] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            API.weather(
              position.coords.latitude,
              position.coords.longitude
            ).then((res) => {
              setWeather(res.data);
            });
          },
          (err) => {
            console.log("User denied permission");
          }
        );
      } else {
        alert("Geolocation is not supported by this browswer");
      }
    }
    getLocation();
  }, []);
  return (
    <>
      <CurrentWeather weather={weather} />
      <a onClick={() => setModalIsOpen(true)} class="button primary" href="#">
        5 Day
      </a>
      <FiveDayWeather
        open={modalIsOpen}
        weather={weather}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
}

export default Weather;
