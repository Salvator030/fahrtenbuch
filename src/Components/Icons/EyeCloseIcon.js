import { rem } from "@mantine/core";

function EyeCloseIcon({ size, style, ...others }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-eye-closed"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"></path>
      <path d="M3 15l2.5 -3.8"></path>
      <path d="M21 14.976l-2.492 -3.776"></path>
      <path d="M9 17l.5 -4"></path>
      <path d="M15 17l-.5 -4"></path>
    </svg>
  );
}

export default EyeCloseIcon;
