import React from "react";
import ToDo from "../ToDo";
import "./weather.css";

function Weather (){
    return (
        <>
<div className="travel-feature-card WeatherBox">
  <div className="travel-feature-card-header{{#if type}} icon {{type}}-icon{{/if}}">
    <div className="row">
       <div className="medium-12 columns">
         <h5 className="travel-feature-card-subtitle">5 Day Weather </h5>
          <div className="travel-feature-card-header-controls">
            <span><a href="#"><i className="fa fa-edit"></i></a></span>
            <span><a href="#"><i className="fa fa-remove"></i></a></span>
         </div>
      </div>
    </div>  
  </div>

  <div className="travel-feature-card-details DayBox">
      <div className="radius bordered shadow card">
        <h4>icon</h4>
        <h6 className="travel-feature-card-date-range">Day 1</h6>
      </div>
      <div className="radius bordered shadow card">
        <h4>icon</h4>
        <h6 className="travel-feature-card-date-range">Day 2</h6>
      </div>
      <div className="radius bordered shadow card">
       <h4>icon</h4>
        <h6 className="travel-feature-card-date-range">Day 3</h6>
      </div>
  </div>

</div>


        
        {/* <div class="row mt-3">
        <div class="card col" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title" id="day1date">Day 1</h5>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" id="image-day1">
            <p>Temp: <span class="card-text" id="temperature-day1"></span></p>
            <p>Humidity: <span class="card-text" id="humidity-day1"></span></p>
          </div>
        </div> */}
        </>
    )
}

export default Weather;