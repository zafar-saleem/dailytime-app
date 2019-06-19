import { getCookie } from '../../utils/cookies';

export const deleteEmployeeService = (request) => {
  const NEW_API_ENDPOINT = 'http://localhost:3000/api/v1/admin/employee/delete';
  
  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.id)
  };

  return fetch(NEW_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};