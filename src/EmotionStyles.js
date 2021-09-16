import styled from '@emotion/styled';

export const ColorText = styled.p`
  text-transform: uppercase;
  font-size: 5em;
  font-weight: bold;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 32px;
  background-color: #acacac;
  font-size: 24px;
  border-radius: 4px;
  border: 0px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const Dropdown = styled.div`
  width: 150px;
  height: 50px;
  position: absolute;
  z-index: 1;
`;

export const DropdownOption = styled.button`
  padding: 10px;
  background-color: #acacac;
  width: 150px;
  height: 50px;
  font-size: 16px;
  border: 0px;
  color: black;
  &:hover {
    background-color: #a1a1a1;
    color: white;
  }
`;

export const Header = styled.header`
  background-color: ${(props) => props.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
