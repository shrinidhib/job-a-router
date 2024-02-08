import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const {id}=useParams()
    const career=useLoaderData()
  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since 
                  the 1500s,</p>

        </div>
    </div>
  )
}

export const careerDetailsLoader=async({params})=>{
    const {id}=params
    const res=await fetch('http://localhost:4000/careers/'+id)

    if (!res.ok){
        throw Error('Could not find that Career')
    }
    return res.json()
}

