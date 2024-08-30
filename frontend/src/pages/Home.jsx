import React, { useEffect, useState } from 'react'
import Navbar from '../componets/Navbar'
import Note from '../componets/Note'
import Footer from '../componets/Footer'
import Oops from '../componets/Oops'
import { useNavigate } from 'react-router-dom'
import OopsImage from "../Images/oops2.png"
const Home = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);

  let getNotes = () => {
    let res = fetch(`${import.meta.env.VITE_BACKEND_URL}/getNotes`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userID")
      })
    }).then(resp => resp.json()).then(data => {
      if (data.success === false) {
        setError(data.msg)
      }
      else {
        setData(data);
        console.log(data)
      }
    });
  };

  function getUserDetails(){
    fetch(`${import.meta.env.VITE_BACKEND_URL}/getUserDetails`,{
      mode:"cors",
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        userId:localStorage.getItem("userID")
      })
    }).then(response=>response.json()).then(data=>{
      if(data===false){

        navigate("/login")

      }else{
        setUserData(data )
      }
    })

  }
  

  useEffect(() => {
    getNotes();
    getUserDetails()
  }, []);

  return (
    <>
      <Navbar />
      <div className=' mt-[20px] flex items-center justify-between w-screen px-[50px]'>
        <h1 className='text-2xl'>Hi,  {userData? userData.name:""}</h1>

        <div className="inputBox !w-[380px]">
          <input onKeyUp={(e) => {
            if (e.key === "Enter") {
              navigate(`/search?query=${query}`);
            }
          }} onChange={(e) => { setQuery(e.target.value) }} value={query} type="text" placeholder='Search Notes' className=' !p-[11px]' />
        </div>
      </div>

      <div className="gridItems">
        {
          data ? data.map((el, index) => {
            return (
              <>
                <Note key={index} index={index} note={el} />
              </>
            )
          }) : <Oops title={"No Note Found"} image={OopsImage}buttonTitle={"Add Note"} buttonLink={"/addNewNote"} />
        }
      </div>

      <Footer />
    </>
  )
}

export default Home