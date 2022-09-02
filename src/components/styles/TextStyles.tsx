import styled from "styled-components";

export const Thick = styled.p`
  font-weight: 900;
`;
export const Thin = styled.p`
  font-weight: 500;
`;

export const ThickParagraphStyle = styled(Thick)`
  color: black;
`;
export const ThinParagraphStyle = styled(Thin)`
  color: gray;
  line-height: 1.6rem;
  margin: -1rem;
`;
