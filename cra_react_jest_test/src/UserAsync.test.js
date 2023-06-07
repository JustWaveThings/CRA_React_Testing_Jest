import React from "react";
import {render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import UserApp from './UserApp';
import "@testing-library/jest-dom";


window.fetch = jest.fn(() => {
  const user = { name: 'Jack', email: 'jack@email.com' };

  return Promise.resolve({
    json: () => Promise.resolve(user),
  });
});

test('loading text is shown while API request is in progress', async () => {
  render(<UserApp/>)
  const loading = screen.getByText('Loading...');
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
})