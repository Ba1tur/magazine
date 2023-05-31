import React from "react";
import { Checkbox } from 'antd';
const Checkboxes = ({children}) => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
  return <Checkbox onChange={onChange}>{children}</Checkbox>;
};

export default Checkboxes;