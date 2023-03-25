import type { LabelDescriptionProps } from './label-description.types';
import { twMerge } from 'tailwind-merge';
import { labelDescriptionStyles } from './label-description.styles';

export function LabelDescription(props: LabelDescriptionProps) {
  const { color, className, children, ...others } = props;

  return (
    <span {...others} className={twMerge(labelDescriptionStyles({ color }), className)}>
      {children}
    </span>
  );
}
