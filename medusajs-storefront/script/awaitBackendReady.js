const nodefetch = require('node-fetch');

const checkBackend = () => {
  const url = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000';
  nodefetch(url)
    .then((res) => {
      if (res.status === 404) {
        console.log('Backend is ready. Received 404 response.');
        process.exit(0); // Exit script successfully
      } else {
        console.log(`Unexpected response from backend: ${res.status}. Retrying in 5 seconds...`);
        setTimeout(checkBackend, 5000); // Wait 5 seconds before retrying
      }
    })
    .catch((err) => {
      if (err.code === 'ECONNREFUSED') {
        console.log(`Waiting for a medusajs backend to be available on ${url}...`);
        setTimeout(checkBackend, 5000); // Wait 5 seconds before retrying
      } else {
        console.error('An unexpected error occurred:', err);
        process.exit(1); // Exit script with error
      }
    });
};

checkBackend();