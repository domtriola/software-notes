const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const DATA_PATH = path.join(__dirname, '..', '..', 'services', 'dogs.yaml');
const DOC = yaml.safeLoad(fs.readFileSync(DATA_PATH, 'utf8'));

const Dog = {
  // get: async ({ id }) => {
  //   const { dogs } = DOC;
  //   return dogs[id];
  // },

  // getAll: async () => {
  //   const { dogs } = DOC;
  //   return Object.keys(dogs).map(id => dogs[id]);
  // },

  // add: async (dog) => {
  //   const { dogs } = DOC;
  //   const ids = Object.keys(dogs).map(id => Number(id));
  //   const maxId = Math.max(...ids);
  //   dog['id'] = maxId + 1;
  //   dogs[dog.id] = dog;
  //   DOC['dogs'] = dogs;
  //   const dogsYml = await yaml.safeDump(DOC);
  //   fs.writeFile(DATA_PATH, dogsYml, () => {
  //     console.log(`Wrote ${dogsYml} to ${DATA_PATH}`);
  //   });
  //   return dog;
  // }
};

module.exports = Dog;
