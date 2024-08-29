import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useOnlineStatus from "./useOnline";
import Avatar from "react-avatar";
const Navbar = () => {
  let navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");


  const [userData, setUserData] = useState(null);
  function getUserDetails() {
    fetch("http://localhost:8000/getUserDetails", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userID"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === false) {
          navigate("/login");
        } else {
          setUserData(data);
        }
      });
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <>
      <div className="navbar w-screen h-[90px] bg-[#f4f4f4] px-[50px] flex items-center justify-between">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="Logo text-2xl cursor-pointer"
        >
          Keep <span className="text-[#578DF7]"> Notes</span>{" "}
        </div>

        <div className="right flex items-center gap-[12px]">
          <ul className="flex items-center gap-3">
            <Link to={"/"}>
              <li className="text-xl ">Home</li>
            </Link>
            <li className="text-xl font-normal">
              Online Status :{onlineStatus ? "✅" : "🔴"}{" "}
            </li>
          </ul>

          <button
            className="btnNormal rounded-full"
            onClick={() => {
              navigate("/addNewNote");
            }}
          >
            Add Note
          </button>
          {/* Login button */}
          <button
            className="login text-xl font-semibold"
            onClick={() => {
              if (btnNameReact === "Login") {
                setBtnNameReact("Logout");
                navigate("/login");
              } else {
                setBtnNameReact("Login");
              }
            }}
          >
            {btnNameReact}
          </button>
          <Avatar
            onClick={() => {
              navigate("/profile");
            }}
            name={userData ? userData.username : ""}
            size="50"
            className="rounded-[50%] cursor-pointer"
          />
          {/* <div className='profileCircle w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] cursor-pointer' ></div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
