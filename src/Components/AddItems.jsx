import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsync } from "../features/shoppingListSlice";

const AddItems = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    e.preventDefault();

    dispatch(addAsync(inputValue));
    setInputValue("");
  };

  return (
    <>
      <div>
        <h2>Add items</h2>
        <form>
          <label>Item:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" onClick={handleAddItem}>
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItems;
