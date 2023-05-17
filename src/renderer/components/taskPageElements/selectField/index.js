import React from 'react';
import Select from 'react-select';

const SelectField = ({options, onChange, index, defaultValue, placeholder, minWidth}) => {
  return (
    <Select options={options}
            isSearchable={false}
            onChange={(choice) => onChange(choice.label, index)}
            placeholder={placeholder}
            defaultValue={defaultValue}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: 'rgb(77,77,77)',
                borderColor: "rgb(77,77,77)",
                borderWidth: "2px",
                minWidth: minWidth,
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#6495ed"
                }
              }),
              singleValue: (baseStyles, state) => ({
                ...baseStyles,
                color: "white",

              }),
              menu: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: 'rgb(77,77,77)',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused && '#6495ed',
              }),
            }}/>
  );
};

export default SelectField;
