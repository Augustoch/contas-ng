export const environment = {
  production: true,
  API_URL: 'https://ingrid-test-app.herokuapp.com'
};

export const apendApi = (append: string) => `${environment.API_URL}/${append}`;
