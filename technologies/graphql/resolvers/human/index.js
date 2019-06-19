const fetch = require('node-fetch');
const { HUMAN_SERVICE_ENDPOINT } = require('../../config');

const Human = {
  // get: async ({ id }) => {
  //   const url = `${HUMAN_SERVICE_ENDPOINT}/humans/${id}`;
  //   const response = await fetch(url);
  //   const human = await response.json();
  //   return human;
  // },

  // getAll: async () => {
  //   const url = `${HUMAN_SERVICE_ENDPOINT}/humans`;
  //   const response = await fetch(url);
  //   const humans = await response.json();
  //   return Object.keys(humans).map(id => humans[id]);
  // }
};

module.exports = Human;
