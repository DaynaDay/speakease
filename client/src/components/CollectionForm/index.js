import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';

import AuthService from '../../utils/auth';
import * as API from '../../utils/API';
import UserInfoContext from '../../utils/UserInfoContext';


function CollectionForm() {

  const [collectionName, setCollectionName] = useState('');

  const { getUserData } = useContext(UserInfoContext);

  // create function to handle form submission
  const handleSubmitForm = (event) => {
    event.preventDefault();

    // get form data
    const formData = {
      collectionName
    };

    // check if user is logged in and get token
    const token = AuthService.loggedIn() ? AuthService.getToken() : null;

    if (!token) {
      console.log('not logged in!')
      return false;
    }

    API.createCollection(formData, token)
      .then(({ data }) => {
        getUserData();
        setCollectionName('');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group controlId="collection name">
        <Form.Label>Collection Name</Form.Label>
        <Form.Control value={collectionName} onChange={(event) => setCollectionName(event.target.value)} placeholder="Enter name" />
      </Form.Group>


      <Button onClick={handleSubmitForm} variant="primary" type="submit">
        Create Collection
      </Button>
    </Form>
  )
}

export default CollectionForm; 