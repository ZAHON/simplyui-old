import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

const label = 'Loading...';

describe('Loader', () => {
  it('should render correctly', () => {
    render(<Loader />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should have class name handed over when className provided', () => {
    const className = 'test';

    render(<Loader className={className} />);
    expect(screen.getByRole('status')).toHaveClass(className);
  });

  it('should have appropriate css variable with value when property speedSafe provided', () => {
    const speedSafe = 500;

    render(<Loader speedSafe={speedSafe} />);
    expect(screen.getByRole('status')).toHaveStyle({
      '--loader-animation-duration': `${speedSafe}ms`,
    });
  });

  it('should have appropriate css variable with value when property speedReduce provided', () => {
    const speedReduce = 3000;

    render(<Loader speedReduce={speedReduce} />);
    expect(screen.getByRole('status')).toHaveStyle({
      '--loader-reduce-animation-duration': `${speedReduce}ms`,
    });
  });

  it('should have fallback text', () => {
    render(<Loader label={label} />);
    expect(screen.getByRole('status')).toHaveTextContent(label);
  });
});
