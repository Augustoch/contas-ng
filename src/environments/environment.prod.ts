export const environment = {
  production: true,
  API_URL: 'http://localhost:8090'
};

export const apendApi = (append: string) => `${environment.API_URL}/${append}`;
