import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export default function App(){
 const [value, setValue]= useState();
  useEffect(()=>{
     async function getWeatherData() {
     const malomat= await fetch("https://api.openweathermap.org/data/2.5/weather?q=Ghazni&appid=684418efa9274f3ad6491868b0271123");
      const responce = await malomat.json(); 
      setValue(responce);
       
    }
    getWeatherData()
  },[]);
  if(!vlaue){
    return (
      <h1 className="text-3xl font-bold text-red-800 text-center">
        Please Wait a Minute
      </h1>
    )
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2 h-fit p-5 border rounded-md">
    <h1>Here is the weather status of Ghazni for today</h1>
   {value.weather[0].main==="Clear"?( <Sun/>): ""}
   </div>
    </div>
  )
}