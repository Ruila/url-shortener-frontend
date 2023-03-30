import React, { useState } from "react"
import Button from "../components/common/Button"
import Box from "../components/common/Box"
import TextField from "../components/common/TextField"
import { useNavigate } from "react-router-dom"
import { HttpStatusCode } from "axios"
import { Apis } from "../api/api"

function Login(): JSX.Element {
  const navigate = useNavigate()
  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const login = async () => {
    const res = await Apis.login({
      name: name,
      password: password,
    })
    if (res.status === HttpStatusCode.Ok) {
      navigate("/overview")
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Box>
        <div className="text-[24px]">Short Url Service</div>
        <div className="mb-4 w-full">
          <TextField
            label="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <TextField
            label="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div
            className="cursor-pointer text-[10px] text-[#ff4444] underline"
            onClick={() => navigate("/sign-up")}
          >
            go to sign up
          </div>
          <Button text="login" onClick={login} />
        </div>
      </Box>
    </div>
  )
}

export default Login
