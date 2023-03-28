import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Doctors = ({doctors}) => {
  return (
    <Container className="p-2">
        <h3 className="display-6 mb-3" style={{color: "purple"}}>Our Doctors</h3>

        <Row className="justify-content-center">
            {doctors.map((dr) => (
                <Col key={dr.id} xs={6} sm={6} md={4} lg={3}>
                    <img src={dr.img} alt={dr.name} className= "doctor-img img-thumbnail mb-2"/>
                    <h5>{dr.name}</h5>
                    <h6>{dr.dep}</h6>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Doctors