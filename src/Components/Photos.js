import React, { useEffect, useState } from "react";


import Loading from "./Loading";



const Photos = () => {
// use of hooks
  const [Array3, setArray3] = useState([]);
  const [Loadings, setLoadings] = useState(false);
  const[idtoshowalbums,Setidtoshowalbums]=useState("");

// function to get data from application storage
  useEffect(() => {
     
    let data=localStorage.getItem("user");
    let datas=JSON.parse(data);
    Setidtoshowalbums(datas);
   
    fetchmydata(datas);
console.log("hello to Photos");
   
  }, []);

  // function to fetch data

  const fetchmydata = async (datas) => {
    setLoadings(true);

    const data = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${datas}`);


    const recievedArray3 = await data.json();
    console.log(recievedArray3);
    setArray3(recievedArray3);
    setLoadings(false);
  };


 

  return (
    <>
     
    <div className="heading h1 my-5" >All Photos of album number {idtoshowalbums} </div>
     {/* ternary condition for showing loading */}
    {(!Loadings)?
      <div className="moreaboutus row my-5 ">

        {Array3.map((e, i) => (
          <div className="card col-md-3 col-lg-3 col-sm-4 my-5 mx-5" style={{ width: "18rem" }}>
          <img className="card-img-top" src={e.url} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
         
             
             
            </div>
          </div>
        ))}
      </div>:<Loading/>
    }</>
  )
}

export default Photos
