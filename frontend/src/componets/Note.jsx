import React, { useState } from "react";
import deleteIcon from "../Images/delete.png"
import editIcon from "../Images/edit.png"
import { useNavigate } from "react-router-dom";

const Note = ({note, height, index})=>{
    let navigate = useNavigate()

    const [isDeleteModel, setIsDeleteModel] = useState(false)
   

    const deleteNote =(id,noteID)=>{
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
            window.location.reload()
        }else(alert("Something Went Wrong"))
     })
    setIsDeleteModel(false) 
    }

    const editNote = (id)=>{
        
        navigate(`/editNote/${id}` )
    }

    return <>
        <div className="note relative" id={`note${index}`} style={{height:height}}>
            <div  onClick={()=>{
            navigate(`/singleNotePage/${note._id}`)
        }}>
            <div className="flex items-center justify-between">
            <p className="text-[gray]">Note {index+1}</p>
            {
                note.isImportant ? <p className="p-[3px] bg-green-500 text-white px-[10px] rounded-lg">Important</p>:""
            }
            </div>

          
            <h1 className="text-[#000] text-[20px] line-clamp-1 w-[80%]">{note.title}</h1>
            <p className="text-[gray] line-clamp-4 w-[80%]">{note.description}</p> </div>

            <div className="noteBottom absolute w-[93%] bottom-2 flex justify-between items-center">
            <p className="text-[gray]">{new Date (note.date).toDateString()}</p>

            <div className="flex items-center gap-1">
                <img onClick={()=> setIsDeleteModel(true)} className="w-[30px] h-[30px]" src={deleteIcon} alt="deleteIcon" />

                <img onClick={()=>editNote(note._id)} className="w-[35px] h-[35px]" src={editIcon} alt="deleteIcon" />
            </div>
             
        </div>
        </div>
        {
         isDeleteModel ? 
         <>
         <div className="deleteNoteModalCon flex items-center justify-center flex-col fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,.1)] z-[100] ">
            <div className="deletemodalBody relative  w-[25vw] h-[21vh]   rounded-md bg-[#fff] shadow-lg">
                <h3 className="px-2 text-[20px] mt-1" >Delele Note " <span className="text-[#578df5]">{note.title}</span>"</h3>
                <p className="m-0 px-3 mt-3 p-0 text-[gray] text-[17px] leading-[1]">Do You want To Delete This Note <br/>Yes / No</p>

                <div className="flex items-center gap-2 absolute px-2 bottom-[5%] w-full">
                    <button onClick={()=>deleteNote(note._id,`note${index}`)} className="delete min-w-[48%] p-[8px] bg-[#f55757] text-[#fff] border-0 outline-0 cursor-pointer">Yes</button>

                    <button  onClick={()=>{setIsDeleteModel(false)}} className="cancel min-w-[48%] p-[8px] bg-[#578df5] text-[#fff] border-0 outline-0 cursor-pointer">No</button>
                </div>
            </div>
         </div>
         </> : ""  
        }
    </>
}

export default Note