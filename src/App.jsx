import { Cloud, CloudDrizzle, CloudRain, CloudSun, Moon, Snowflake, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export default function App(){
 const [value, setValue]= useState();
 const [hour,setHour]= useState("");
 const [Minute,setMinute]= useState("");
 const [Seconds,setSeconds]= useState("");

 const [sunsetHour, setSunsetHour]=useState("");
 const [sunsetMinutes, setSunsetMinute]=useState("");
 const [sunsetSeconds, setSunsetSeconds]=useState("");
  useEffect(()=>{ 
     async function getWeatherData() {
     const malomat= await fetch("https://api.openweathermap.org/data/2.5/weather?q=Ghazni&units=metric&appid=684418efa9274f3ad6491868b0271123");
      const responce = await malomat.json(); 
      setValue(responce);
     const sunRiseDate= new Date(responce.sys.sunrise * 1000);
     const sunRiseHour= sunRiseDate.getHours();
       const sunRiseMinute = sunRiseDate.getMinutes();
       const sunRiseSeconds = sunRiseDate.getSeconds();
      setHour(sunRiseHour);
       setMinute(sunRiseMinute);
       setSeconds(sunRiseSeconds);

      //  sunsetDate
      const sunSetDate= new Date(responce.sys.sunset * 1000);
      const sunSetHour = sunSetDate.getHours();
      const sunSetMinute = sunSetDate.getMinutes();
      const sunSetSeconds = sunSetDate.getSeconds();
      setSunsetHour(sunSetHour)
      setSunsetMinute(sunSetMinute)
      setSunsetSeconds(sunSetSeconds)

    }
    getWeatherData()
  },[]);
  if(!value){
    return (
      <h1 className="text-3xl font-bold text-red-800 text-center">
        Please Wait a Minute
      </h1>
    )
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2 h-fit p-5 border rounded-md">
    <h1>{value.name} City</h1>
   {value.weather[0].main==="Clear" ? (<Sun size={42} className="text-yellow-600"/>):
   value.weather[0].main==="Clouds" ?(<Cloud size={42} className=" text-gray-300" />):
   value.weather[0].main==="Thunderstorm"?(<CloudSun size={42} className="text-yellow-600"/>):
   value.weather[0].main==="Drizzle"?(<CloudDrizzle size={42} className="text-yellow-600"/>):
   value.weather[0].main==="Rain"?(<CloudRain size={42} className="text-yellow-600"/>):
   value.weather[0].main==="Snow"?(<Snowflake size={42} className="text-yellow-600"/>):("")
   }
   {/* temprature and humidity */}
   <div className="flex w-full justify-between items-center">
    <p className="flex gap-1.5">
      <span>Temprature: </span>
      <p>{value.main.temp}</p>
    </p>
    <p className="flex gap-1.5">
      <span>Humidity:</span>
      <p>{value.main.humidity}</p>
    </p>
   </div>

<div className="flex w-full justify-between items-center">
  <p>
    <span>Sunrise</span>
    <span>{hour}:{Minute}:{Seconds}</span>
  </p>

  <p className="flex w-full justify-between items-center">
    <span>Sunset:</span>
    <span>{sunsetHour}:{sunsetMinutes}:{sunsetSeconds}</span>
  </p>
</div>

   </div>
    </div>
  )
}