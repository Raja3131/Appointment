import React from 'react';
import renderer from 'react-test-renderer';
import Message from './Message';

test('renders correctly', () => {
  const tree = renderer
    .create(<Message />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
jest.mock('react-native-gesture-handler', () => {});