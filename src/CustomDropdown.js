import { useState } from 'react';
import { Button, Dropdown, DropdownOption } from './EmotionStyles';

export default function CustomDropdown(props) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  function toggleDropdown() {
    setDropdownIsOpen((previousState) => !previousState);
  }

  function optionSelected(currentOption) {
    props.setOptions(currentOption);
    toggleDropdown();
  }

  return (
    <>
      <Button onClick={() => toggleDropdown()}>{props.option}</Button>
      {dropdownIsOpen && (
        <Dropdown>
          {props.options.map((currentOption) => (
            <DropdownOption
              key={currentOption}
              onClick={() => optionSelected(currentOption)}
            >
              {currentOption}
            </DropdownOption>
          ))}
        </Dropdown>
      )}
    </>
  );
}
