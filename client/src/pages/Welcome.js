import React from "react";
import { Navbar, Nav, Container, Modal, Tab, Jumbotron } from 'react-bootstrap';
import PoemForm from '../components/PoemForm';
import CollectionForm from '../components/CollectionForm';
import AllCollections from '../components/AllCollections';
import UserInfoContext from '../utils/UserInfoContext';




function Welcome() {


  return (
    <>
    <Container>
      <Tab.Container defaultActiveKey='create'>

        <Nav variant='pills'>
          <Nav.Item>
            <Nav.Link eventKey='create'>Create</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='collection'>Collection</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='all-collections'>All Collections</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey='create'>
           <PoemForm/>
          </Tab.Pane>
          <Tab.Pane eventKey='collection'>
            <CollectionForm/>
          </Tab.Pane>
          <Tab.Pane eventKey='all-collections'>
            <AllCollections/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      </Container>
    </>
  )
}

export default Welcome; 