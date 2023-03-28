import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import Navbar from "../components/navbar/Navbar"
import {doctorData} from "../helpers/data"


const Home = () => {

    const [doctors, setDoctors] = useState(doctorData)
    console.log(doctors);

    return (
        <main>
            <Navbar/>
            <h1>Web Hospital</h1>
            <Doctors doctors={doctors}/>
            <AppointmentList/>
        </main>
    )
}

export default Home