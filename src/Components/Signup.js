import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../Components/Signup.css'

const Signup = (props) => {
  let navigate = useNavigate();
const handleSubmit = async(e)=>{
   
    e.preventDefault();
    // API CALL
    const {name, email, password} = credentials;
  const response = await fetch("http://localhost:5000/api/auth/createuser", {
    method: "POST", 
    
    headers: {
      "Content-Type": "application/json",

      
    },
  
    body: JSON.stringify({name, email ,password}), 
  
   
  });

 
  const json = await response.json()
  console.log(json)
  if(json.success){
    //redirect
    localStorage.setItem('token', json.authtoken)
    navigate("/")
    props.showAlert("Account created successfully", "success")
  }
  else{
    props.showAlert("Invalid Credentails", "danger")
  }

}

const [credentials, setcredentails] = useState({ name:"", email : "", password : ""})
const  onChange = (e)=>{
    setcredentails({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div>
      <form className='container my-5' onSubmit={handleSubmit}>

      <div className=" mb-3">

        <h2 id='signup-text'>Create your <span>account here</span> </h2>

  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" name='name' onChange={onChange}  className="form-control" id="name" aria-describedby="emailHelp"/>
  <div id="emailHelp" className="form-text"></div>
</div>
<div className="mb-3">
  <label htmlFor="name" className="form-label">Email address</label>
  <input type="email" name='email' onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp"/>
  <div id="emailHelp" className="form-text"></div>
</div>
<div className="mb-3">
  <label htmlFor="password" className="form-label">Password</label>
  <input type="password" name='password' onChange={onChange}className="form-control" id="password" minLength={5} required/>
</div>
<div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
  <input type="password" name='cpassword' onChange={onChange}  className="form-control" id="cpassword" minLength={5} required/>
</div>


<button type="submit" className="btn btn-success">Signup</button>
</form>
    </div>
  )
}

export default Signup
