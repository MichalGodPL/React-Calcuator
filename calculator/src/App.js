import { useState } from 'react';

function App() {

  const [ calc, setCalc ] = useState("");

  const [ result, setresult ] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {

    if (

      ops.includes(value) && calc == '' || ops.includes(value) && ops.includes( calc.slice(-1) )

    ) {

      return;

    }

    setCalc(calc + value);

    if ( !ops.includes(value) ) {

      setresult( eval(calc + value).toString() );

    }

  }

  const createDigits = () => {
    
    const Digits = [];

    for (let i = 1; i < 10; i++) {

      Digits.push(

        <button onClick = { () => updateCalc( i.toString() ) } key = {i} > {i} </button>

      )

    }

    return Digits;

  }

  const calculate = () => {

    setCalc( eval(calc).toString() );

  }

  const deleteLast = () => {

    if( calc == '' ) {

      return;

    }

    const value = calc.slice(0, -1);

    setCalc(value);

  }

  return (
    <div className="App">
      
      <div className = "Calculator">

        <div className = "Display">

          {result ? <span>( {result} )</span> : ''} {calc || "0"}

        </div>

        <div className = "Operators">

          <button onClick = { () => updateCalc('/') }>/</button>

          <button onClick = { () => updateCalc('*') }>*</button>

          <button onClick = { () => updateCalc('+') }>+</button>

          <button onClick = { () => updateCalc('-') }>-</button>

          <button onClick = {deleteLast}>DEL</button>
          
        </div>  

        <div className = "Digits">

          { createDigits() }

          <button onClick = { () => updateCalc('0') }>0</button>

          <button onClick = { () => updateCalc('.') }>.</button>

          <button onClick = {calculate}>=</button>

        </div>

      </div>

    </div>

  );
  
}

export default App;
