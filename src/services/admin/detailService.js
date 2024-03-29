import { getCookie } from '../../utils/cookies';

export const detailService = (request) => {
  const NEW_API_ENDPOINT = `http://localhost:3000/api/v1/admin/employee/details?id=${request.id.id}`;
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(NEW_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};