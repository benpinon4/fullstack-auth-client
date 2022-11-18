import {Link} from "react-router-dom"
import { useAuth } from "../Hooks/Auth"
import { useNavigate } from "react-router-dom"
const NavBar = () => {

    const auth = useAuth()

    return (
        <div>
            <div>
           {auth.userEmail && <h3>Current User: {auth.userEmail}</h3>}
           {auth.userEmail < 1 && <h3>Current User: Not Logged In</h3>}
            <button onClick={()=>{
                auth.logout()
                
            }}>Logout</button>
            </div>
            <br></br>
            <Link to="/">Home</Link>
            <Link to="/registration">Registration Form</Link>
            <Link to="/login">Login Form</Link>

        </div>
    )
}

export default NavBar