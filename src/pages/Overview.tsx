import React from "react"
import Box from "../components/common/Box"
import TableRow from "../components/common/TableRow"
import TableHeader from "../components/common/TableHeader"
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
]
function Overview(): JSX.Element {
  const renderURLs = data.map(item => (
    <TableRow
      key={item.shorten}
      shortenURL={item.shorten}
      originURL={item.origin}
    />
  ))
  return (
    <div className="flex justify-center items-center h-full">
      <Box>
        <div className="text-[24px] mb-4">URL Overview</div>
        <TableHeader />
        {renderURLs}
      </Box>
    </div>
  )
}

export default Overview
