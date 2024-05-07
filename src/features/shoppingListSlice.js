import { createSlice } from "@reduxjs/toolkit";

const initialState = { shoppingList: [] };

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const item = {
        id: new Date().getTime(),
        title: action.payload,
      };
      state.shoppingList.push(item);
    },
    removeItems: (state, action) => {
      state.shoppingList = state.shoppingList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItems, removeItems } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
