import React from "react"
import Button from "./Button"

type TableRowType = {
  shortenURL: string
  originURL: string
}

function TableRow(props: TableRowType): JSX.Element {
  return (
    <div className="p-4 flex text-[#3b3b3b] shadow-md">
      <div className="w-[180px]">shorten URL</div>
      <div className="w-[180px]">{props.shortenURL}</div>
      <div className="w-[220px] flex justify-between">
        <Button text="create" onClick={() => {}} />
        <Button color="#54c64a" text="edit" onClick={() => {}} />
        <Button color="#fc5151" text="delete" onClick={() => {}} />
      </div>
    </div>
  )
}

export default TableRow
