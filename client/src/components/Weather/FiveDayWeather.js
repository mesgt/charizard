import React from "react";
import Modal from "react-modal";

const FiveDayWeather = ({ weather, open, onClose, onRequestClose }) => {
  console.log(open);
  const modalStyle = {};

  return (
    <Modal
      isOpen={open}
      onRequestClose={onRequestClose}
      style={modalStyle}
      style={{
        overlay: {
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
          backgroundColor: "#fff",
        },
      }}
    >
      <h2>Modal Title</h2>
      <a onClick={onClose} class="button primary" href="#">
        Close
      </a>
    </Modal>
  );
};

export default FiveDayWeather;
