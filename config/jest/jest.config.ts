import type {Config} from "jest";

export default {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  modulePaths: ["<rootDir>src"],
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy",
  },
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>src/**/*(*.)@(test).[jt]s?(x)"],
} as Config;
