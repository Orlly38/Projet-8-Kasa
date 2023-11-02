import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Components/Footer'; 

describe('Footer', () => {
    test('Should render footer', () => {
      const { container } = render(<Footer />);
      expect(container).toBeDefined(); 
    });
});

describe("Footer's text", () => {
  test('Should render text', () => {
    const { queryByText } = render(<Footer />);
    const text = queryByText("© 2020 Kasa. All rights reserved");
    expect (text).not.toBeNull();
  })
})