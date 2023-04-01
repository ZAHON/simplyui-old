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

  it('should have speed handed over when speed provided', () => {
    const speed = 500;

    render(<Loader speed={speed} />);
    expect(screen.getByRole('status')).toHaveStyle({
      '--loader-animation-duration': `${speed}ms`,
    });
  });

  it('should have reduce speed handed over when reduceSpeed provided', () => {
    const reduceSpeed = 3000;

    render(<Loader reduceSpeed={reduceSpeed} />);
    expect(screen.getByRole('status')).toHaveStyle({
      '--loader-reduce-animation-duration': `${reduceSpeed}ms`,
    });
  });

  it('should have fallback text', () => {
    render(<Loader label={label} />);
    expect(screen.getByRole('status')).toHaveTextContent(label);
  });
});
