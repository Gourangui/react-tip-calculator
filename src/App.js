
import { useState } from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <TipCalculator/>
    </div>
  );
}

function TipCalculator(){

  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  
  const tip = ((bill * (percentage1 + percentage2)) / 100) / 2;
  
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }


  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>How did you like the service?</ SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>How did your friend like the service?</ SelectPercentage>
      {bill > 0 && 
        <>
          <Result bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      }
    </>
  )
}

function BillInput({bill, onSetBill}) {

  const handleChange = (e) => {
    const value = Number(e.target.value);
    onSetBill(value);
  }

  return (
    <div className="bill">
      <label htmlFor="bill">How much was the bill?</label>
      <input 
        type="text" 
        id="bill" 
        placeholder="Bill amount"
        value={bill}
        onChange={handleChange} />
    </div>
  )
}

function SelectPercentage({children, percentage, onSelect}) {
  
  return (
    <>
    <div className="service">
      <label htmlFor="service">{children}</label>
      <select id="service" value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="20">Absolutely amazing! (20%)</option>
        <option value="10">It was good (10%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="0">Dissatisfied (0%)</option>
      </select>
    </div>
    </>
  )
}


function Result({bill, tip}) {
  return (
    <div className="total">
      <div>You pay:</div>
      <div>${bill + tip} (${bill} + ${tip} tip)</div>
    </div>
  )
}

function Reset({onReset}) {
  return (
    <div className="button">
      <button type="button" onClick={onReset}>Reset</button>
    </div>
  )
}


export default App;
