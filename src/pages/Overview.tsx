import React, { useContext, useEffect } from "react"
import Box from "../components/common/Box"
import TableRow from "../components/common/TableRow"
import TableHeader from "../components/common/TableHeader"
import { ModalContext } from "../store/context/ModalContext"

const data = [
  {
    origin: "https://123.com",
    shorten: "https://12312.com",
  },
  {
    origin: "https://123.com",
    shorten: "https://1237.com",
  },
  {
    origin: "https://123.com",
    shorten: "https://1235.com",
  },
  {
    origin: "https://123.com",
    shorten: "https://1234.com",
  },
  {
    origin: "https://1231.com",
    shorten: "https://123.com",
  },
  {
    origin: "https://123.com",
    shorten: "https://1232.com",
  },
  {
    origin: "https://123.com",
    shorten: "https://123245.com",
  },
  {
    origin: "https://123.com",
    shorten: "https://1232456.com",
  },
]
function Overview(): JSX.Element {
  const ctx = useContext(ModalContext)

  const renderURLs = data.map(item => (
    <TableRow
      key={item.shorten}
      shortenURL={item.shorten}
      originURL={item.origin}
    />
  ))

  useEffect(() => {
    ctx.openModal({
      title: "gogog",
      content: "xs",
    })
  }, [])
  return (
    <div className="flex justify-center items-center h-full">
      <Box>
        <div className="text-[24px] mb-4">URL Overview</div>
        <TableHeader />
        <div className="max-h-[380px] overflow-auto">{renderURLs}</div>
      </Box>
    </div>
  )
}

export default Overview
