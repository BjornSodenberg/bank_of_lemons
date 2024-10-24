import React from "react";
import CheckIcon from "../../assets/icons/check";

interface CustomCheckboxProps {
  selected: boolean;
  onChange: (selected: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  selected,
  onChange,
}) => {
  return (
    <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked)}
        style={{ display: "none" }}
      />
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1px solid #000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.2s ease",
        }}
        onClick={() => onChange(!selected)}
      >
        {selected && (
          <CheckIcon fill="#000000"/>
        )}
      </div>
    </label>
  );
};

export default CustomCheckbox;
