const fs = require('fs');
const path = require('path');
const { buildSchema } = require('graphql');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

async function getTaskSchema() {
  const schemaPath = path.join(__dirname, 'taskSchema.gql');
  const schemaString = await readFileAsync(schemaPath, { encoding: 'utf8' });
  return buildSchema(schemaString);
}

module.exports = getTaskSchema;
