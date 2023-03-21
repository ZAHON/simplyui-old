import type { SliderRangeProps } from './slider-range.types';
import { Range } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { useSliderContext } from '../slider-context/slider-context';
import { sliderRangeStyles } from './slider-range.styles';

export function SliderRange(props: SliderRangeProps) {
  const { className, ...others } = props;

  const { color, rounded } = useSliderContext();

  return (
    <Range {...others} className={twMerge(sliderRangeStyles({ color, rounded }), className)} />
  );
}
