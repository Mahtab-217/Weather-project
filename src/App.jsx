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
  return (
    <>
    <h1>Here is the weather status of Ghazni for today</h1>
   {value.weather[0].main==="Clear" && <Sun/>}
    </>
  )
}