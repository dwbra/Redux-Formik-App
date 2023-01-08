import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle",
    error: "",
    fields: [],
    step: 0,
  },
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    setFormStep: (state, action) => {
      const { step } = action.payload;
      if (typeof step === Number) {
        state.step = step;
      } else {
        state.error = "formStep is not a number.";
      }
    },
    addFormData: (state, action) => {},
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setFormStep,
  addFormData,
} = formSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default formSlice.reducer;
