import axios from 'axios';

axios.defaults.baseURL = 'https://660332222393662c31ceb451.mockapi.io';

export const getAllContacts = () => axios.get('/contacts/');

export const addNewContacts = contact => {
  return axios.post('/contacts/', contact);
};

export const delContacts = id => {
  return axios.delete(`/contacts/${id}`);
};