export default {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".*\\.test\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.(t|j)s"],
  coverageReporters: ["json", "html", "text", "lcov"],
  testEnvironment: "node",
};
