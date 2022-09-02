import { FadeAnimation } from "./styles/AnimationStyles";
import { FlexColumnContainer } from "./styles/WrapperStyles";

export const Error = () => {
  return (
    <>
      <FlexColumnContainer>
        <h1>👿</h1>
        <h2>Ooops, something went wrong...</h2>
        <FadeAnimation>ERROR 404</FadeAnimation>
        <h5>This repository couldn't be found.</h5>
      </FlexColumnContainer>
    </>
  );
};
