import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: false,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  automock: false,
  resetMocks: false,
  //transform: { "^.+\\.tsx?$": "ts-jest" },
};

export default config;
