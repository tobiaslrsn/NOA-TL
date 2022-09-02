import { FadeAnimation } from "./styles/AnimationStyles";
import { LoaderStyle } from "./styles/LoaderStyles";

export const Loader = () => {
  return (
    <>
      <LoaderStyle>
        <FadeAnimation>LOADING REPO...</FadeAnimation>
      </LoaderStyle>
    </>
  );
};
