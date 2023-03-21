import type { SliderTrackProps } from './slider-track.types';
import { Track } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { useSliderContext } from '../slider-context/slider-context';
import { sliderTrackStyles } from './slider-track.styles';

export function SliderTrack(props: SliderTrackProps) {
  const { className, ...others } = props;

  const { size, rounded } = useSliderContext();

  return <Track {...others} className={twMerge(sliderTrackStyles({ size, rounded }), className)} />;
}
