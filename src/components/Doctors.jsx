import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { AddModal } from "./AddModal"
import { useState } from "react"

const Doctors = ({doctors}) => {

  const [show, setShow] = useState(false);

  const [selectedDrName, setSelectedDrName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (drName) => {
    handleShow()
    setSelectedDrName(drName)
  }

  return (
    <Container className="p-2">
        <h3 className="display-6 mb-3" style={{color: "purple"}}>Our Doctors</h3>

        <Row className="justify-content-center">
            {doctors.map((dr) => (
                <Col key={dr.id} xs={6} sm={6} md={4} lg={3}>
                    <img src={dr.img} alt={dr.name} className= "doctor-img img-thumbnail mb-2"
                      onClick={() => handleClick(dr.name)}/>
                    <h5 className="dr-name" onClick={handleClick}>{dr.name}</h5>
                    <h6>{dr.dep}</h6>
                </Col>
            ))}
        </Row>
        <AddModal show={show} handleClose={handleClose} doctorName={selectedDrName}/>
    </Container>
  )
}

export default Doctors