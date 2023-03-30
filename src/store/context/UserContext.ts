import React from "react"
import { UserContentType } from "../../types/UserContentType"

export const UserContext = React.createContext({
  data: {},
  onChangeUserData: (data: Omit<UserContentType, "password">) => {},
})
