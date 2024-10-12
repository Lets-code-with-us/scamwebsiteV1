/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from "@/app/page";

describe('Home component', () => {
    it('renders the Home element correctly', () => {
        render(<Home />);
        // Check if the <section> element is in the document
        const section = document.querySelector('section');
        expect(section).toBeInTheDocument();

        // Check if the <section> has exactly 5 children
        expect(section?.children.length).toBe(5);
    });
});
