//REACT
import { useState } from "react";
//ICONS
import { BiPlusMedical } from "react-icons/bi";
import { ImMinus } from "react-icons/im";
//DATA
import repositoriesList from "../data/repositoriesList";
//STYLED-COMPONENTS
import { NormalButtonStyle, PrimaryButtonStyle } from "./styles/ButtonStyles";
import { Thin } from "./styles/TextStyles";
import { FlexRowContainer } from "./styles/WrapperStyles";

interface ICounter {
  liftCount(counter: number): void;
}

export const Counter = (props: ICounter) => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    let decrementCount = counter - 1;

    if (counter > 0) {
      props.liftCount(decrementCount);
      setCounter(decrementCount);
    }
    /* 
    if (counter === 0) {
      setCounter(repositoriesList.length - 1);
    } */
  };

  const increment = () => {
    let incrementCount = counter + 1;

    if (counter < repositoriesList.length - 1) {
      props.liftCount(incrementCount);
      setCounter(incrementCount);
    }
    /* 
    if (counter === repositoriesList.length - 1) {
      setCounter(0);
    } */
  };

  // props.liftCount(counter);

  return (
    <>
      <FlexRowContainer>
        <NormalButtonStyle
          onClick={() => {
            decrement();
          }}
        >
          <ImMinus /> DECREMENT
        </NormalButtonStyle>

        <Thin>Counter: {counter}</Thin>

        <PrimaryButtonStyle
          onClick={() => {
            increment();
          }}
        >
          <BiPlusMedical /> INCREMENT
        </PrimaryButtonStyle>
      </FlexRowContainer>
    </>
  );
};
