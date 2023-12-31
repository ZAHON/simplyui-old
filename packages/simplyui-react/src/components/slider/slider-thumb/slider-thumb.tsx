import type { SliderThumbProps } from './slider-thumb.types';
import { Thumb } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { sliderThumbStyles } from './slider-thumb.styles';

export function SliderThumb(props: SliderThumbProps) {
  const { size, color, focusOutlineColor, className, ...others } = props;

  return (
    <Thumb
      className={twMerge(sliderThumbStyles({ size, color, focusOutlineColor }), className)}
      {...others}
    />
  );
}
