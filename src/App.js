import logo from './logo.svg';
import React,{useEffect, useState} from "react";
import './App.css';
import './component/movie'
import "./component/movie.css"
import axios from "axios"
import { IoSearch } from "react-icons/io5"; 
import Movie from './component/movie';
function App() {
  const [search,setSearch]=useState("");
  const [movie,setMovies]=useState([]);
  useEffect(()=>{
    getItem();
  },[search])

  const getItem=async()=>{
    if(!search)
    {
      setMovies("");
      return;
    }
    const res=await axios.get(`http://localhost:9090/movie/get/${search}`);
    console.log(res.data);
    setMovies(res.data);
  }
  return (
     <>
     <div className="Heading">
      <h1>
        LuluStar
      </h1>
     </div>
      <div id="movieBody">
        <div id="searchbar">
        <div className="srch-div">
            <div className="srch-ic">
            <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}

            placeholder="Enter movie name here" className="srch-input"/>
            <span 
            onClick={()=>{getItem()}}
            className="search-icon"> <IoSearch /></span>
            </div>
         </div>
        </div>
        <h3 className="mv-catagory">Latest Movies</h3>
      <div className="movie-img">
      {movie.length>0 ?
      <>
      {movie.map((item,index)=>(
        <>
        <Movie  mvImg={item.url} name={item.title} key={item.id} />
        </>
      ))}
      </>:
      <>
       {search.length > 0 ? 
       <>
       <h1>No Result Found</h1>
       </>:
       <>
       <Movie mvImg = "https://th.bing.com/th/id/OIP.Z6O34ZAThpQ2Iebh2InxFAHaEK?rs=1&pid=ImgDetMain" name="Venom"/>
      <Movie mvImg = "https://m.media-amazon.com/images/M/MV5BYzczY2YwOGMtYjA2OC00NTJjLWI2NzgtYTA4MDhjNTMxZGVkXkEyXkFqcGc@._V1_.jpg" name="Batman"/>
      <Movie mvImg = "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg" name="Venom the Last Dance"/>
      <Movie mvImg = "https://i.ytimg.com/vi/xXdyrw9Wpa8/maxresdefault.jpg" name="Doctor Strange"/>
      <Movie mvImg = "https://source.boomplaymusic.com/buzzgroup1/M00/29/C6/rBEevGFZowKAXZ8LAAF5N4SAFdQ28.jpeg" name="Venom Let There Carnege"/>
      <Movie mvImg = "https://source.boomplaymusic.com/buzzgroup1/M00/29/C6/rBEevGFZowKAXZ8LAAF5N4SAFdQ28.jpeg" name="Venom Let There Carnege"/>
       </>}
      </>}
      </div>
      </div>
     </>
  );
}

export default App;
