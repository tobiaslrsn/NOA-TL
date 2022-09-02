import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FlexRowContainer = styled(FlexContainer)`
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FlexColumnContainer = styled(FlexContainer)`
  width: 50%;
  flex-direction: column;
  min-width: 300px;
  height: 40vh;
  text-align: center;
  word-wrap: break-word;
  margin-top: 2rem;
`;
