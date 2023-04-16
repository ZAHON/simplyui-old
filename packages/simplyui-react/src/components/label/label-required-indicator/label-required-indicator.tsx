import type { LabelRequiredIndicatorProps } from './label-required-indicator.types';
import { twMerge } from 'tailwind-merge';
import { labelRequiredIndicatorStyles } from './label-required-indicator.styles';

export function LabelRequiredIndicator(props: LabelRequiredIndicatorProps) {
  const { className, children, ...others } = props;

  return (
    <span aria-hidden className={twMerge(labelRequiredIndicatorStyles(), className)} {...others}>
      {children}
    </span>
  );
}
