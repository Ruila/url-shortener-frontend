import React from "react"
import Button from "./Button"

type TableRowType = {
  shortenURL: string
  originURL: string
  viewed: number
  delete: () => void
}

function TableRow(props: TableRowType): JSX.Element {
  return (
    <div className="p-4 flex text-[#3b3b3b] hover:shadow-md cursor-pointer">
      <div className="flex-[4]">shorten URL</div>
      <div className="flex-[4]">{props.shortenURL}</div>
      <div className="flex-1">{props.viewed}</div>
      <div className="flex-[2] flex justify-between">
        <Button color="#fc5151" text="delete" onClick={props.delete} />
      </div>
    </div>
  )
}

export default TableRow
