// Import React Hooks
import { useState, useRef } from "react";

// Import reusable UI components
import ResultScreen from "./ResultScreen";
import ButtonGroups from "./ButtonGroups";

// Calculator component
const CalculatorWrapper = () => {
  // State to store the current display value
  const [displayValue, setDisplayValue] = useState(0);

  // Reference to track calculation history
  let inputHistoryRef = useRef("");

  // References to track last input types
  let lastInputWasEqualsRef = useRef(false);
  let lastInputWasOperatorRef = useRef(false);

  // Helper to append to calculation history
  const updateCalculationHistory = (newValue) => {
    inputHistoryRef.current += newValue;
  };

  // Handle button click based on input type
  const handleButtonClick = (event) => {
    event.preventDefault();

    // Get the clicked button value
    let inputValue = event.target.value;

    // Regex to test for number vs operator
    const numberRegex = /[0-9]/;
    const operatorsRegex = /^(?!.*\+\s*\/\s*-)[+\/*%-]$/;

    // Number button logic
    if (numberRegex.test(inputValue) || inputValue === ".") {
      // Reset after equals
      if (lastInputWasEqualsRef.current) {
        inputHistoryRef.current = inputValue;
        setDisplayValue(inputValue);
        lastInputWasEqualsRef.current = false;

        // Continue number input
      } else {
        // Follows operator
        if (lastInputWasOperatorRef.current) {
          setDisplayValue(inputValue);
          updateCalculationHistory(inputValue);
          lastInputWasOperatorRef.current = false;

          // Append to display
        } else {
          updateCalculationHistory(inputValue);
          setDisplayValue((currentDisplayValue) =>
            displayValue === 0 ? inputValue : currentDisplayValue + inputValue
          );
        }
      }

      // Operators Logic
    } else if (
      operatorsRegex.test(inputValue) &&
      lastInputWasOperatorRef.current === false
    ) {
      updateCalculationHistory(inputValue);
      lastInputWasOperatorRef.current = true;
      lastInputWasEqualsRef.current = false;
      setDisplayValue("");

      // Equals Logic
    } else if (
      inputValue === "=" &&
      lastInputWasOperatorRef.current === false
    ) {
      const result = eval(inputHistoryRef.current);
      inputHistoryRef.current = result;

      setDisplayValue(result);
      lastInputWasEqualsRef.current = true;

      // Clear Logic
    } else if (inputValue === "c") {
      setDisplayValue(0);
      inputHistoryRef.current = "";
      lastInputWasEqualsRef.current = false;
      lastInputWasOperatorRef.current = false;
    }
  };

  // JSX component markup
  return (
    <main className="w-screen h-screen ">
      <h1 className="text-center drop-shadow-sm my-14 tracking-widest">
        COUNT()
      </h1>

      {/* Calculator app starts here */}
      <div className="bg-[#05386b] w-96 mx-auto mt-10 rounded-md drop-shadow-2xl">
        <ResultScreen displayValue={displayValue} />
        <div className="w-11/12 flex flex-wrap justify-around mx-auto pb-2 ">
          <ButtonGroups onClick={(event) => handleButtonClick(event)} />
        </div>
      </div>
    </main>
  );
};

export default CalculatorWrapper;
