module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{ts,js}", "!src/**/*.d.ts"]
};
