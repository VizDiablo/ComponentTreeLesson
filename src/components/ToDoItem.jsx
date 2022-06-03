import React, { useState } from "react";

///To strike through item that are clicked on
// function ToDoItem(props) {
//   const [isComplete, setCompletion] = useState(false);
//   function handleClick() {
//     setCompletion((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isComplete ? "line-through" : "none" }}>
//         {props.item}
//       </li>
//     </div>
//   );
// }

///To delete from to do list (alter parent component)

//If props.id is passed in the on click function directly, that function will
//be called when this item is rendered. In order to make it only be called
//when the button is clicked, it must be wrapped inside another function
function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItem;
