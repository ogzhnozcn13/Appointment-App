import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export function AddModal({show, handleClose}) {

  return (
    <>
      <Button variant="primary" onClick={handleClose}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name & Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter name & surname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateTime">
        <Form.Label>Date & Time</Form.Label>
        <Form.Control type="datetime-local" />
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
