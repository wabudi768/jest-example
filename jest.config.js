module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  projects: [
    {
      displayName: 'e2e test',
      testMatch: ['<rootDir>/__test__/**/*.test.js']
    }
    // {
    //   displayName: 'linting test',
    //   runner: 'jest-runner-eslint',
    //   testMatch: ['<rootDir>/src/**/*.js']
    // }
  ]
}
