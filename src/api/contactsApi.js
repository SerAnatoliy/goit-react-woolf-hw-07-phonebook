import axios from 'axios';

axios.defaults.baseURL = 'https://64859451a795d24810b716bb.mockapi.io';

export const getAllContacts = () => axios.get('/contacts/');

export const addNewContacts = contact => {
  return axios.post('/contacts/', contact);
};

export const delContacts = id => {
  return axios.delete(`/contacts/${id}`);
};