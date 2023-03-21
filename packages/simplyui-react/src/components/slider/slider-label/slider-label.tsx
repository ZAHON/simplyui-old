import type { SliderLabelProps } from './slider-label.types';
import { twMerge } from 'tailwind-merge';
import { useSliderContext } from '../slider-context/slider-context';
import { sliderLabelStyles } from './slider-label.styles';

export function SliderLabel(props: SliderLabelProps) {
  const { className, children, ...others } = props;

  const { showLabel } = useSliderContext();

  return (
    <div
      {...others}
      role="presentation"
      aria-hidden="true"
      className={twMerge(sliderLabelStyles({ showLabel }), className)}
    >
      {children}
    </div>
  );
}
