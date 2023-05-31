import React, { useState } from "react";
import s from "./ColorBlocks.module.scss";

const ColorBlocks = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const colors = [
    { color: "#E94848", name: "Red" },
    { color: "#43BF57", name: "Green" },
    { color: "#E4E4E4", name: "Light Gray" },
    { color: "#3E3E3E", name: "Dark Gray" },
    { color: "#675A5A", name: "Brown" },
    { color: "#864F4F", name: "Dark Red" },
  ];

  const handleColorClick = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className={s.ColorBlocks}>
      {colors.map((colorObj) => (
        <div
          key={colorObj.color}
          className={`${s.ColorBlock} ${
            selectedColors.includes(colorObj.color) ? s.Selected : ""
          }`}
          style={{ backgroundColor: colorObj.color }}
          onClick={() => handleColorClick(colorObj.color)}
        >
          {selectedColors.includes(colorObj.color) && (
            <div className={s.Checkbox}>
              <span className={s.Checkmark}>&#10003;</span>
            </div>
          )}
        </div>
      ))}
    </div>

  );
};

export default ColorBlocks;
