import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR,
  MEMORY_PLUS,
  MEMORY_RECALL,
  MEMORY_CLEAR,
  screenType,
  BASICCALC,
  CALCULATE,
  applyNumber,
} from "./../actions";

export const initialState = {
  total: 100,
  operation: "*",
  memory: 100,
  screen: 0,
  temp: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const basitCalc = (screen, num2) => {
  return `${screen}${num2}`;
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        temp: state.screen,
      };

    case CLEAR:
      return {
        ...state,
        total: 0,
        screen: 0,
      };

    case MEMORY_CLEAR: {
      return {
        ...state,
        memory: 0,
      };
    }

    case MEMORY_RECALL: {
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };
    }

    case MEMORY_PLUS: {
      return {
        ...state,
        memory: state.total,
      };
    }
    case BASICCALC: {
      return {
        ...state,
        screen:
          state.screen === 0
            ? action.payload
            : basitCalc(state.screen, action.payload),
      };
    }
    case CALCULATE: {
      const calculation = calculateResult(
        state.screen,
        state.temp,
        state.operation
      );
      return {
        ...state,
        total: calculation,
        screen: calculation,
        temp: 0,
      };
    }

    default:
      return state;
  }
};

export default reducer;
