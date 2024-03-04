// /script/seedOnce.js
require('dotenv').config();
const { exec } = require('child_process');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

const checkIfSeeded = async () => {
  try {
    console.log(process.env.DATABASE_URL);
    if (!process.env.DATABASE_URL) console.error('DATABASE_URL is not set');
    await client.connect();
    const res = await client.query('SELECT * FROM "user" LIMIT 1;'); // Assuming the table is named "user"
    return res.rowCount > 0;
  } catch (error) {
    console.error('Error checking if database is seeded:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
};

const seedDatabase = () => {
  exec('npm run seed', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error seeding database: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
};

const seedOnce = async () => {
  const isSeeded = await checkIfSeeded();
  if (!isSeeded) {
    console.log('Database is not seeded. Seeding now...');
    seedDatabase();
  } else {
    console.log('Database is already seeded. Skipping seeding.');
  }
};

seedOnce();