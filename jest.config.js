module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  projects: [
    {
      displayName: 'e2e test',
      testMatch: ['<rootDir>/__test__/**/*.test.js']
    }
  ]
}
