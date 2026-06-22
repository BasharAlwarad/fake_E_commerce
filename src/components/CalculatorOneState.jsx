import { useState } from 'react';

const CalculatorOneState = () => {
  const [calculator, setCalculator] = useState({
    firstValue: '',
    secondValue: '',
    result: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCalculator((currentCalculator) => ({
      ...currentCalculator,
      [name]: value,
    }));
  };

  const calculate = (operation) => {
    const firstNumber = Number(calculator.firstValue);
    const secondNumber = Number(calculator.secondValue);

    if (operation === '+') {
      setCalculator((currentCalculator) => ({
        ...currentCalculator,
        result: firstNumber + secondNumber,
      }));
    }

    if (operation === '-') {
      setCalculator((currentCalculator) => ({
        ...currentCalculator,
        result: firstNumber - secondNumber,
      }));
    }

    if (operation === '*') {
      setCalculator((currentCalculator) => ({
        ...currentCalculator,
        result: firstNumber * secondNumber,
      }));
    }

    if (operation === '/') {
      setCalculator((currentCalculator) => ({
        ...currentCalculator,
        result: firstNumber / secondNumber,
      }));
    }
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 rounded-box bg-base-100 p-6 shadow-xl">
      <h2 className="text-2xl font-bold">Calculator</h2>

      <input
        type="number"
        name="firstValue"
        value={calculator.firstValue}
        onChange={handleChange}
        placeholder="First value"
        className="input input-bordered w-full"
      />

      <input
        type="number"
        name="secondValue"
        value={calculator.secondValue}
        onChange={handleChange}
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
        <span>
          Result: {calculator.result === '' ? '0' : calculator.result}
        </span>
      </div>
    </div>
  );
};

export default CalculatorOneState;
