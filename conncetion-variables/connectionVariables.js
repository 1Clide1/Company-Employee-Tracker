// found the if statment idea from stack overflow this is a defensive way of writing code
// basically just a double check filter to see if all the variables are set in the correct way in which I wrote the env file
const dbUserName= process.env.sql_USER
if (!dbUserName) {
    throw new Error('dbUserName: environment variables must be set right, possible typo error');
}
const dbPass= process.env.sql_Pass
if (!dbPass) {
    throw new Error('dbPass: environment variables must be set right, possible typo error');
}
const dbHost= process.env.sql_HOST
if (!dbHost) {
    throw new Error('dbHost: environment variables must be set right, possible typo error');
}
const db= process.env.DB
if (!db) {
    throw new Error('db: environment variables must be set right, possible typo error');
}
const dbPort= process.env.PORT
if (!dbPort) {
    throw new Error('PORT: environment variables must be set right, possible typo error');
}
module.exports={dbUserName, dbPass, dbHost, db, dbPort}