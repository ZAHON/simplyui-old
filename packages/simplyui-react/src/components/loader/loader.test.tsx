import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Loader ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should have role="status"', () => {
    render(<Loader />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Loader className={className} />);
    expect(screen.getByRole('status')).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    render(<Loader style={style} />);
    expect(screen.getByRole('status')).toHaveStyle(style);
  });

  it('should have appropriate css variable when loaderSize property provided', () => {
    const loaderSize = '10rem';

    render(<Loader loaderSize={loaderSize} />);
    expect(screen.getByRole('status')).toHaveStyle({
      '--loader-size': loaderSize,
    });
  });

  it('should have appropriate css variable when loaderThickness property provided', () => {
    const loaderThickness = '1rem';

    render(<Loader loaderThickness={loaderThickness} />);
    expect(screen.getByRole('status')).toHaveStyle({
      '--loader-thickness': loaderThickness,
    });
  });

  it('should have appropriate css variable with value when speedSafe property provided', () => {
    const speedSafe = 500;

    render(<Loader speedSafe={speedSafe} />);
    expect(screen.getByRole('status')).toHaveStyle({
      '--loader-safe-animation-duration': `${speedSafe}ms`,
    });
  });

  it('should have appropriate css variable with value when speedReduce property provided', () => {
    const speedReduce = 3000;

    render(<Loader speedReduce={speedReduce} />);
    expect(screen.getByRole('status')).toHaveStyle({
      '--loader-reduce-animation-duration': `${speedReduce}ms`,
    });
  });

  it('should have fallback text provided by label property', () => {
    const label = 'Loading...';

    render(<Loader label={label} />);
    expect(screen.getByRole('status')).toHaveTextContent(label);
  });
});
