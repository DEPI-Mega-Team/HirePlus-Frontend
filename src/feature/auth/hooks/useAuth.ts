import { useState } from 'react';
import { 
  AuthState, 
  LoginRequest, 
  RegisterRequest, 
  ResetPasswordRequest, 
  UpdatePasswordRequest,
  User,
  AuthResponse
} from '../../../shared/types/auth';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  const login = async (credentials: LoginRequest) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Implement API call to login endpoint
      const response: AuthResponse = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      }).then(res => res.json());

      setAuthState({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

      localStorage.setItem('token', response.token);
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to login'
      }));
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Implement API call to register endpoint
      const response: AuthResponse = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(res => res.json());

      setAuthState({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });

      localStorage.setItem('token', response.token);
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to register'
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState(initialState);
  };

  const resetPassword = async (data: ResetPasswordRequest) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Implement API call to reset password endpoint
      await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      setAuthState(prev => ({ ...prev, isLoading: false }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to reset password'
      }));
    }
  };

  const updatePassword = async (data: UpdatePasswordRequest) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // TODO: Implement API call to update password endpoint
      await fetch('/api/auth/update-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        },
        body: JSON.stringify(data)
      });

      setAuthState(prev => ({ ...prev, isLoading: false }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to update password'
      }));
    }
  };

  const updateUser = (user: User) => {
    setAuthState(prev => ({ ...prev, user }));
  };

  return {
    ...authState,
    login,
    register,
    logout,
    resetPassword,
    updatePassword,
    updateUser
  };
};