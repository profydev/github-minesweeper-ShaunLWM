function handleError(message) {
  console.error(`\n\n${message}\n\n`);
  process.exit(1);
};

module.exports = handleError;