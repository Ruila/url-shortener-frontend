import React, { PropsWithChildren } from "react"

type BoxType = {
  classes?: string
}

function Box(props: PropsWithChildren<BoxType>): JSX.Element {
  return (
    <div
      className={`p-8 flex flex-col bg-white rounded-[10px] min-w-[320px] ${props.classes}`}
    >
      {props.children}
    </div>
  )
}

export default Box
