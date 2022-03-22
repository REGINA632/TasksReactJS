import React from "react";

const Task = (props) => {
  console.log(props);
  console.log(props.name);

  const arr = [1, 2, 3, 4, 5];

  props.getNumber(arr);
  return <div></div>;
};

export default Task;
