import React, { useState } from "react"
import Button from "./Button";
import Count from "./Count";

function Counter() {
const [count, setCount] = useState(0);
const feedback = count >10 ? "It's higher than 10!" : "Keep counting..."

const incrementCount = () => {
    setCount(count + 1);
  };
return (
    <div>
        {feedback}
        <Count count={count} />
        <Button handleAddCount={incrementCount}/>
    </div>
)
}

export default Counter