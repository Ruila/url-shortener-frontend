import React from "react"
import Button from "./Button"

type TableRowType = {
  shortenURL: string
  originURL: string
}

function TableRow(props: TableRowType): JSX.Element {
  return (
    <div className="p-4 flex bg-[#3b3b3b] text-white">
      <div className="w-[180px]">shorten URL</div>
      <div className="w-[180px]">{props.shortenURL}</div>
      <div className="w-[220px] flex">
        <Button text="create" onClick={() => {}} />
        <Button color="#54c64a" text="edit" onClick={() => {}} />
        <Button color="#fc5151" text="delete" onClick={() => {}} />
      </div>
    </div>
  )
}

export default TableRow
