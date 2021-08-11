//Funciones que se encargan de la respuesta del server
export function handleResponse(response) {
    if(
        response.status === 200 ||  response.statusText === 'OK'    ||
        response.status === 202 ||  response.statusText === 'Created'
    )
      return response.data;
    if (response.status === 400) {
        const error = response.statusText();
        throw new Error(error);
    }
    throw new Error('Error de Red.');
}