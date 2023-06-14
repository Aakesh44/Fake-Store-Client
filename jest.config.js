module.exports = {
    // Other Jest configurations...
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    resolver: 'jest-resolver',
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      '/node_modules/(?!axios)',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
  