import { getCookie } from '../../utils/cookies';

export const hoursService = (request) => {
  const NEW_API_ENDPOINT = 'http://localhost:3000/api/v1/employees/hours';
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.hours)
  };

  return fetch(NEW_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};