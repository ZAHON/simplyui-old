import type { SliderProps } from './slider.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { SliderTrack } from './slider-track/slider-track';
import { SliderRange } from './slider-range/slider-range';
import { SliderThumb } from './slider-thumb/slider-thumb';
import { sliderStyles } from './slider.styles';

const defaultProps: Partial<SliderProps> = {
  min: 0,
  max: 100,
  step: 1,
  size: 'md',
  color: 'primary',
  focusOutlineColor: 'primary',
  orientation: 'horizontal',
  showRange: true,
};

export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider(props, ref) {
  const {
    defaultValue,
    value,
    onChange,
    onChangeEnd,
    size,
    color,
    orientation,
    focusOutlineColor,
    showRange,
    thumbLabel,
    trackProps,
    rangeProps,
    thumbProps,
    className,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const _defaultValue = defaultValue ? [defaultValue] : undefined;
  const _value = value ? [value] : undefined;

  function handleValueChange(value: number[]) {
    if (onChange) {
      onChange(value[0]);
    }
  }

  function handleValueCommit(value: number[]) {
    if (onChangeEnd) {
      onChangeEnd(value[0]);
    }
  }

  return (
    <Root
      ref={ref}
      orientation={orientation}
      defaultValue={_defaultValue}
      value={_value}
      onValueChange={handleValueChange}
      onValueCommit={handleValueCommit}
      className={twMerge(sliderStyles({ size, orientation }), className)}
      {...others}
    >
      <SliderTrack size={size} orientation={orientation} {...trackProps}>
        <SliderRange
          color={color}
          orientation={orientation}
          showRange={showRange}
          {...rangeProps}
        />
      </SliderTrack>
      <SliderThumb
        size={size}
        color={color}
        focusOutlineColor={focusOutlineColor}
        aria-label={thumbLabel}
        {...thumbProps}
      />
    </Root>
  );
});

Slider.displayName = 'Slider';
