import { useState } from "react";

import SubHeading from "../SubHeading/SubHeading";
import StyledButton from "../StyledButton/StyledButton";

const StyledCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <SubHeading contents={count} />
      <StyledButton buttonType="primary" onBtnClick={incrementCount}>
        +
      </StyledButton>
      <StyledButton buttonType="danger" onBtnClick={decrementCount}>
        -
      </StyledButton>
    </div>
  );
};

export default StyledCounter;
