import React, { PropsWithChildren, useState } from "react"
import { ModalContext } from "../context/ModalContext"
import { ModalContentType } from "../../types/ModalContentType"
import Modal from "../../components/common/Modal"
type ModalContextProviderType = {}

export const ModalContextProvider: React.FunctionComponent<
  PropsWithChildren<ModalContextProviderType>
> = props => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<ModalContentType>({
    title: "title",
    content: "content",
  })
  const cancel = () => {
    setOpen(false)
  }

  const confirm = (callback: () => void) => {
    callback()
    setOpen(false)
  }

  const openModal = (data: ModalContentType) => {
    setContent(data)
    setOpen(true)
  }

  return (
    <ModalContext.Provider
      value={{
        openModal,
        cancel,
        confirm,
      }}
    >
      {props.children}
      {open && (
        <Modal open={open} title={content.title} content={content.content} />
      )}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
