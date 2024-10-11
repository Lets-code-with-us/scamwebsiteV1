/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import {SparklesPreview} from "@/components/component/Hero";

describe('SparklesPreview component', () => {
    it('renders the SparklesPreview element correctly', () => {
        render(<SparklesPreview />);
        expect(screen.getByText('Scam Alert')).toBeInTheDocument();
    });
});
