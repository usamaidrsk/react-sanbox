import "./styles.css";
import React, { useState } from "react";

function RenderVariousItemProp(props) {
  const [dateState, setDateState] = useState(new Date());
  if (!props.item) {
    setInterval(() => setDateState(new Date()), 60);
  }

  return !props.item ? (
    <p>
      {dateState.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })}{" "}
      {dateState.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      })}
    </p>
  ) : Array.isArray(props.item) ? (
    props.item.map((itm) => <div>{itm}</div>)
  ) : (
    <div>{props.item}</div>
  );
}

export default function App() {
  return (
    <div className="App">
      <RenderVariousItemProp item={false} />
      <RenderVariousItemProp item="just a string" />
      <RenderVariousItemProp item={["cow", "goat"]} />
    </div>
  );
}
