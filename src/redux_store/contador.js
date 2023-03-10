import { createAction } from "@reduxjs/toolkit";

export const incrementar = createAction("INCREMENTAR");
export const decrementar = createAction("DECREMENTAR");

//react toolkit ja vem com immer
const contador = (state = 0, action) => {
  switch (action.type) {
    case incrementar.type:
      return state + 1;
    case decrementar.type:
      return state - 1;
    default:
      return state;
  }
};

export default contador;
