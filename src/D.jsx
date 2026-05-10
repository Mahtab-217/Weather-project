import { useContext } from "react"
import { DataContext } from "./App"

export default function D(){
    const data=useContext(DataContext);
    return (
        <div>
            <h1>This is the D component</h1>
            <input type="text" value={data.value} onChange={(e)=>
                data.setValue({type: "change", payload: e.target.value})} />
        </div>
    )
}