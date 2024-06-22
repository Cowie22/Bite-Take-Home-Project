import { memo } from 'react'

const ArrowRightWhite = (props) => {
  return (
    <svg
      width={11}
      height={12}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M0 6h10H0zM5 1l5 5-5-5zM10 6l-5 5 5-5z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default memo(ArrowRightWhite)