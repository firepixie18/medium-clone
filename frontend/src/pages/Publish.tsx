import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

  const navigate=useNavigate();
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  return (
    <div>
      <Appbar />
      <div className="mt-10 mx-40">
        <input
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          type="text"
          id="large-input"
          placeholder="Title"
          className="text-4xl font-bold  block w-full p-4 text-gray-900 focus:ring-blue-500 focus:border-blue-500  "
        ></input>
        <div className="pt-5">
        <TextEditor onChange={(e)=>{
          setDescription(e.target.value);
        }}/>
        </div>
        <div className="pt-5 px-2">
        <button onClick={async ()=>{
           const res=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title,
            content:description
          },{
            headers:{
              Authorization:localStorage.getItem("token")
            }
          })
          navigate(`/blog/${res.data.id}`)
        }}type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2">Publish Post</button>
        </div>
      </div>
      
        
     
    </div>
  );
};


function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
  return (
    <div>
      <textarea
        id="message"
        onChange={onChange}
        className="text-l block py-2 px-4 w-full text-md text-gray-900   "
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
}
