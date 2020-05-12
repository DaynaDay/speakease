import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';

import AuthService from '../../utils/auth';
import * as API from '../../utils/API';
import UserInfoContext from '../../utils/UserInfoContext';


function PoemForm() {

  // create state to hold form data for title
  const [title, setTitle] = useState('');

  // create state to hold form data for the poem
  const [poem, setPoem] = useState('');

  const [selectedCollection, setSelectedCollection] = useState('');

  // get the user's collection list
  const { collections, getUserData } = useContext(UserInfoContext);

  // create function to handle form submission
  const handleSubmitForm = (event) => {
    event.preventDefault();

    // get form data
    const formData = {
      title,
      poem
    };

    // check if user is logged in and get token
    const token = AuthService.loggedIn() ? AuthService.getToken() : null;

    if (!token) {
      console.log('not logged in!')
      return false;
    }

    API.createPoem(formData, token)
      .then(({ data }) => {
        // add poem to collection
        console.log(selectedCollection)
        if (selectedCollection) {
          console.log(token, selectedCollection);
          return API.addPoemToCollection(selectedCollection, data._id, token);
        }
        getUserData();
      })
      .then((res) => {
        getUserData();
        setSelectedCollection('');
        setTitle('');
        setPoem('');
      })
      .catch((err) => {
        console.log(err.data);
      })
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter title" />
      </Form.Group>

      <Form.Group controlId="poemtext">
        <Form.Label>Write</Form.Label>
        <Form.Control as='textarea'  value={poem} onChange={(event) => setPoem(event.target.value)} placeholder="Inhale. Exhale. Write" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Select a Collection</Form.Label>
        <Form.Control value={selectedCollection} onChange={(event) => { setSelectedCollection(event.target.value); console.log(event.target)}} as="select">
          <option selected disabled value="">Select a Collection</option>
          {collections.map(({ collectionName, _id }) => {
            return <option key={_id} value={_id}>{collectionName}</option>
          })}
        </Form.Control>
      </Form.Group>
      <Button onClick={handleSubmitForm} variant="primary" type="submit">
        Create Poem
      </Button>
    </Form>
  )
}

export default PoemForm; 