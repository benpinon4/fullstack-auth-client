import {useState} from "react"
import { useAuth } from "../Hooks/Auth"
import { useNavigate } from "react-router-dom"
 
 
 const LoginPage = () => {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    const [loginMessage, setLoginMessage] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()


    return (
        <div>
            <h1>Fullstack Auth Login Page</h1>
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
         
              const loginResult = await auth.login(email, password)
              console.log(loginResult)
              if(loginResult.success === true){
                       navigate('/')
            }
          
            if(loginResult.success === false){
                setLoginMessage(loginResult.message)
            }
          
              
            }}>Login</button>
            <br/>
            {loginMessage}
        </div>
    )
 }

 export default LoginPage


