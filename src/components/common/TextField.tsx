import React, { ChangeEventHandler } from "react"

type TextFieldType = {
  label: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

function TextField(props: TextFieldType): JSX.Element {
  return (
    <div>
      <div className="my-2">{props.label}:</div>
      <input
        className="border-[1px] border-solid border-[#e0e0e0] px-2 py-1 w-full rounded-[3px]"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextField
