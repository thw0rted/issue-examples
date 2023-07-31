console.log("Importing 'config' package")

const config = require('config');

module.exports = {
  consume() {
    return config.get('someKey');
  }
}
