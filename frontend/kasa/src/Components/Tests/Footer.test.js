import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer'; 

//TEST POUR SAVOIR SI LE FOOTER S'AFFICHE
describe('Footer', () => {
    test('Should render footer', () => {
      const { container } = render(<Footer />);
      expect(container).toBeDefined(); 
    });
});

//TEST POUR SAVOIR SI LE TEXTE DU FOOTER S'AFFICHE
describe("Footer's text", () => {
  test('Should render text', () => {
    const { queryByText } = render(<Footer />);
    const text = queryByText("© 2020 Kasa. All rights reserved");
    expect (text).not.toBeNull();
  })
})