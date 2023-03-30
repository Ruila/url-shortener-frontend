import React, { PropsWithChildren, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { UserContentType } from "../../types/UserContentType"
import { useNavigate } from "react-router-dom"
type UserContextProvider = {}

export const UserContextProvider: React.FunctionComponent<
  PropsWithChildren<UserContextProvider>
> = props => {
  const navigate = useNavigate()
  const [data, setData] = useState<Omit<UserContentType, "password">>({
    name: "",
    accessToken: null,
  })
  const onChangeUserData = (data: Omit<UserContentType, "password">) => {
    setData(data)
  }

  useEffect(() => {
    if (!data.accessToken) navigate("login")
  }, [])

  return (
    <UserContext.Provider
      value={{
        data,
        onChangeUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
