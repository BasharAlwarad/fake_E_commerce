import { useState } from 'react';

const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation) => {
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (operation === '+') setResult(firstNumber + secondNumber);
    if (operation === '-') setResult(firstNumber - secondNumber);
    if (operation === '*') setResult(firstNumber * secondNumber);
    if (operation === '/') setResult(firstNumber / secondNumber);
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 rounded-box bg-base-100 p-6 shadow-xl">
      <h2 className="text-2xl font-bold">Calculator</h2>

      <input
        type="number"
        value={firstValue}
        onChange={(event) => setFirstValue(event.target.value)}
        placeholder="First value"
        className="input input-bordered w-full"
      />

      <input
        type="number"
        value={secondValue}
        onChange={(event) => setSecondValue(event.target.value)}
        placeholder="Second value"
        className="input input-bordered w-full"
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => calculate('+')}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => calculate('-')}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => calculate('*')}
        >
          *
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => calculate('/')}
        >
          /
        </button>
      </div>

      <div className="alert alert-info">
        <span>Result: {result === '' ? '0' : result}</span>
      </div>
    </div>
  );
};

export default Calculator;
