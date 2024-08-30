import { useEffect, useState } from "react";
import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import Note from "../componets/Note";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar"


const Profile = () => {
    const [userDetails, setuserDetails] = useState(null);
    const [notes, setNotes] = useState(null);
    const [importantNotes, setImportantNotes] = useState(null);
    const [normalNotes, setNormalNotes] = useState(null);
  
    const navigate = useNavigate();
  
    function getUserDetails() {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/getUserDetails`,{mode:"cors",method:"POST",headers:{
        "Applicatiosn-Type":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({userId:localStorage.getItem("userID")})
    }).then(res=>res.json()).then(data=>{
      setuserDetails(data);
    })
    }
  
    function getNotes() {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/getNotes`,{mode:"cors",method:"POST",headers:{
        "Applicatiosn-Type":"application/json", 
        "Content-Type":"application/json"
      },
      body: JSON.stringify({userId:localStorage.getItem("userID")})
    }).then(res=>res.json()).then(data=>{
      setNotes(data);
  
      setImportantNotes(data.filter(note=> note.isImportant));
  
      setNormalNotes(data.filter(note=> note.isImportant == false));
  
    })
    }
  
    useEffect(() => {
      getUserDetails();
      getNotes();
    }, []);
    
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-between w-screen h-[200px] px-[50px]">
          <div className="flex items-center gap-[10px]">
          <div className="text-xl">
          <Avatar
          onClick={() => {
          navigate("/profile"); }}
          name={userDetails? userDetails.username:""}
          size="120"
          className="rounded-[50%] cursor-pointer"/>
          </div>
            <div>
              <h3 className='text-[23px]'>{userDetails ? userDetails.name : ""}</h3>
              <p className='m-[0px] p-[0px] text-[gray] text-[15px] -mt-1'>Joined In {userDetails ? new Date(userDetails.date).toDateString() : ""}</p>
            </div>
          </div>
  
          <div className='relative h-[40%]'>
            <div className='flex items-center gap-[10px] text-[gray]'>Total Notes : {notes ? notes.length : ""} | Important Notes : {importantNotes ? importantNotes.length : ""}</div>
           
          </div> 
        </div>
        <div className='w-screen px-[50px]'>
          <h3 className='text-[26px]'>Your <span style={{ color: "#578df5" }}>Important</span> Notes</h3>
        </div>
        <div className="gridItems">
          {
            importantNotes ? importantNotes.map((note,index)=>{
              return <Note key={note._id} note={note} index={index}/>
            }) : ""
          }
        </div>
  
        <div className='w-screen px-[50px] mt-4'>
          <h3 className='text-[26px]'>Your <span style={{ color: "#578df5" }}>Normal</span> Notes</h3>
        </div>
        <div className="gridItems mb-3">
        {
            normalNotes ? normalNotes.map((note,index)=>{
              return <Note key={note._id} note={note} index={index}/>
            }) : ""
          }
        </div>
  
        <Footer/>
      </>
    )
  }
  
  export default Profile