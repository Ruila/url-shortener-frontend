import React from "react"

type ButtonType = {
  text: string
  onClick: () => void
  color?: string | undefined
  classes?: string
}

function Button(props: ButtonType): JSX.Element {
  return (
    <div
      className={`px-4 text-[12px] cursor-pointer py-1 rounded-[8px] drop-shadow-md text-white ${props.classes}`}
      onClick={props.onClick}
      style={{
        backgroundColor: props.color ? props.color : "#2d84ff",
      }}
    >
      {props.text}
    </div>
  )
}

export default Button
