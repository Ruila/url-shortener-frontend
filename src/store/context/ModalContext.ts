import React from "react"

export const ModalContext = React.createContext({
  openModal: (content: JSX.Element) => {},
  closeModal: () => {},
})
