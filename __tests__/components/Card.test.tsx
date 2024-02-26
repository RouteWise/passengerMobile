import React from 'react';
import {render, act} from '@testing-library/react-native';
import {Card} from '../../src/components/main/';

describe('Card Component', () => {
  test('renders without crashing', () => {
    render(<Card theme="grayBase">Test Content</Card>);
  });

  test('renders loading indicator when isLoading is true', () => {
    const {getByTestId} = render(
      <Card theme="grayBase" isLoading={true}>
        Test Content
      </Card>,
    );

    const indicator = getByTestId('loading-indicator');
    expect(indicator).toBeTruthy();
  });

  test('does not render loading indicator when isLoading is false', () => {
    const {queryByTestId} = render(
      <Card theme="grayBase" isLoading={false}>
        Test Content
      </Card>,
    );

    const indicator = queryByTestId('loading-indicator');
    expect(indicator).toBeNull();
  });
});
