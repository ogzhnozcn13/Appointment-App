import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function AddModal({show, handleClose, drName, appointments, setAppointments}) {
    const [patienttName, setPatientName] = useState("")
    const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setAppointments([ ...appointments, {
      id: appointments.length+1,
      patient: patienttName,
      day: date,
      consulted: false,
      doctor: drName}
    ])
    handleClose()
  }

  console.log(appointments);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name & Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter name & surname" onChange={(e) => setPatientName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateTime">
        <Form.Label>Date & Time</Form.Label>
        <Form.Control type="datetime-local" onChange={(e) => setDate(e.target.value)}/>
      </Form.Group>
      <div className='text-center'>
      <Button variant="primary" type="submit" className='me-2'>
        Send
      </Button>
      <Button variant="danger" onClick={handleClose}>
        Close
      </Button>
      </div>

    </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
