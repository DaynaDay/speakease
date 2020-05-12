import React from 'react';
import { Form, Button} from 'react-bootstrap';


function PoemForm () {
  return (
    <Form>
  <Form.Group controlId="title">
    <Form.Label>Title</Form.Label>
    <Form.Control type="title" placeholder="Enter title" />
  </Form.Group>

  <Form.Group controlId="poemtext">
    <Form.Label>Write</Form.Label>
    <Form.Control type="poem" placeholder="Inhale. Exhale. Write" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}

export default PoemForm; 