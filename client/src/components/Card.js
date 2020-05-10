
import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'



function CardDeck (props) {
  return (
<CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>{props.theme}</Card.Title>
      <Card.Text>{props.title} {props.poem}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated {props.date}</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>{props.theme}</Card.Title>
      <Card.Text>{props.title} {props.poem}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> Last updated{props.date}</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>{props.theme}</Card.Title>
      <Card.Text>{props.title} {props.poem}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated {props.date}</small>
    </Card.Footer>
  </Card>
</CardDeck>
  )
}

export default CardDeck; 
