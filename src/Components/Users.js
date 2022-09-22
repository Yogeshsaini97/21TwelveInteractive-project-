import React, { useEffect, useState } from "react";
import "../CSSfolder/Users.css";
import Loading from "./Loading";
import Albums from "./Albums";
import { useNavigate } from "react-router-dom"; 
import CardsInsideText from "./CardsInsideText";


const Users = () => {
  const [Array, setArray] = useState([]);
  const [Loadings, setLoadings] = useState(false);
  const navigate = useNavigate();

  // function to  fetch data in start
  useEffect(() => {
    fetchmydata();
  }, []);

  // function to fetch data
  const fetchmydata = async () => {
    setLoadings(true);

    const data = await fetch("https://jsonplaceholder.typicode.com/users");


    const recievedArray = await data.json();
    console.log(recievedArray);
    setArray(recievedArray);
    setLoadings(false);
  };

  // function to navigate and save data in application storage

  const showAlbum=(parapass)=>{

    console.log(parapass);
    navigate("/Albums");
    const auth=localStorage.setItem('user',JSON.stringify(parapass));
    
    
  }


  return (


    <>
    
    <div className="heading h1 my-5" >Our special Users</div>

{/* ternary condition for showing loading */}
    {(!Loadings)?
      <div className="row my-5">
        {Array.map((e, i) => (
          <div className="card col-md-3 col-lg-2 col-sm-4 my-5 mx-5" >
            <div className="card-body">
            {/* use of single compnent many times */}
              <CardsInsideText keys="Name:" value={e.name}/>
              <CardsInsideText keys="Username:" value={e.username}/>
              <CardsInsideText keys="Email:" value={e.email}/>
              <CardsInsideText keys="Phone:" value={e.phone}/>
              <CardsInsideText keys="Home-Adress:"/>
              <CardsInsideText value={e.address.street}/>
              <CardsInsideText value={e.address.suite}/>
              <CardsInsideText value={e.address.city}/>
              <CardsInsideText value={e.address.zipcode}/>
              <h6>Latitude<CardsInsideText value={e.address.geo.lat}/></h6>
              <h6 >Longitude<CardsInsideText value={e.address.geo.lng}/></h6>
              <CardsInsideText keys="Website:" value={e.website}/>
              <CardsInsideText keys="Company:"/>
              <h6>Name:<CardsInsideText value={e.company.name}/></h6>
              <h6 >CatchPhrase:<CardsInsideText value={e.company.catchPhrase}/></h6>
              <h6 >Bs:<CardsInsideText value={e.company.bs}/></h6>

              <a href="/" onClick={(preventing)=>{ preventing.preventDefault(); showAlbum(e.id)}} className="btn btn-primary">
                Go to album
              </a>
            </div>
          </div>
        ))}
      </div>:<Loading/>
    }</>
  );
};

export default Users;
