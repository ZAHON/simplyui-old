import type { SliderProps } from './slider.types';
import { forwardRef, useState } from 'react';
import { Root } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { getShareDataset } from './utils/get-share-dataset';
import { SliderTrack } from './slider-track/slider-track';
import { SliderRange } from './slider-range/slider-range';
import { SliderThumb } from './slider-thumb/slider-thumb';
import { SliderLabel } from './slider-label/slider-label';
import { SliderContextProvider } from './slider-context/slider-context';
import { sliderStyles } from './slider.styles';

const defaultProps: Partial<SliderProps> = {
  size: 'md',
  color: 'primary',
  disabled: false,
  inverted: false,
  min: 0,
  max: 100,
  step: 1,
  showLabel: 'on-hover',
};

export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider(props, ref) {
  const {
    size,
    color,
    defaultValue,
    value,
    min,
    disabled,
    rounded,
    thumbArialabel,
    thumbIcon,
    showLabel,
    label,
    rootClassName,
    trackClassName,
    rangeClassName,
    thumbClassName,
    labelClassName,
    onChange,
    onChangeEnd,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const [_value, setValue] = useState(value || defaultValue || min || 0);

  const _label = typeof label === 'function' ? label(_value) : label;

  const shareDataset = getShareDataset({ disabled });

  function handleValueChange(value: number[]) {
    setValue(value[0]);

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
      {...others}
      {...shareDataset}
      ref={ref}
      min={min}
      disabled={disabled}
      defaultValue={defaultValue ? [defaultValue] : undefined}
      value={value ? [value] : undefined}
      onValueChange={handleValueChange}
      onValueCommit={handleValueCommit}
      className={twMerge(sliderStyles({ size }), rootClassName)}
    >
      <SliderContextProvider value={{ size, color, showLabel, rounded }}>
        <SliderTrack {...shareDataset} className={trackClassName}>
          <SliderRange {...shareDataset} className={rangeClassName} />
        </SliderTrack>
        <SliderThumb {...shareDataset} aria-label={thumbArialabel} className={thumbClassName}>
          {thumbIcon && thumbIcon}
          {showLabel !== 'none' && (
            <SliderLabel {...shareDataset} data-show-label={showLabel} className={labelClassName}>
              {_label ? _label : _value}
            </SliderLabel>
          )}
        </SliderThumb>
      </SliderContextProvider>
    </Root>
  );
});

Slider.displayName = 'Slider';
