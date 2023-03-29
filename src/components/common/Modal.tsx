import React, { PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import Box from "./Box"
import Button from "./Button"

type ModalType = {
  title: string
  content: string | JSX.Element
  confirm: () => void
  cancel: () => void
}

function Modal(props: PropsWithChildren<ModalType>): JSX.Element {
  return createPortal(
    <div className="bg-[#00000045] absolute w-full h-full top-0 flex justify-center items-center">
      <Box>
        <div className="text-[24px]">{props.title}</div>
        <div className="mt-4">{props.content}</div>
        <div className="flex justify-between mt-8">
          <Button text="cancel" onClick={props.cancel} />
          <Button text="confirm" onClick={props.confirm} />
        </div>
      </Box>
    </div>,
    document.body
  )
}

export default Modal
