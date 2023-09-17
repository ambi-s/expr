import React, { useState } from "react";
import parse from "../parser";

export default function App(): React.ReactElement {
  const [currentExpression, setCurrentExpression] = useState("");

  return (
    <>
      <input value={currentExpression} onChange={e => setCurrentExpression(e.target.value)} />
      <div className="output">{parse(currentExpression)}</div>
    </>
  );
}
