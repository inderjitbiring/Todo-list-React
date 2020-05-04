import React from "react";

function TodoItem(props) {
  return (
    <div>
      <li>
        {props.text}
        <button
          className="item-btn"
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          X
        </button>
      </li>
    </div>
  );
}
export default TodoItem;
