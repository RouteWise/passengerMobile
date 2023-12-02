/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {it, expect} from '@jest/globals';
import {fireEvent, screen, render} from '@testing-library/react-native';

import renderer from 'react-test-renderer';

it('Notification Success Send', () => {
  const tree = render(<App />).toJSON();
  const text = screen.getByTestId('head');
  fireEvent.press(screen.getByTestId('notificationButton'));
});
