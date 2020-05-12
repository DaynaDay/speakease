import axios from 'axios';

/* USERS */
export const getAllUsers = function () {
  return axios.get('/api/users');
};
// route to get logged in user's info (needs the token)
export const getMe = function (token) {
  return axios.get('/api/users/me', { headers: { authorization: `Bearer ${token}` } });
};

// get a user by their username, not being used in the app just showing how it could work
export const getUser = function (username) {
  return axios.get(`/api/users/${username}`);
};

export const createUser = function (userData) {
  return axios.post('/api/users', userData);
};

export const loginUser = function (userData) {
  return axios.post('/api/users/login', userData);
};

/* POEMS */
export const getAllPoems = function () {
  return axios.get('/api/poems');
};

export const getPoemById = function (poemId) {
  return axios.get(`/api/poems/${poemId}`);
};

export const createPoem = function (poemData, token) {
  return axios.post('/api/poems', poemData, { headers: { authorization: `Bearer ${token}` } });
};

export const updatePoem = function (poemId, poemData, token) {
  return axios.put(`/api/poems/${poemId}`, poemData, { headers: { authorization: `Bearer ${token}` } });
};

export const deletePoem = function (poemId, token) {
  return axios.delete(`/api/poems/${poemId}`, { headers: { authorization: `Bearer ${token}` } });
};

/* COLLECTIONS */
export const getAllCollections = function () {
  return axios.get('/api/collections/');
};

export const getCollectionById = function (collectionId) {
  return axios.get(`/api/collections/${collectionId}`);
};

export const createCollection = function (collectionData, token) {
  return axios.post('/api/collections', collectionData, { headers: { authorization: `Bearer ${token}` } });
};

export const addPoemToCollection = function (collectionId, poemId, token) {

  return axios.put(`/api/collections/${collectionId}/add/${poemId}`, {}, { headers: { authorization: `Bearer ${token}` } });
};

export const removePoemFromCollection = function (collectionId, poemId, token) {
  return axios.put(`/api/collections/${collectionId}/remove/${poemId}`, {}, {
    headers: { authorization: `Bearer ${token}` },
  });
};
