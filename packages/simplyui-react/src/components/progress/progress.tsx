import type { ProgressProps, IndicatorElementStyle } from './progress.types';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import {
  progressTrackStyles,
  progressIndicatorStyles,
  progressLabelWrapperStyles,
} from './progress.styles';

const defaultProps: Partial<ProgressProps> = {
  value: 0,
  min: 0,
  max: 100,
  animated: true,
  roundedIndicatorEdge: true,
  size: 'md',
  color: 'primary',
  backgroundColor: 'neutral',
  rounded: 'full',
  stripesAnimationDuration: 1000,
  widthTransitionDuration: 600,
  indeterminateSafeAnimationDuration: 1000,
  indeterminateReduceAnimationDuration: 4000,
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(props, ref) {
  const {
    value,
    min,
    max,
    indeterminate,
    striped,
    animated,
    animatedStripes,
    roundedIndicatorEdge,
    label,
    valueLabel,
    showValueLabel,
    valueText,
    size,
    color,
    backgroundColor,
    rounded,
    stripesAnimationDuration,
    widthTransitionDuration,
    indeterminateSafeAnimationDuration,
    indeterminateReduceAnimationDuration,
    rootClassName,
    rootStyle,
    labelWrapperClassName,
    labelWrapperStyle,
    labelClassName,
    labelStyle,
    valueLabelClassName,
    valueLabelStyle,
    trackClassName,
    trackStyle,
    indicatorClassName,
    indicatorStyle,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const labelId = useId();

  const _value = value ? value : 0;
  const _max = max ? max : 100;

  const _valueLabel = valueLabel ? valueLabel(_value, _max) : `${getIndicatorWidth()}%`;
  const _valueText = valueText ? valueText(_value, _max) : `${getIndicatorWidth()}%`;

  const shouldHaveStripes = indeterminate ? false : striped;
  const shouldRenderValueLabel = Boolean(showValueLabel) && !Boolean(indeterminate);
  const shouldRenderLabelWrapper = Boolean(label) || shouldRenderValueLabel;

  const dataSet = {
    'data-animated': animated ? '' : undefined,
    'data-animated-stripes': animatedStripes ? '' : undefined,
    'data-indeterminate': indeterminate ? '' : undefined,
    'data-striped': shouldHaveStripes ? '' : undefined,
  };

  const indicatorElementStyle: IndicatorElementStyle = {
    // indicator position
    transform: `translateX(-${100 - getIndicatorWidth()}%)`,

    // css variables
    '--progress-stripes-animation-duration': `${stripesAnimationDuration}ms`,
    '--progress-width-transition-duration': `${widthTransitionDuration}ms`,
    '--progress-indeterminate-safe-animation-duration': `${indeterminateSafeAnimationDuration}ms`,
    '--progress-indeterminate-reduce-animation-duration': `${indeterminateReduceAnimationDuration}ms`,

    // rest style
    ...indicatorStyle,
  };

  function getIndicatorWidth() {
    return (_value * 100) / _max;
  }

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuetext={indeterminate ? undefined : _valueText}
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-labelledby={label ? labelId : undefined}
      style={rootStyle}
      className={twMerge(rootClassName)}
      {...others}
    >
      {shouldRenderLabelWrapper && (
        <div
          style={labelWrapperStyle}
          className={twMerge(progressLabelWrapperStyles({ size }), labelWrapperClassName)}
        >
          {label && (
            <span id={labelId} style={labelStyle} className={twMerge(labelClassName)}>
              {label}
            </span>
          )}
          {shouldRenderValueLabel && (
            <span style={valueLabelStyle} className={twMerge(valueLabelClassName)}>
              {_valueLabel}
            </span>
          )}
        </div>
      )}
      <div
        style={trackStyle}
        className={twMerge(progressTrackStyles({ size, backgroundColor, rounded }), trackClassName)}
      >
        <div
          {...dataSet}
          style={indicatorElementStyle}
          className={twMerge(
            progressIndicatorStyles({ color, roundedIndicatorEdge }),
            indicatorClassName
          )}
        />
      </div>
    </div>
  );
});
