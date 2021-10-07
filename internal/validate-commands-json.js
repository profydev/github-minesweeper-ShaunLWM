const fs = require('fs');
const handleError = require('./handle-error');

const commandsFile = fs.readFileSync('./commands.json');
let commandsJson;
try {
  commandsJson = JSON.parse(commandsFile);
} catch (e) {
  if (e instanceof SyntaxError) {
    handleError(`The commands.json file contains a syntax error: ${e.message}`);
    return;
  }
  throw e;
}

if (!commandsJson.commands || !Array.isArray(commandsJson.commands)) {
  handleError('The structure of the commands object is broken.');
  return;
}

commandsJson.commands.forEach(command => {
  if (typeof command !== 'string') {
    handleError('Each item in the commands array must be a string');
    return;
  }
})