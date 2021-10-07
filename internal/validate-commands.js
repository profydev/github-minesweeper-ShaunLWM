const fs = require('fs');
const handleError = require('./handle-error');

const VALID_COMMANDS = {
  CLEAR: 'CLEAR', 
  FLAG: 'FLAG', 
  UNFLAG: 'UNFLAG', 
  END: 'END'
};
const NUM_ROWS = 8;
const NUM_COLS = 8;

const commandsFile = fs.readFileSync('./commands.json');
const { commands } = JSON.parse(commandsFile)

commands.forEach(command => {
  const [action, cellId] = command.toUpperCase().split(/\s+/g);
  if (!Object.values(VALID_COMMANDS).includes(action)) {
    handleError(`Invalid command "${command}"`);
    return;
  }

  if (action === VALID_COMMANDS.END) {
    return;
  }

  const posX = Number(cellId.charCodeAt(0) - "A".charCodeAt(0));
  const posY = Number.parseInt(cellId.charAt(1), 10) - 1;

  if (
    posX < 0 ||
    posX >= NUM_COLS ||
    posY < 0 ||
    posY >= NUM_ROWS
  ) {
    handleError(`${command}: Field ${cellId} does not exist.`);
    return;
  }
})