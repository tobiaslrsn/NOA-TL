import styled from "styled-components";

export const FadeAnimation = styled.div`
  animation: fadeLoader 2.5s infinite linear;
  @keyframes fadeLoader {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;
