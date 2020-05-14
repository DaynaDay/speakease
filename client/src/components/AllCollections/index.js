import React, { useState, useContext } from 'react';
import { Container, CardColumns, Card } from 'react-bootstrap';

import AuthService from '../../utils/auth';
import * as API from '../../utils/API';
import UserInfoContext from '../../utils/UserInfoContext';
import { CardBody } from 'react-bootstrap/Card';



// function AllCollections() {

//   // create state to hold form data for title
//   const [collectionName, setCollectionName] = useState('');

//   // create state to hold form data for the poem
//   const [poem, setPoem] = useState('');

//   const [title, setTitle] = useState('');

//   // get the user's collection list
//   const { collections, getUserData } = useContext(UserInfoContext);

//   // // create function to handle form submission
//   // const handleSubmitForm = (event) => {
//   //   event.preventDefault();

//   // get form data
//   const cardData = {
//     collectionName,
//     poem,
//     title
//   };

//   // check if user is logged in and get token
//   const token = AuthService.loggedIn() ? AuthService.getToken() : null;


//   if (!token) {
//     console.log('not logged in!')
//     return false;
//   }

//   API.getAllCollections(cardData, token)
//     .then(({ data }) => {
//       getUserData();
//       setCollectionName('');
//       setTitle('');
//       setPoem('');
//     })
//     .catch((err) => {
//       console.log(err);
//     })


//   return (
//     <>
//       <Container>
//         <CardColumns>
//           <Card.Body>
//             <h2>{collection.collectionName}</h2>
//           </Card.Body>
//         </CardColumns>
//       </Container>
//     </>

//   )
// }


// export default AllCollections; 