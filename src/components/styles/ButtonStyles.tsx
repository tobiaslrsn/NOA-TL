import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 1rem 1rem 0rem;
  width: 180px;
  border-radius: 60px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-weight: 400;
  gap: 0.5rem;
`;

export const NormalButtonStyle = styled(Button)`
  background-color: white;
  color: black;
  border: 2px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const PrimaryButtonStyle = styled(Button)`
  background-color: hotpink;
  color: white;
  border: none;

  &:hover {
    background-color: rebeccapurple;
  }
`;

export const DisabledButtonStyle = styled(Button)`
  background-color: gray;
  color: white;
  border: 2px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
