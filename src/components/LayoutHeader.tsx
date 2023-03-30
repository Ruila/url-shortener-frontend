import React, { useContext } from "react"
import Button from "./common/Button"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../store/context/UserContext"

function LayoutHeader(): JSX.Element {
  const navigate = useNavigate()
  const context = useContext(UserContext)
  const logout = () => {
    context.onChangeUserData({
      name: "",
      accessToken: null,
    })
    navigate("/login")
  }
  return (
    <div className="absolute px-4 flex items-center justify-end top-0 h-[40px] w-full bg-white shadow-md">
      <Button text="logout" onClick={logout} />
    </div>
  )
}

export default LayoutHeader
