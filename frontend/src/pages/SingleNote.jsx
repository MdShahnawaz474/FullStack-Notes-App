import { useNavigate, useParams } from "react-router-dom";
import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import deleteIcon from "../Images/delete.png";
import editIcon from "../Images/edit.png";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

// Corrected Component Name and Fixed Class Names
const SingleNotePage = () => {
  let navigate= useNavigate()
  const[data,setData]= useState(null)
  const [isDeleteModel, setIsDeleteModel] = useState(false)
  let{id} = useParams()
  function getNote(){
    fetch(`${import.meta.env.VITE_BACKEND_URL}/getNote`,{
      mode:"cors",
      method:"POST",
      headers:{
      "Content-Type":"application/json"},
      body:JSON.stringify({
        noteId: id
      })
    }
  ).then(response=>response.json()).then(data=>{
    setData(data)
  })
  }

  const deleteNote =(id)=>{
    console.log("ID:",id);
    let res = fetch(`${import.meta.env.VITE_BACKEND_URL}/deleteNote`,{
    mode:"cors",
    method:"POST",
    headers:{
       "content-Type": "application/json"
    },
    body: JSON.stringify({noteId : id})

    }).then(response=> response.json()).then(data=>{
       console.log(data);
       if(data.success){
           // data.getElementById(noteID).remove()
          //  window.location.reload()
          navigate("/")
       }else(alert("Something Went Wrong"))
    })
   setIsDeleteModel(false) 
   }
  
  const editNote=()=>{
    navigate(`/editNote/${id}`)
  
  }
  useEffect(()=>{
    getNote()
  },[])
  return (
    <>
      <Navbar />
      <div className="container px-[50px] w-screen min-h-[68vh] h-[auto]">

        <div className="flex items-start justify-between h-[auto] my-3 ">
          <div className="left w-[80%] h-full">
            <h3 className="m-0 p-0 text-3xl text-[#000] min-w-[90%] line-clamp-1">
             {
              data? data.title :""
             }
            </h3>
            <p className="text-[gray]">{data ? new Date(data.date).toDateString():""}</p>
          </div>

          <div className="right w-[20%] h-full gap-1 flex items-start justify-end">
            <img
              className="w-[30px] h-[30px]  cursor-pointer"
              onClick={() => setIsDeleteModel(true)}
              src={deleteIcon}
              alt="deleteIcon"
            />
            <img
              className="w-[35px] h-[35px] cursor-pointer"
              onClick={()=>editNote(id)}
              src={editIcon}
              alt="Edit icon"
            />
          </div>
        </div>

        <p>{data? data.description :""}</p>
        <div className="my-3 w-full">
        {parse (data? data.content : "")}


        </div>
      </div>
      {
         isDeleteModel ? 
         <>
         <div className="deleteNoteModalCon flex items-center justify-center flex-col fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,.1)] z-[100] ">
            <div className="deletemodalBody relative  w-[25vw] h-[21vh]   rounded-md bg-[#fff] shadow-lg">
                <h3 className="px-2 text-[20px] mt-1" >Delele Note " <span className="text-[#578df5]">{data ? data.title : ""}</span>"</h3>
                <p className="m-0 px-3 mt-3 p-0 text-[gray] text-[17px] leading-[1]">Do You want To Delete This Note <br/>Yes / No</p>

                <div className="flex items-center gap-2 absolute px-2 bottom-[5%] w-full">
                    <button onClick={()=>deleteNote(id)} className="delete min-w-[48%] p-[8px] bg-[#f55757] text-[#fff] border-0 outline-0 cursor-pointer">Yes</button>

                    <button  onClick={()=>{setIsDeleteModel(false)}} className="cancel min-w-[48%] p-[8px] bg-[#578df5] text-[#fff] border-0 outline-0 cursor-pointer">No</button>
                </div>
            </div>
         </div>
         </> : ""  
        }
      <Footer />
    </>
  );
};

export default SingleNotePage;
