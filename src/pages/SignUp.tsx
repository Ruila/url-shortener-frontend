import React, { useState } from "react"
import Button from "../components/common/Button"
import Box from "../components/common/Box"
import TextField from "../components/common/TextField"
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../api/axiosInterceptors"
import { HttpStatusCode } from "axios"

function SignUp(): JSX.Element {
  const navigate = useNavigate()
  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const signUp = async () => {
    const res = await axiosInstance.post("/user", {
      name: name,
      password: name,
    })
    if (res.status === HttpStatusCode.Ok) {
      navigate("/login")
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Box>
        <div className="mb-4">
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
        <Button text="confirm" onClick={signUp} />
      </Box>
    </div>
  )
}

export default SignUp
