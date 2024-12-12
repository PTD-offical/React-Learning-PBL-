import React, { useState } from "react";
import PopUp from "./PopUp";

const LoanForm = () => {
  //! Use state hook to manage states for Inputs
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    number: "",
    age: "",
  });

  //! Pop-up logic
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  //! Submit Logic
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form refresh

    // Validation logic
    if (!loanInputs.name || !loanInputs.number || !loanInputs.age) {
      alert("All fields are required.");
      return;
    }

    // If validation passes
    setIsSubmitted(true); // Update submission state
    setIsPopUpVisible(true); // Show the pop-up
  };

  const closePopUp = () => {
    setIsPopUpVisible(false); // Hide the pop-up
  };

  return (
    <section className="flex h-[450px] w-[400px] flex-col items-center justify-center rounded-lg bg-gray-800 p-6 shadow-2xl">
      <form className="w-full text-black" onSubmit={handleSubmit}>
        <h1 className="mb-4 text-3xl text-center text-white font-extrabold font-sans">
          Loan_Form
        </h1>
        <hr />
        <label className="mb-4 block text-white">Name:</label>
        <input
          type="text"
          value={loanInputs.name}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, name: e.target.value })
          }
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
        />
        <hr />
        <label className="mb-4 block text-white">Number:</label>
        <input
          type="number"
          value={loanInputs.number}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, number: e.target.value })
          }
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
        />
        <hr />
        <label className="mb-4 block text-white">Age:</label>
        <input
          type="number"
          value={loanInputs.age}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, age: e.target.value })
          }
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
        />
        <hr />
        <button
          type="submit"
          className={`mt-4 w-full rounded-md p-2 text-white ${
            isSubmitted ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {isSubmitted ? "Submitted!" : "Submit"}
        </button>
      </form>

      {/* PopUp Component To show it */}
      {isPopUpVisible && <PopUp onClose={closePopUp} />}
    </section>
  );
};

export default LoanForm;
