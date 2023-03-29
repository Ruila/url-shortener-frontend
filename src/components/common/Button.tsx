import React from "react"

type ButtonType = {
  text: string
  onClick: () => void
}

function Button(props: ButtonType): JSX.Element {
  return (
    <div
      className="px-4 cursor-pointer py-1 bg-white rounded-[15px] drop-shadow-md text-[#2f2f2f]"
      onClick={props.onClick}
    >
      {props.text}
    </div>
  )
}

export default Button
