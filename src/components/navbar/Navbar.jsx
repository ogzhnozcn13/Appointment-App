import "./Navbar.css"
import healthy from "../../images/healthy.png"

const Navbar = () => {
  return (
    <div className="navbar-container">
    <div>
      <img src={healthy} alt="" width="100px"/>
    </div>
    <div className="links">
      <a href="#aboutus">About Us</a>
      <a href="#services">Services</a>
      <a href="#patients">Patients</a>
      <a href="#contact">Contact</a>
    </div>
    </div>
    
  )
}

export default Navbar