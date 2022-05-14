import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './index';

test('Navbar Control', () => {
  render(<BrowserRouter><Navbar title='Personel Değerlendirme'/></BrowserRouter>);
  const element = screen.getByText(/Personel Değerlendirme/i);
  expect(element).toBeInTheDocument();
});