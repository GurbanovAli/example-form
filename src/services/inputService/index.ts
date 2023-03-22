import apiService from 'services/apiService';

const BASE_URL = 'data.json';

const getInputs = async (): Promise<{ data: any[] }> => {
  const response = await apiService.get(BASE_URL);

  return response;
};

export { getInputs };
