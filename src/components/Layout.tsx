import React from "react"
import { Outlet } from "react-router-dom"
import LayoutHeader from "./LayoutHeader"

function Layout(): JSX.Element {
  return (
    <div className="w-full h-full bg-[#4bbfffb8]">
      <LayoutHeader />
      <Outlet />
    </div>
  )
}

export default Layout
