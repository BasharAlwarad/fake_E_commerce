import { useReducer } from 'react';

const initialState = {
  firstValue: '',
  secondValue: '',
  result: '',
};

const reducer = (state, action) => {
  if (action.type === 'change') {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  if (action.type === 'calculate') {
    const firstNumber = Number(state.firstValue);
    const secondNumber = Number(state.secondValue);

    if (action.operation === '+') {
      return {
        ...state,
        result: firstNumber + secondNumber,
      };
    }

    if (action.operation === '-') {
      return {
        ...state,
        result: firstNumber - secondNumber,
      };
    }

    if (action.operation === '*') {
      return {
        ...state,
        result: firstNumber * secondNumber,
      };
    }

    if (action.operation === '/') {
      return {
        ...state,
        result: firstNumber / secondNumber,
      };
    }
  }

  return state;
};

const CalculatorReducer = () => {
  const [calculator, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch({ type: 'change', field: name, value });
  };

  const calculate = (operation) => {
    dispatch({ type: 'calculate', operation });
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

export default CalculatorReducer;
