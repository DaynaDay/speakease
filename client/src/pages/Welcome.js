import React from "react";
import { Container, Card } from 'react-bootstrap/Form'
import Header from "../components/Header";

function Welcome() {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

      </Container>
    </>
  )
}