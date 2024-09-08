module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    // Optional: specify other Jest configurations if needed
    testEnvironment: 'jsdom', // If you're testing React components
  };
  