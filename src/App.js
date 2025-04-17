
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
  return (
    <>
      <BillInput />
      <SelectPercentage>How did you like the service?</ SelectPercentage>
      <SelectPercentage>How did your friend like the service?</ SelectPercentage>
      <Result />
      <Reset />
    </>
  )
}

function BillInput() {
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setAmount(value);
  }

  return (
    <div className="bill">
      <label htmlFor="bill">How much was the bill?</label>
      <input 
        type="number" 
        id="bill" 
        placeholder="0.00"
        value={amount}
        onChange={handleChange} />
    </div>
  )
}

function SelectPercentage({children}) {
  return (
    <>
    <div className="service">
      <label htmlFor="service">{children}</label>
      <select id="service">
        <option value="20">Absolutely amazing! (20%)</option>
        <option value="10">It was good (10%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="0">Dissatisfied (0%)</option>
      </select>
    </div>
    </>
  )
}


function Result() {
  return (
    <div className="total">
      <div>You pay:</div>
      <div>$92 ($80 + $12 tip)</div>
    </div>
  )
}

function Reset() {
  return (
    <div className="button">
      <button type="button">Reset</button>
    </div>
  )
}


export default App;
