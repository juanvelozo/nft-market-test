export const EthIcon = ({
  color = "white",
}: {
  color?: string;
}): JSX.Element => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_601_23463)">
        <path
          d="M2.70154 7.13095L6.9994 0L11.2958 7.13095L6.99963 9.67017L2.70154 7.13095Z"
          fill={color}
        />
        <path
          d="M2.70154 7.94531L6.9994 10.4844L11.2991 7.94531L6.99963 14.0001L2.70154 7.94531Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_601_23463">
          <rect width="14" height="14" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
