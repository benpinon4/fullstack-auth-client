import {useState} from "react"
import { useAuth } from "../Hooks/Auth"
import {useNavigate } from "react-router-dom"

const RegistrationPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    const [registrationMessage, setRegistrationMessage] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Fullstack Auth Registration Page</h1>
            <label>Email</label>
            <input type="text" onChange={(e)=>{
                setEmail(e.target.value)
            }}></input>
            <label>Password</label>
            <input type="text" onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            <br/>
            <button onClick={async()=>{
                navigate("/login")
              const registerResult = await auth.register(email, password)
              console.log(registerResult)

                setRegistrationMessage(registerResult.message)
            

              
            }}>Sign Up</button>
            <br/>
            {registrationMessage}
        </div>
    )
}

export default RegistrationPage