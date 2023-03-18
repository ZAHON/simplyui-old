import type { LabelAsteriskProps } from './label-asterisk.types';
import { twMerge } from 'tailwind-merge';
import { labelAsteriskStyles } from './label-asterisk.styles';

export function LabelAsterisk(props: LabelAsteriskProps) {
  const { className } = props;

  const asterisk = ' *';

  return (
    <span aria-hidden className={twMerge(labelAsteriskStyles(), className)}>
      {asterisk}
    </span>
  );
}
