import { render, screen } from '@testing-library/react';
import FAQ from '../components/FAQ';

describe('FAQ', () => {
  it('renders a heading', () => {
    render(<FAQ />);

    const heading = screen.getByRole('heading', {
      name: /Frequently Asked Questions/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
