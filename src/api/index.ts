import { API_BASE_URL } from '../static/constants/ServicesConstants';

const getUrlWithEndpoint = (endpoint = '') => `${API_BASE_URL}${endpoint}`;

type ApiRequestParams = {
  endpoint: string;
  method: string;
  headers?: HeadersInit_;
  body?: BodyInit_;
  fakeService?: boolean;
};

type ApiGetParams = {
  baseUrl?: string;
  endpoint: string;
  headers?: HeadersInit_;
  body?: BodyInit_;
  fakeService?: boolean;
};

const apiRequest = async ({ endpoint, method, headers, body = null }: ApiRequestParams) => {
  return fetch(getUrlWithEndpoint(endpoint), {
    method,
    headers,
    body,
  })
    .then((response) => response.json())
    .catch((error) => {
      if (error) {
        return Promise.reject(error);
      }
    });
};

export const apiGet = ({ endpoint, headers, body, fakeService }: ApiGetParams) =>
  apiRequest({ method: 'GET', endpoint, headers, body, fakeService });
