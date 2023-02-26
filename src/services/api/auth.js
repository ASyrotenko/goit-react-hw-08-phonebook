import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const createUser = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  return data;
};
