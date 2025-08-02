// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/e2e'],
};

export default createJestConfig(customJestConfig);
