import React, { useState } from "react";
import PopUp from "./PopUp";

const LoanForm = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    setIsPopUpVisible(true); // Show the popup
  };

  const closePopUp = () => {
    setIsPopUpVisible(false); // Hide the popup
  };

  return (
    <section className="flex h-[450px] w-[400px] flex-col items-center justify-center rounded-lg bg-gray-800 p-6 shadow-2xl">
      <form className="w-full text-black" onSubmit={handleSubmit}>
        <h1 className="mb-4 text-3xl text-center text-white font-extrabold">
          Loan_Form
        </h1>
        <hr />
        <label className="mb-4 block text-white">Name:</label>
        <input
          type="text"
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
        />
        <hr />
        <label className="mb-4 block text-white">Number:</label>
        <input
          type="number"
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
        />
        <hr />
        <label className="mb-4 block text-white">Age:</label>
        <input
          type="number"
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
        />
        <hr />
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white"
        >
          Submit
        </button>
      </form>

      {/* PopUp Component */}
      {isPopUpVisible && <PopUp onClose={closePopUp} />}
    </section>
  );
};

export default LoanForm;
