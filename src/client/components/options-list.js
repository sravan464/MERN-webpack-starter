import React from 'react';

const OptionsList = ({ options }) => (
  <React.Fragment>
    {options
      && options.map(item => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
  </React.Fragment>
);
export default OptionsList;
