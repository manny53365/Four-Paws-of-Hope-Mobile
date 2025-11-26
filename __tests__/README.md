# Test Suite for Four Paws of Hope Mobile

This directory contains comprehensive test cases for the Four Paws of Hope Mobile application.

## Test Structure

```
__tests__/
├── components/          # Component unit tests
│   ├── PetCard.test.tsx
│   ├── Filters.test.tsx
│   └── Pagination.test.tsx
├── pages/              # Page integration tests
│   └── Dashboard.test.tsx
├── context/            # Context tests
│   └── AuthContext.test.tsx
├── flows/              # End-to-end flow tests
│   └── AppFlow.test.tsx
└── App.test.tsx        # App integration tests
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run a specific test file
npm test -- PetCard.test.tsx
```

## Test Coverage

### Component Tests
- **PetCard**: Tests rendering, status badges, user interactions, and edge cases
- **Filters**: Tests search functionality, status filtering, pet type selection, and filter combinations
- **Pagination**: Tests page navigation, active page styling, and user interactions

### Integration Tests
- **Dashboard**: Tests component integration, data display, and layout structure
- **App**: Tests navigation setup, theme support, and component integration

### Context Tests
- **AuthContext**: Tests reducer logic, provider functionality, and state management

### Flow Tests
- **AppFlow**: Tests complete user journeys including:
  - App launch flow
  - Search and filter flow
  - Pet card interaction flow
  - Pagination flow
  - Complete user journeys
  - Error handling

## Test Setup

The test setup (`setupTests.ts`) includes:
- React Native module mocks
- Firebase mocks
- react-native-reanimated mocks
- react-native-gesture-handler mocks
- Console warning suppression

## Dependencies

Tests use:
- Jest (included with React Native)
- react-test-renderer (included with React Native)

For enhanced testing capabilities, consider installing:
```bash
npm install --save-dev @testing-library/react-native @testing-library/jest-native
```

## Writing New Tests

When adding new components or features:

1. Create a test file in the appropriate directory
2. Follow the existing test patterns
3. Test rendering, user interactions, and edge cases
4. Update this README if adding new test categories

## Test Best Practices

1. **Isolation**: Each test should be independent
2. **Descriptive Names**: Use clear, descriptive test names
3. **Arrange-Act-Assert**: Structure tests clearly
4. **Edge Cases**: Test boundary conditions and error cases
5. **Mocking**: Mock external dependencies appropriately

