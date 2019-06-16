const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const DATA_PATH = path.join(__dirname, '..', '..', 'services', 'dogs.yaml');
const DOC = yaml.safeLoad(fs.readFileSync(DATA_PATH, 'utf8'));

const Dog = {
  get: async ({ id }) => {
    const { dogs } = DOC;
    return dogs[id];
  },

  getAll: async () => {
    const { dogs } = DOC;
    return Object.keys(dogs).map(id => dogs[id]);
  }
};

module.exports = Dog;
