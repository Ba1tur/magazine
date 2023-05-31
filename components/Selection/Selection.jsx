import React from "react";
import s from "./Selection.module.scss";
import { Select, Space } from "antd";
const Selection = ({ children }) => {
  return (
    <div className={s.Selection}>
      <Select
        defaultValue="Гостинные"
        style={{
          width: "100%",
        }}
        allowClear
        options={[
          {
            value: "Гостинные",
            label: "Lucy",
          },
        ]}
      />
    </div>
  );
};

export default Selection;
