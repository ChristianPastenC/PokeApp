// ============================================================================
// ApiService.js utiliza métodos http para llamar a la API
// ============================================================================
import axios from 'axios'; 
import { handleResponse } from './ApiUtils';

// ============================================================================
// Se crea una solicitud http
// ============================================================================
const httpRequest = (method, url, request, headers) => {
  return axios({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => {
      const result = handleResponse(res);
      return Promise.resolve(result);
    })
    .catch((err) => {   return err; });
};

// ============================================================================
// Obtiene la respuesta del servidor
// ============================================================================
const get = (url, request, headers) => {
  let queryString = '';
  if (request && Object.keys(request).length > 0) {
    queryString += '?';
    let length = Object.keys(request).length, i = 0;

    for (let key in request) {
      i += 1;
      queryString += `${key} = ${request[key].toString()}`;
      if (length > i) queryString += '&';
    }
  }
  return httpRequest('get', `${url}${queryString}`, request, headers);
};

const Api = {
  get,
};

export default Api;