module.exports = function(w) {
  return {
    files: ['src/**/*.ts', '!src/**/*.solve.ts'],
    tests: ['test/**/*.test.ts'],
    env: {
      type: 'node',
    },
  };
};
