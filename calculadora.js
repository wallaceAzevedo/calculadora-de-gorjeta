import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';



function Calculadora(){

  const [subtotal, setSubtotal] = useState(0);
  const [numDiners, setNumDiners] = useState(0);
  const [tipPercentage, setTipPercetnage] = useState(0);
  const [result, setResult] = useState({});
  const submit = (e) => {
    e.preventDefault();
    if (+subtotal <= 0 || +numDiners <= 0 || +tipPercentage <= 0) {
      return;
    }
    const total = +subtotal * (1 + +tipPercentage);
    setResult({ total, totalPerDiner: +total / +numDiners });
  };

   return (
      <div class="container " style={{marginTop:'80px'}}>          
        <form onSubmit={submit}>
          <fieldset>
            <label>subtotal</label>
              <input
                  value={subtotal}
                  onChange={(e) => setSubtotal(e.target.value)}
                />
          </fieldset>
          <fieldset>
            <label>number of people sharing the bill</label>
              <input
                  value={numDiners}
                  onChange={(e) => setNumDiners(e.target.value)}
                />
            </fieldset>
          <fieldset>
            <label>tip percentage</label>
              <select
                  value={tipPercentage}
                  onChange={(e) => setTipPercetnage(e.target.value)}
                >
                <option value="0">0%</option>
                <option value="0.05">5%</option>
                <option value="0.1">10%</option>
                <option value="0.15">15%</option>
                <option value="0.2">20%</option>
              </select>
          </fieldset>
      <button type="submit">Calculate</button>
            </form>
            <p>total: {result.total && result.total.toFixed(2)}</p>
            <p>
              total per diner:{" "}
              {result.totalPerDiner && result.totalPerDiner.toFixed(2)}
            </p>
      </div>
        
  );
}

export default Calculadora;