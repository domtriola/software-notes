const DEFAULT_PROTOCOL = 'http';
const DEFAULT_HOST = 'localhost';

const CatService = {
  PROTOCOL: DEFAULT_PROTOCOL,
  HOST: DEFAULT_HOST,
  PORT: 3000,
};

const HumanService = {
  PROTOCOL: DEFAULT_PROTOCOL,
  HOST: DEFAULT_HOST,
  PORT: 3001,
};

const endpointFromServiceConfig = (service) => {
  return `${service.PROTOCOL}://${service.HOST}:${service.PORT}`;
};

module.exports = {
  CAT_SERVICE_ENDPOINT: endpointFromServiceConfig(CatService),
  HUMAN_SERVICE_ENDPOINT: endpointFromServiceConfig(HumanService),
};
