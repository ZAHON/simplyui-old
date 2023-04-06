import type { SkeletonProps } from './skeleton.types';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './skeleton';

const dataTestId = 'skeleton';

function SkeletonComponent(props: SkeletonProps) {
  return <Skeleton data-testid={dataTestId} {...props} />;
}

function getSkeletonElement() {
  return screen.getByTestId(dataTestId);
}

describe('Skeleton', () => {
  it('should have class name handed over when property className provided', () => {
    const className = 'test';

    render(<SkeletonComponent className={className} />);
    expect(getSkeletonElement()).toHaveClass(className);
  });

  it('should have style handed over when property style provided', () => {
    const style = { backgroundColor: 'red' };

    render(<SkeletonComponent style={style} />);
    expect(getSkeletonElement()).toHaveStyle(style);
  });

  it('should have not attribute data-visible when property visible not provided', () => {
    render(<SkeletonComponent visible={false} />);
    expect(getSkeletonElement()).not.toHaveAttribute('data-visible');
  });

  it('should have attribute data-visible when property visible provided', () => {
    render(<SkeletonComponent visible={true} />);
    expect(getSkeletonElement()).toHaveAttribute('data-visible');
  });

  it('should have not attribute data-animated when property animated not provided', () => {
    render(<SkeletonComponent animated={false} />);
    expect(getSkeletonElement()).not.toHaveAttribute('data-animated');
  });

  it('should have attribute data-animated when property animated provided', () => {
    render(<SkeletonComponent animated={true} />);
    expect(getSkeletonElement()).toHaveAttribute('data-animated');
  });

  it('should have appropriate css variable with value when property speedSafe provided', () => {
    const speedSafe = 800;

    render(<SkeletonComponent speedSafe={speedSafe} />);
    expect(getSkeletonElement()).toHaveStyle({
      '--skeleton-safe-animation-duration': `${speedSafe}ms`,
    });
  });

  it('should have appropriate css variable with value when property speedReduce provided', () => {
    const speedReduce = 2000;

    render(<SkeletonComponent speedReduce={speedReduce} />);
    expect(getSkeletonElement()).toHaveStyle({
      '--skeleton-reduce-animation-duration': `${speedReduce}ms`,
    });
  });
});
