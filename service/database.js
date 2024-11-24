const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('calendar');
const userCollection = db.collection('user');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

/**
 * @param {string} token
 * @param {Date} startDate
 * @param {Date} endDate
 */
async function getSchedule(token, startDate, endDate) {
  const calendarCollection = db.collection(token);
  if (calendarCollection) {
    const calendars = calendarCollection.distinct('calendarID');
    const fullSchedule = new Map;
    for (const calendar in calendars) {
      const assignemnts = calendarCollection.find({
        $and: [
          { calendar: calendar },
          { dueDate: { $gte: startDate } },
          { dueDate: { $lte: endDate } }
        ]
      });
      fullSchedule.set(calendar, assignemnts);
    }

    return fullSchedule;
  }
}

async function addAssignment(token, assignmentInfo) {
  const calendarCollection = db.collection(token);
  const calendar = calendarCollection.find({ calendarID: assignmentInfo.calendarID });
  if (calendar) {
    calendarCollection.insertOne(assignmentInfo);
  } else {
    // throw console.error("Calendar not found");
  }
}

async function completeAssignment(token, assignmentInfo) {
  const calendarCollection = db.collection(token);
  const calendar = calendarCollection.find({ calendarID: assignmentInfo.calendarID });
  if (calendar) {
    calendarCollection.updateOne({
      $and: [
        { calendarID: assignmentInfo.calendarID },
        { assignmentName: assignmentInfo.assignmentName },
        { dueDate: assignmentInfo.dueDate }
      ]
    },
      { $set: { "completed": true } })
  }
}

module.exports = {
  getUser,
  getUserByToken,
  createUser
};