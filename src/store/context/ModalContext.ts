import React from "react"
import { ModalContentType } from "../../types/ModalContentType"

export const ModalContext = React.createContext({
  openModal: (data: ModalContentType) => {},
  confirm: (callback: () => void) => {},
  cancel: () => {},
})
