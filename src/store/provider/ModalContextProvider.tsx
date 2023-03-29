import React, { PropsWithChildren, useState } from "react"
import { ModalContext } from "../context/ModalContext"
type ModalContextProviderType = {}

export const ModalContextProvider: React.FunctionComponent<
  PropsWithChildren<ModalContextProviderType>
> = props => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<JSX.Element | null>()
  const closeModal = () => {
    setOpen(false)
  }

  const openModal = (content: JSX.Element) => {
    setContent(content)
    setOpen(true)
  }

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {props.children}
      {open && content}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
