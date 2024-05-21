/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'Email Test');

    // Assert
    expect(emailInput).toHaveValue('Email Test');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'Password Test');

    // Assert
    expect(passwordInput).toHaveValue('Password Test');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const loginMock = vi.fn();
    render(<LoginInput login={loginMock} />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Sign In' });

    // Action
    await userEvent.type(emailInput, 'Email Test');
    await userEvent.type(passwordInput, 'Password Test');
    await userEvent.click(loginButton);

    // Assert
    expect(loginMock).toHaveBeenCalledWith({
      email: 'Email Test',
      password: 'Password Test',
    });
  });
});
