import type { SliderThumbProps } from './slider-thumb.types';
import { Thumb } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { useSliderContext } from '../slider-context/slider-context';
import { sliderThumbStyles } from './slider-thumb.styles';

export function SliderThumb(props: SliderThumbProps) {
  const { className, children, ...others } = props;

  const { size, color, rounded } = useSliderContext();

  return (
    <Thumb {...others} className={twMerge(sliderThumbStyles({ size, color, rounded }), className)}>
      {children}
    </Thumb>
  );
}
