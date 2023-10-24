export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const BASICCALC = "BASIC TYPE ON SCREEN";
export const CALCULATE = "CALCULATE";

export const CLEAR = "CLEAR";

export const MEMORY_PLUS = "MEMORYPLUS Şu anki total + Memory";
export const MEMORY_RECALL = "MEMORYPLUS Şu anki Memory=>Total";
export const MEMORY_CLEAR = "MEMORY_CLEAR Memory =0";
export const screenType = (number) => {
  return { type: BASICCALC, payload: Number(number) };
};
