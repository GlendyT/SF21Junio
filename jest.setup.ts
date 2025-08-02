import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

global.URL.createObjectURL = jest.fn(() => "mock-url");
