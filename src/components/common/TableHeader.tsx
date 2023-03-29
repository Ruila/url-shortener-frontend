import React from "react"

function TableHeader(): JSX.Element {
  return (
    <div className="p-4 flex bg-[#3b3b3b] text-white">
      <div className="w-[180px]">shorten URL</div>
      <div className="w-[180px]">origin URL</div>
      <div className="w-[180px]">Actions</div>
    </div>
  )
}

export default TableHeader
