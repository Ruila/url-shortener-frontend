import React, { PropsWithChildren } from "react"

type BoxType = {}

function Box(props: PropsWithChildren<BoxType>): JSX.Element {
  return (
    <div className="p-4 flex flex-col justify-center items-center bg-white rounded-[10px] min-w-[240px] min-h-[240px]">
      {props.children}
    </div>
  )
}

export default Box
