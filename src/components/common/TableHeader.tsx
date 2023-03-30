import React from "react"

function TableHeader(): JSX.Element {
  return (
    <div className="p-4 flex bg-[#3b3b3b] text-white">
      <div className="flex-[4]">Shorten URL</div>
      <div className="flex-[4]">Origin URL</div>
      <div className="flex-1">Viewed</div>
      <div className="flex-[2]">Actions</div>
    </div>
  )
}

export default TableHeader
