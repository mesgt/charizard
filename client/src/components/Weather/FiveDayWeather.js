import React from "react";
import Modal from "react-modal";

const FiveDayWeather = ({ props }) => {
  console.log();

  return (
    <Modal isOpen={false}>
      <h2>Modal Title</h2>
      <a class="button primary" href="#">
        Close
      </a>
    </Modal>
  );
};

export default FiveDayWeather;
