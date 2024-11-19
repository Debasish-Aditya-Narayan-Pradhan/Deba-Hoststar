import React,{useState} from "react";
import "./movie.css"
import axios from "axios"
import { IoSearch } from "react-icons/io5"; 

const Search = () =>
{
  const [search,setSearch]=useState("");
  const getItem=async()=>{
    const res=await axios.get(`http://localhost:9090/movie/get/${search}`);
    console.log(res.data);
    
    
  }
    return (
        <>
         <div className="srch-div">
            <div className="srch-ic">
            <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}

            placeholder="Enter movie name here" className="srch-input"/>
            <span 
            onClick={getItem}
            className="search-icon"> <IoSearch /></span>
            </div>
         </div>
        </>
    );
}

export default Search;