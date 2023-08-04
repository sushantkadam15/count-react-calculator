import CalculatorWrapper from "./components/CalculatorWrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <CalculatorWrapper />
      <Footer />
     
    </div>
  );
}

export default App;
