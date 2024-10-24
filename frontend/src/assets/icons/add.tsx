import { Icon } from "../../models/icon";

const AddIcon = ({ width, height, fill }: Icon) => {
  return (
    <svg
      width={width || "16"}
      height={height || "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        stroke={fill || 'black'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 8H11"
        stroke={fill || 'black'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 5V11"
        stroke={fill || 'black'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AddIcon;
