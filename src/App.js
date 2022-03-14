import React,{useState} from "react";
import "./style.css";
function Converter(){
  const [km,setkm] = useState();
  function handleChange(e){
    setkm(e.target.value);
    e.target.value==' ';
  }
  function converter(km){
       return (km/1.609).toFixed(2);
  }
  return (
    <>
    <h1>KM :{km}</h1>
    <input type="text" value={km} onChange={handleChange}/>
    <p>Km :{km}  Miles :{converter(km)}</p>
    </>
  );
}
export default function App() {
  return (
    <div>
      <h1>Convert {"km"} to {"Miles"} </h1>
      <p>Using functional component :)</p>
      <Converter />
    </div>
  );
}
