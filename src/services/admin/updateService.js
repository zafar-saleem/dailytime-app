import { getCookie } from '../../utils/cookies';

export const updateService = (request) => {
  const NEW_API_ENDPOINT = 'http://localhost:3000/api/v1/admin/employee/update';
  
  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.id.employee)
  };

  return fetch(NEW_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};