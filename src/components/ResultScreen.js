/**
 * Reusable result display component for calculator app. 
 * Renders the current display value.
*/

const ResultScreen = (props) => {

  return (
    <div className="bg-[#edf5e1] text-[#05386b] text-3xl rounded border-4 border-[#05386b] h-28 flex flex-col px-5 box-border overflow-hidden">
      <div>{props.inputHistory}</div>
      <div>{props.displayValue}</div>
       
    </div>
  );

};

export default ResultScreen;