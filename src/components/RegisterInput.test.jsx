/**
 *  Testing Scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(nameInput, 'Name Test');

    // Assert
    expect(nameInput).toHaveValue('Name Test');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'Email Test');

    // Assert
    expect(emailInput).toHaveValue('Email Test');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'Password Test');

    // Assert
    expect(passwordInput).toHaveValue('Password Test');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const registerMock = vi.fn();
    render(<RegisterInput register={registerMock} />);
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const registerButton = screen.getByRole('button', { name: 'Register' });

    // Action
    await userEvent.type(nameInput, 'Name Test');
    await userEvent.type(emailInput, 'Email Test');
    await userEvent.type(passwordInput, 'Password Test');
    await userEvent.click(registerButton);

    // Assert
    expect(registerMock).toHaveBeenCalledWith(
      'Name Test',
      'Email Test',
      'Password Test'
    );
  });
});
