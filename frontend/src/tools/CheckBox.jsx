import { useEffect } from "react"

const CheckBox = ({check, setCheck , title})=>{
    const toggleCheckBox = ()=>{
        let checkBox = document.querySelector(".checkBox")
        checkBox.classList.toggle("active")
        setCheck(!check)
    }

    useEffect(()=>{
        let checkBox = document.querySelector(".checkBox")
        check ? checkBox.classList.add("active"): checkBox.classList.remove("active");
    },[check])
    return (
       <>
       <div className="flex items-center gap-2 mb-3">
        <div onClick={toggleCheckBox} className="checkBox w-[20px] h-[20px] bg-[gray] cursor-pointer"> 
            
        </div>
        <p>{title}</p>
       </div>
       </>
    )
}

export default CheckBox;