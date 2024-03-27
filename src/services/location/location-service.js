import camelize from 'camelize';
import { locations } from './location-mock';

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('Not Found!');
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formatResponse = camelize(result);
  const { geometry = {} } = formatResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
