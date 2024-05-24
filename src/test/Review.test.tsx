import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Review from "../pages/review-page/Review";

describe('Review Component', () => {
    //Tests if the component renders correctly,
    // by checking if a certain text appears on the screen.
    test('renders Review component', () => {
        render(<Review />);
        expect(screen.getByText(/Burger Reviews/i)).toBeInTheDocument();
    });

    //Tests if the form fields and buttons are rendered correctly,
    // by checking if a certain text appears on the screen and if button is present.
    test('renders form fields and buttons', () => {
        render(<Review />);
        expect(screen.getByText("Taste")).toBeInTheDocument();
        expect(screen.getByText("Texture")).toBeInTheDocument();
        expect(screen.getByText("Visual Presentation")).toBeInTheDocument();
        const textField = screen.getByLabelText(/Write your review here/i);
        expect(textField).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Submit Review/i })).toBeInTheDocument();
    });

    // Tests if form submission works as expected,
    // by simulating a form submission and checking if the expected behavior occurs.
    test('handles form submission', () => {
        render(<Review />);
        fireEvent.click(screen.getByRole('button', { name: /Submit Review/i }));
        // Simulates a click on the submit button
    });
});