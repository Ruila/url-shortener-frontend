import React, { PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import Box from "./Box"

type ModalType = {
  open: boolean
  title: string
  content: string
}

function Modal(props: PropsWithChildren<ModalType>): JSX.Element {
  return props.open ? (
    createPortal(
      <div className="bg-[#00000045] absolute w-full h-full top-0 flex justify-center items-center">
        <Box>
          <div className="text-[24px]">{props.title}</div>
          <div className="mt-4">{props.content}</div>
        </Box>
      </div>,
      document.body
    )
  ) : (
    <></>
  )
}

export default Modal
