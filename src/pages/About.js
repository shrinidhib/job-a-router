import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About(){
    const [user,setUser]=useState('nids')

    if (!user){
        //replace is used to replace the about page
        // with / in the history so you can go back
        // after logging out
        return <Navigate to="/" replace={true}/>
    }

    return (
        <div className="about">
            <h2>About Us</h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            
            <p> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <button onClick={()=>{
                setUser(null)
            }}>Logout</button>
        </div>
    )
}