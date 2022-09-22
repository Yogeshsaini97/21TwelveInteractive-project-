import React, { useEffect, useState } from "react";
import "../CSSfolder/Albums.css"

import Loading from "./Loading";

import { useNavigate } from "react-router-dom";

const Albums = () => {
  // use of hooks
  const [Array2, setArray2] = useState([]);
  const [Loadings, setLoadings] = useState(false);
  const[idtoshowalbums,Setidtoshowalbums]=useState("");
  const navigate = useNavigate();

  // function to get data from application storage
  useEffect(() => {
     
    let data=localStorage.getItem("user");
    let datas=JSON.parse(data);
    Setidtoshowalbums(datas);
   
    fetchmydata(datas);
console.log("hello data " + datas);
   
  }, []);


  // function to fetch data

  const fetchmydata = async (datas) => {
    setLoadings(true);

    const data = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${datas}`);


    const recievedArray2 = await data.json();
    console.log(recievedArray2);
    setArray2(recievedArray2);
    setLoadings(false);
  };

 // function to navigate and save data in application storage
  const showPhoto=(parapass)=>{

    console.log(parapass);
    navigate("/Photos");
    const auth=localStorage.setItem('user',JSON.stringify(parapass));
    
    
  }

  return (

    <>
    <div className="heading h1 my-5" >Our special Album number {idtoshowalbums} </div>
    {/* ternary condition for showing loading */}
    {(!Loadings)?
      <div className="moreaboutus row my-5">

        {Array2.map((e, i) => (
          <div className="card col-md-3 col-lg-3 col-sm-4 my-5 mx-5" style={{ width: "18rem" }}>
           
            <div className="card-body">
              <h5 className="card-title">Title: <div className="insidetextofmap">{e.title}</div></h5>
         
             
              <a href="/" onClick={(preventing)=>{ preventing.preventDefault(); showPhoto(e.id)}} className="btn btn-primary">
                Go to Photos
              </a>
            </div>
          </div>
        ))}
      </div>:<Loading/>
    }</>
  )
}

export default Albums
