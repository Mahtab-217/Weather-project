import { createContext, useContext, useReducer } from "react"
import A from "./A"

 
  export const DataContext=createContext();
export default function App(){
  function reducer(state, func){
    if(func.type==="change"){
      return (state=func.payload);
    }

  }
const [value, func]=useReducer(useReducer, "Hello");
 
  return (
    <div>
      <h1>This is the app component</h1>
      <h1>This is the input value: {value}</h1>

      <DataContext.Provider value={{value:value, setValue: func}}>

      <A />
      </DataContext.Provider>
    </div>
  )
}