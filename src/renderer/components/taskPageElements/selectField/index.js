import React from 'react';
import Select from 'react-select';

const SelectField = ({options, onChange, index, defaultValue, placeholder, minWidth, border}) => {
  return (
    <Select options={options}
            isSearchable={false}
            onChange={(choice) => onChange(choice.label, index)}
            placeholder={placeholder}
            defaultValue={defaultValue}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: 'rgb(77,77,77)',
                borderColor: (border) ? "rgb(33,33,33)" : "rgb(77,77,77)" ,
                borderWidth: "3px",
                minWidth: minWidth,
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#6495ed"
                },
              }),
              singleValue: (baseStyles) => ({
                ...baseStyles,
                color: "white",
                display: "flex",
                justifyContent: "center",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: 'rgb(77,77,77)',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                color: "white",
                display: "flex",
                justifyContent: "center",
                backgroundColor: state.isFocused && '#6495ed',
              }),
            }}/>
  );
};

export default SelectField;
