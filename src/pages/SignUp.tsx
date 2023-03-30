import React, { useState } from "react"
import Button from "../components/common/Button"
import Box from "../components/common/Box"
import TextField from "../components/common/TextField"
import { useNavigate } from "react-router-dom"
import { HttpStatusCode } from "axios"
import { Apis } from "../api/api"

function SignUp(): JSX.Element {
  const navigate = useNavigate()
  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const signUp = async () => {
    const res = await Apis.signUp({
      name: name,
      password: password,
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
        <div className="flex justify-end">
          <Button text="confirm" onClick={signUp} />
        </div>
      </Box>
    </div>
  )
}

export default SignUp
