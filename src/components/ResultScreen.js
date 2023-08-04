/**
 * Reusable result display component for calculator app. 
 * Renders the current display value.
*/

const ResultScreen = ({ displayValue }) => {

  return (
    <div className="bg-[#edf5e1] text-[#05386b] text-3xl rounded border-4 border-[#05386b] h-28 flex justify-end items-center px-5 box-border overflow-hidden">
      {displayValue} 
    </div>
  );

};

export default ResultScreen;