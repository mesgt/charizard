import React from "react";
import Modal from "react-modal";

const FiveDayWeather = ({ weather, open, onClose }) => {
  console.log(open);

  return (
    <Modal isOpen={open}>
      <h2>Modal Title</h2>
      <a onClick={() => setModalIsOpen(false)} class="button primary" href="#">
        Close
      </a>
    </Modal>
  );
};

export default FiveDayWeather;
