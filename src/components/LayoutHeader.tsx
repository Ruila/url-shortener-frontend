import React from "react"
import Button from "./common/Button"
import { useNavigate } from "react-router-dom"

function LayoutHeader(): JSX.Element {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.setItem("user-id", "")
    localStorage.setItem("jwt-token", "")
    navigate("/login")
  }
  return (
    <div className="absolute px-4 py-2 flex items-center justify-between top-0 w-full bg-white shadow-md">
      <div className="text-[24px]">Shorten Url Service</div>
      <Button text="logout" onClick={logout} />
    </div>
  )
}

export default LayoutHeader
