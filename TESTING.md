# Testing Guide - Four Paws of Hope Mobile

## Overview

This document provides a comprehensive guide to the test suite for the Four Paws of Hope Mobile application. The test suite covers all major components, pages, contexts, and user flows.

## Test Coverage Summary

### ✅ Component Tests (3 files)
- **PetCard.test.tsx**: 15+ test cases covering rendering, status badges, interactions, and edge cases
- **Filters.test.tsx**: 20+ test cases covering search, status filtering, pet type selection, and combinations
- **Pagination.test.tsx**: 10+ test cases covering navigation, active page styling, and user interactions

### ✅ Integration Tests (2 files)
- **Dashboard.test.tsx**: 15+ test cases covering component integration, data display, and layout
- **App.test.tsx**: 10+ test cases covering navigation setup, theme support, and app integration

### ✅ Context Tests (1 file)
- **AuthContext.test.tsx**: 15+ test cases covering reducer logic, provider functionality, and state management

### ✅ End-to-End Flow Tests (1 file)
- **AppFlow.test.tsx**: 20+ test cases covering complete user journeys and workflows

## Total Test Cases: 100+

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (recommended for development)
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage

# Run a specific test file
npm test -- PetCard.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="should render"
```

### Test Output

Tests use Jest and provide:
- ✅ Pass/fail status for each test
- 📊 Coverage reports (when enabled)
- ⚠️ Warnings for console errors
- 📝 Detailed error messages

## Test Structure

### Component Tests

Located in `__tests__/components/`, these test individual React components:

**PetCard Tests:**
- Renders pet information correctly
- Displays status badges (Lost/Found)
- Handles user interactions
- Manages edge cases (empty descriptions, missing images)

**Filters Tests:**
- Search input functionality
- Status filter selection (Lost/Found)
- Pet type checkbox toggling
- Filter combinations
- Initial state validation

**Pagination Tests:**
- Page number rendering
- Active page highlighting
- Navigation button functionality
- Edge case handling

### Integration Tests

Located in `__tests__/pages/` and root `__tests__/`, these test component interactions:

**Dashboard Tests:**
- Component rendering
- Data display
- Layout structure
- Integration with Filters, PetCard, and Pagination

**App Tests:**
- Navigation setup
- Theme support (light/dark mode)
- Component integration
- App lifecycle

### Context Tests

Located in `__tests__/context/`, these test state management:

**AuthContext Tests:**
- Reducer actions (LOGIN, LOGOUT, AUTH_IS_READY)
- Provider functionality
- Auth state listener setup
- Error handling

### Flow Tests

Located in `__tests__/flows/`, these test complete user journeys:

**AppFlow Tests:**
- App launch flow
- Search and filter flow
- Pet card interaction flow
- Pagination flow
- Complete user journeys
- Error handling scenarios

## Test Setup

The test environment is configured in:
- `setupTests.ts`: Mocks and test configuration
- `jest.config.js`: Jest configuration
- `test-utils.tsx`: Helper utilities (optional)

### Mocks Included

- React Native modules
- Firebase (Auth, Firestore, Storage)
- react-native-reanimated
- react-native-gesture-handler
- Console warnings (suppressed in tests)

## Writing New Tests

### Test Template

```typescript
/**
 * @format
 * ComponentName Tests
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ComponentName from '../../components/ComponentName';

describe('ComponentName Component', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const { getByText } = render(<ComponentName />);
      expect(getByText('Expected Text')).toBeTruthy();
    });
  });

  describe('User Interactions', () => {
    it('should handle user interaction', () => {
      const { getByText } = render(<ComponentName />);
      const button = getByText('Button');
      fireEvent.press(button);
      // Assert expected behavior
    });
  });

  describe('Edge Cases', () => {
    it('should handle edge case', () => {
      // Test edge case
    });
  });
});
```

### Best Practices

1. **Test Structure**: Use `describe` blocks to group related tests
2. **Test Names**: Use descriptive names starting with "should"
3. **Arrange-Act-Assert**: Structure tests clearly
4. **Isolation**: Each test should be independent
5. **Edge Cases**: Test boundary conditions and error cases
6. **Mocking**: Mock external dependencies appropriately

## Test Coverage Goals

- **Components**: 80%+ coverage
- **Pages**: 70%+ coverage
- **Contexts**: 90%+ coverage
- **Flows**: Critical paths covered

## Continuous Integration

Tests should be run:
- Before committing code
- In CI/CD pipeline
- Before merging pull requests
- As part of pre-push hooks

## Troubleshooting

### Common Issues

1. **Tests failing with "Cannot find module"**
   - Run `npm install` to ensure dependencies are installed
   - Check that mocks are properly configured in `setupTests.ts`

2. **Firebase mock errors**
   - Verify Firebase mocks in `setupTests.ts`
   - Check that Firebase config is properly mocked

3. **Navigation test failures**
   - Ensure navigation mocks are set up correctly
   - Check that `@react-navigation` mocks are in place

4. **Component not rendering**
   - Verify component imports are correct
   - Check that all required props are provided
   - Ensure mocks for dependencies are set up

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Native Testing](https://reactnative.dev/docs/testing-overview)
- [Testing Library Documentation](https://testing-library.com/docs/react-native-testing-library/intro/)

## Test Maintenance

- Review and update tests when components change
- Add tests for new features
- Remove obsolete tests
- Update mocks when dependencies change
- Keep test coverage above target thresholds

