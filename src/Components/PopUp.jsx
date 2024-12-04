import React from "react";

const PopUp = ({ onClose }) => {
  const handleOverlayClick = (event) => {
    if (event.target.id === "popup-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Submission Successful!</h2>
        <p>Your loan form has been submitted.</p>
        <button
          onClick={onClose}
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUp;
