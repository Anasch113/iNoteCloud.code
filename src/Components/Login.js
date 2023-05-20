import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../Components/Login.css'
const Login = (props) => {


    let navigate = useNavigate();
const handleSubmit = async(e)=>{
   
    e.preventDefault();
    // API CALL
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST", 
    
    headers: {
      "Content-Type": "application/json",

      
    },
  
    body: JSON.stringify({email : credentials.email, password: credentials.password}), 
  
   
  });

 
  const json = await response.json()
  console.log(json)
  if(json.success){
    //redirect
    localStorage.setItem('token', json.authToken)
   
    props.showAlert("Login successfully", "success")
    navigate("/")
  }
  else{
    props.showAlert("Invalid email or password", "danger")
  }

}

const [credentials, setcredentails] = useState({email : "", password : ""})
const  onChange = (e)=>{
    setcredentails({...credentials, [e.target.name]: e.target.value})
}
  return (

    <div>
       <div className="container">
<h2 >Welcome to iNoteCloud | <span>Your Notes in your own cloud</span>  </h2>

<h3>Please login <span>to use iNoteCloud</span> </h3>
    
      <form className='container my-5' onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' onChange={onChange} value={credentials.email} className="form-control" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' onChange={onChange} value={credentials.password} className="form-control" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-success">Login</button>
</form>
</div>
    </div>
   
  )
}

export default Login
