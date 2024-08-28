import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword]= useState("")
  const [error, setErorr] = useState("")

  let navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    let res = await fetch("http://localhost:8000/login", {
      mode:'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
      })
    });

    let data = await res.json();
    console.log(data);
    if (data.success === true) {
      alert("Login successfull");
      localStorage.setItem("token", data.token);
      localStorage.setItem("userID", data.userID);
      navigate("/");
    }
    else {
      setErorr(data.message);
      alert(data.message);
    }

  }

  return (
    <>
    <div className="container bg-[#F4F4F4] flex items-center flex-col justify-center min-h-[100vh] min-w-full">
        <form onSubmit={handleSubmit} action="" className='form'>
          <h3 className='text-center text-[26px] mb-5 mt-3'>Login</h3>
          <div className="inputBox">
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder='Email' id='email'/>
          </div>
          <div className="inputBox">
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" placeholder='Password' id='Password'/>
          </div>
          <button className='btnBig mt-3 mb-3'>Login</button>
          <p className='mb-3 mt-2'> Don't Have An Account <Link className='text-[#578DF7]' to={"/signup"}>Signup</Link></p>
        </form>
    </div>
    </>
  )
}

export default Login