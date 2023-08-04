/**
 * Reusable result display component for calculator app. 
 * Renders the current display value.
*/

const ResultScreen = (props) => {

  return (
    <div className="bg-[#edf5e1] rounded border-4 border-[#05386b] h-28 flex flex-col items-end justify-evenly px-5 box-border overflow-hidden">
      <div className=" text-xs text-slate-500 h-6 mt-4">{props.history}</div>
      <div className=" text-[#05386b] text-3xl h-16">{props.result}</div>
    </div>
  );

};

export default ResultScreen;