import type { SkeletonProps, SkeletonStyle } from './skeleton.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { skeletonStyles } from './skeleton.styles';

const defaultProps: Partial<SkeletonProps> = {
  visible: true,
  animated: true,
  speedSafe: 1500,
  speedReduce: 3000,
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(props, ref) {
  const {
    visible,
    animated,
    fitContent,
    rounded,
    speedSafe,
    speedReduce,
    style,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const dataSet = {
    'data-visible': visible ? '' : undefined,
    'data-animated': animated ? '' : undefined,
  };

  const skeletonStyle: SkeletonStyle = {
    '--skeleton-safe-animation-duration': `${speedSafe}ms`,
    '--skeleton-reduce-animation-duration': `${speedReduce}ms`,
    ...style,
  };

  return (
    <div
      ref={ref}
      {...dataSet}
      {...others}
      style={skeletonStyle}
      className={twMerge(skeletonStyles({ rounded, fitContent }), className)}
    >
      {children}
    </div>
  );
});
