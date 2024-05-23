import React from 'react';
import { render, screen } from '@testing-library/react';
import Review from "../pages/review-page/Review";

test('renders learn react link', () => {
    render(<Review />);
    const linkElement = screen.getByText(/Review/i);
    expect(linkElement).toBeInTheDocument();
});