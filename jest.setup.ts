import '@testing-library/jest-dom';

global.URL.createObjectURL = jest.fn(() => "mock-url");
