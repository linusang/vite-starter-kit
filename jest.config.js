module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": ["esbuild-jest", { sourcemap: true }],
    "^.+\\.vue$": "vue-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/cypress"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
