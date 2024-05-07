import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../features/shoppingListSlice";

const ShoppingList = () => {
  const itemsList = useSelector((state) => state.shoppingList);
  console.log(itemsList);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Shopping cart list:</h2>
        <ol>
          {itemsList.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => dispatch(removeItems(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ShoppingList;
