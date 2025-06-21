
import React from "react";
import Step from "./Step";
import './../styles/App.css';

const App = () => {
  const [step, setStep] = React.useState(1);
  
  const handlenext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      //alert('Form submitted');
    }
  }
  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  return (
    <div>
      <Step step={step} handlePrev={handlePrev} handlenext={handlenext} />
    </div>
  )
}

export default App
