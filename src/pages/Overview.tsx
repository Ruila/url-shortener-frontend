import React, { useContext, useEffect, useState } from "react"
import Box from "../components/common/Box"
import TableRow from "../components/common/TableRow"
import TableHeader from "../components/common/TableHeader"
import { ModalContext } from "../store/context/ModalContext"
import Modal from "../components/common/Modal"
import TextField from "../components/common/TextField"
import Button from "../components/common/Button"
import { GetUrlsResponse } from "../types/GetUrlsResponse"
import { Apis } from "../api/api"
import { verifyUrl } from "../utils/verifyUrl"

function Overview(): JSX.Element {
  const context = useContext(ModalContext)
  const [data, setData] = useState<GetUrlsResponse>([])
  const [originUrl, setOriginUrl] = useState<string>("")
  const [shortenUrl, setShortenUrl] = useState<string>("")
  const confirmDelete = async (urlId: number) => {
    await Apis.deleteUrl({ urlId })
    await getData()
    context.closeModal()
  }
  const handleDelete = (urlId: number) => {
    context.openModal(
      <Modal
        title="Delete"
        content="do you want to delete this url ?"
        confirm={() => confirmDelete(urlId)}
        confirmText="confirm"
        cancelText="cancel"
        showCancel={true}
        cancel={context.closeModal}
      />
    )
  }
  const getData = async () => {
    const response = await Apis.getAllUrls(
      Number(localStorage.getItem("user-id"))
    )
    setData(response.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const generateShortenUrl = async () => {
    if (!verifyUrl(originUrl))
      return context.openModal(
        <Modal
          title="Error"
          content="This url is invalid."
          confirm={context.closeModal}
          confirmText="OK"
          cancelText="cancel"
          cancel={context.closeModal}
        />
      )
    try {
      const response = await Apis.generateShortenUrl({
        createdBy: Number(localStorage.getItem("user-id")),
        originUrl: originUrl,
      })
      setShortenUrl(response.data.shortenUrl)
      await getData()
    } catch (err) {
      context.openModal(
        <Modal
          title="Error"
          content="This url is invalid."
          confirm={context.closeModal}
          confirmText="OK"
          cancelText="cancel"
          cancel={context.closeModal}
        />
      )
    }
  }

  const renderURLs = data.map(item => (
    <TableRow
      key={item.shorten_url}
      shortenURL={item.shorten_url}
      originURL={item.origin_url}
      viewed={item.viewed}
      delete={handleDelete}
      urlId={item.id}
    />
  ))

  return (
    <div className="flex justify-center items-center h-full px-4">
      <Box classes="mr-4 flex-1">
        <div className="text-[24px] mb-4">URL Overview</div>
        <TableHeader />
        <div className="h-[320px] overflow-auto">{renderURLs}</div>
      </Box>
      <Box>
        <div className="flex items-center">
          <TextField
            label="Origin Url"
            value={originUrl}
            onChange={event => setOriginUrl(event.target.value)}
          >
            <Button classes="ml-2" text="submit" onClick={generateShortenUrl} />
          </TextField>
        </div>
        <div className="my-2">Shorten Url:</div>
        <div>{shortenUrl ? shortenUrl : "null"}</div>
      </Box>
    </div>
  )
}

export default Overview
