/**
 * @format
 * AuthContext Tests
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { AuthContextProvider, authReducer } from '../../context/AuthContext';
import { User } from 'firebase/auth';

describe('AuthContext', () => {
  describe('authReducer', () => {
    const initialState = {
      user: null,
      authIsReady: false,
    };

    it('should handle LOGIN action', () => {
      const mockUser = { uid: '123', email: 'test@example.com' } as User;
      const action = { type: 'LOGIN' as const, payload: mockUser };
      const newState = authReducer(initialState, action);

      expect(newState.user).toEqual(mockUser);
      expect(newState.authIsReady).toBe(false);
    });

    it('should handle LOGOUT action', () => {
      const stateWithUser = {
        user: { uid: '123', email: 'test@example.com' } as User,
        authIsReady: true,
      };
      const action = { type: 'LOGOUT' as const };
      const newState = authReducer(stateWithUser, action);

      expect(newState.user).toBeNull();
      expect(newState.authIsReady).toBe(true);
    });

    it('should handle AUTH_IS_READY action', () => {
      const action = { type: 'AUTH_IS_READY' as const, payload: null };
      const newState = authReducer(initialState, action);

      expect(newState.user).toBeNull();
      expect(newState.authIsReady).toBe(true);
    });
  });

  describe('AuthContextProvider', () => {
    it('should render without crashing', () => {
      const tree = ReactTestRenderer.create(
        <AuthContextProvider>
          <React.Fragment />
        </AuthContextProvider>
      );
      expect(tree).toBeTruthy();
      tree.unmount();
    });
  });
});
