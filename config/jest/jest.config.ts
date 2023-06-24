import type { Config } from "jest";
import * as path from "path";

export default {
  globals: {
    __IS_DEV__: true,
  },
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
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>src/**/*(*.)@(test).[jt]s?(x)"],
} as Config;
