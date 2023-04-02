import React from "react"
import Button from "./Button"

type TableRowType = {
  urlId: number
  shortenURL: string
  originURL: string
  viewed: number
  delete: (urlId: number) => void
}

function TableRow(props: TableRowType): JSX.Element {
  return (
    <div className="p-4 flex items-center text-[#3b3b3b] hover:shadow-md">
      <div className="flex-[4] break-all">
        <a href={props.shortenURL} target="_blank" rel="noreferrer">
          {props.shortenURL}
        </a>
      </div>
      <div className="flex-[4] break-all">
        <a href={props.originURL} target="_blank" rel="noreferrer">
          {props.originURL}
        </a>
      </div>
      <div className="flex-1 min-w-[40px] text-center">{props.viewed}</div>
      <div className="flex-[2] flex justify-between">
        <Button
          color="#fc5151"
          text="delete"
          onClick={() => props.delete(props.urlId)}
        />
      </div>
    </div>
  )
}

export default TableRow
