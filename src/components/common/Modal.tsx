import React, { PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import Box from "./Box"
import Button from "./Button"

type ModalType = {
  title: string
  content: string | JSX.Element
  confirm: () => void
  confirmText: string
  cancel: () => void
  cancelText: string
  showCancel?: boolean
}

function Modal(props: PropsWithChildren<ModalType>): JSX.Element {
  return createPortal(
    <div className="bg-[#00000045] absolute w-full h-full top-0 flex justify-center items-center">
      <Box>
        <div className="text-[24px]">{props.title}</div>
        <div className="mt-4">{props.content}</div>
        <div className="flex justify-end mt-8">
          {props.showCancel ? (
            <Button
              classes="mr-2"
              text={props.cancelText}
              onClick={props.cancel}
            />
          ) : (
            <></>
          )}
          <Button text={props.confirmText} onClick={props.confirm} />
        </div>
      </Box>
    </div>,
    document.body
  )
}

export default Modal
