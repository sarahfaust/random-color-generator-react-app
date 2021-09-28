import styled from '@emotion/styled';

export const ColorText = styled.p`
  text-transform: uppercase;
  font-size: 5em;
  font-weight: bold;
`;

export const ColorBox = styled.div`
  background-color: white;
  border: 4px solid white;
  border-radius: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 20px;
  transition-timing-function: ease-in-out;
  transition: 0.8s;
`;

export const Button = styled.button`
  margin: 8px;
  padding: 16px;
  width: 160px;
  background-color: #acacac;
  font-size: 24px;
  border-radius: 4px;
  border: 0px;
  color: #282c34;
  font-weight: 800;
  font-family: inherit;

  text-transform: capitalize;
  &:hover {
    color: white;
  }
`;

export const DropdownBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 1;
  background-color: #acacac;
  padding: 0 4px;
  border-radius: 4px;
`;

export const DropdownOption = styled.button`
  padding: 16px;
  background-color: #acacac;
  font-size: 16px;
  border: 0px;
  color: #282c34;
  font-family: inherit;
  text-transform: capitalize;
  &:hover {
    background-color: #999999;
    color: white;
    font-weight: 600;
  }
`;

export const Header = styled.header`
  background-color: ${(props) => props.color};
  min-height: 100vh;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  transition-timing-function: ease-in-out;
  transition: 0.8s;
`;

export const Input = styled.input`
  padding: 16px;
  background-color: #acacac;
  border: 0px;
  width: 80px;
  color: #282c34;
  font-size: 16px;
  font-family: inherit;
  text-transform: capitalize;
  text-align: center;
  -webkit-appearance: none;
  margin: 0;
  -moz-appearance: textfield;
  ::placeholder {
    color: white;
  }
`;
