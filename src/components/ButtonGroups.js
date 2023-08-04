/**
 * Reusable button group component for calculator app.
 * Renders buttons for numbers, operators, equals, and clear.
 */

const ButtonGroups = ({ onClick }) => {

  // Array of button values 
  const buttons = [
    "c", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="
  ];

  return (
    <>
      {buttons.map(value => {
        
        // Number button styling
        if(typeof value === "number") {
          return (
            <button 
              className="text-xl bg-[#379683] hover:bg-[#8ee4af] hover:text-[#05386b] w-20 h-12 my-2 rounded"
              value={value}
              onClick={onClick}
            >
              {value}
            </button>
          );
        }

        // Clear and equals button styling 
        if(value === "c" || value === "=") {
          return (
            <button
              className="text-xl bg-[#DA9DAC] text-[#05386b] hover:bg-[#fffff0] w-40 h-12 my-2  rounded"
              value={value}
              onClick={onClick}  
            >
              {value}
            </button>
          );
        }
        
        // Operator button styling
        return (
          <button
            className="text-xl bg-[#edf5e1] text-[#05386b] hover:bg-[#8ee4af] w-20 h-12 my-2 rounded"
            value={value}
            onClick={onClick}
          >
            {value}
          </button>
        );
      })}
    </>
  );
}

export default ButtonGroups;