import { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import './Singup.css';


const Signup = () => {
	const [firstName,setFirstName] = useState('');
	const [lastName,setLastName] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
	const Register= async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/Register', {
                firstName:firstName,
				lastName:lastName,
                email: email,
                password: password
            });
            window.location = "/login";
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


	return (
		<div className="signup_container">
			<div className="signup_form_container">
		
				<div className="right">
				<h1  style={{color: "#05baec"}}>Register </h1>
					<form className="form_container" onSubmit={Register}  >
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={firstName} onChange={(e) => setFirstName(e.target.value)} 
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={lastName} onChange={(e) => setLastName(e.target.value)} 
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email} onChange={(e) => setEmail(e.target.value)}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password} onChange={(e) => setPassword(e.target.value)}
							required
							className="input"
						/>
						{/* {error && <div className="error_msg">{error}</div>} */}
						<button type="submit" className="green_btn">
							Sing Up
						</button>
						
					</form>
					<div className="SingUp">
					
					<a href="/login" style={{textDecoration:"none",color: "#05baec"}}>
						
					you have account ?
					</a>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;