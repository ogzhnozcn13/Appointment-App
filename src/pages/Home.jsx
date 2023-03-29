import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import Navbar from "../components/navbar/Navbar"
import {doctorData} from "../helpers/data"
import {appointmentData} from "../helpers/data"


const Home = () => {

    const [doctors, setDoctors] = useState(doctorData)
    console.log(doctors);

    const [apppointmets, setAppointments] = useState(appointmentData)
    console.log(apppointmets);

    return (
        <main>
            <Navbar/>
            <h1 className="text-center mt-2 text-danger display-7">World Wide Web Hospital</h1>
            <Doctors
                doctors={doctors}
                apppointmets={apppointmets}
                setAppointments={setAppointments}/>
            <AppointmentList/>
        </main>
    )
}

export default Home