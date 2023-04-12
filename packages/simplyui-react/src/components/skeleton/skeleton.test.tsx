import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './skeleton';

const dataTestId = 'skeleton';

describe('Skeleton', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Skeleton data-testid={dataTestId} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Skeleton data-testid={dataTestId} className={className} />);
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    render(<Skeleton data-testid={dataTestId} style={style} />);
    expect(screen.getByTestId(dataTestId)).toHaveStyle(style);
  });

  it('should have not data-visible attribute when property not visible provided', () => {
    render(<Skeleton data-testid={dataTestId} visible={false} />);
    expect(screen.getByTestId(dataTestId)).not.toHaveAttribute('data-visible');
  });

  it('should have data-visible attribute when property visible provided', () => {
    render(<Skeleton data-testid={dataTestId} visible={true} />);
    expect(screen.getByTestId(dataTestId)).toHaveAttribute('data-visible');
  });

  it('should have not data-animated attribute when animated property not provided', () => {
    render(<Skeleton data-testid={dataTestId} animated={false} />);
    expect(screen.getByTestId(dataTestId)).not.toHaveAttribute('data-animated');
  });

  it('should have data-animated attribute when animated property provided', () => {
    render(<Skeleton data-testid={dataTestId} animated={true} />);
    expect(screen.getByTestId(dataTestId)).toHaveAttribute('data-animated');
  });

  it('should have appropriate css variable with value when speedSafe property provided', () => {
    const speedSafe = 800;

    render(<Skeleton data-testid={dataTestId} speedSafe={speedSafe} />);
    expect(screen.getByTestId(dataTestId)).toHaveStyle({
      '--skeleton-safe-animation-duration': `${speedSafe}ms`,
    });
  });

  it('should have appropriate css variable with value when speedReduce property provided', () => {
    const speedReduce = 2000;

    render(<Skeleton data-testid={dataTestId} speedReduce={speedReduce} />);
    expect(screen.getByTestId(dataTestId)).toHaveStyle({
      '--skeleton-reduce-animation-duration': `${speedReduce}ms`,
    });
  });
});
