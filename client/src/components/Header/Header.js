import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Jumbotron } from 'react-bootstrap';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

import UserInfoContext from '../../utils/UserInfoContext';
import AuthService from '../../utils/auth';



function Header() {

  // set modal display state
  const [showModal, setShowModal] = useState(false);
  // get username out of context object to display in nav
  const { username } = useContext(UserInfoContext);

  return (
    <>
      < Jumbotron fluid>
        <Container>
          <h1>Speak. Easy</h1>
          <p>
            Inhale. Exhale. Write.
    </p>
          {username ? (
            <>
              <Nav.Link as={Link} to='/collection'>
                See {username}'s Collection
                  </Nav.Link>
              <Nav.Link onClick={AuthService.logout}>Logout</Nav.Link>
            </>
          ) : (
              <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
            )}
        </Container>
      </Jumbotron >



      <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignupForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  )
}



export default Header;
