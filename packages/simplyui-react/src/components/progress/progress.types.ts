import type { HTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { Size, Color, Rounded } from '../../types';

type HTMLAttributesToMmmit =
  | 'className'
  | 'style'
  | 'role'
  | 'aria-valuetext'
  | 'aria-valuenow'
  | 'aria-valuemin'
  | 'aria-valuemax'
  | 'data-animated'
  | 'data-animated-stripes'
  | 'data-indeterminate'
  | 'data-striped';

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToMmmit> {
  /**
   * The value of the progress indicator.
   * @default 0
   */
  value?: number;

  /**
   * The minimum value of the progress.
   * @default 0
   */
  min?: number;

  /**
   * The maximum value of the progress.
   * @default 100
   */
  max?: number;

  /**
   * If `true`, the progress will be indeterminate and the value prop will be ignored.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * If `true`, the progress indicator will show stripes.
   * @default false
   */
  striped?: boolean;

  /**
   * If `true`, the indicator transition width will be animated.
   * @default true
   */
  animated?: boolean;

  /**
   * If `true`, and striped is `true`, the stripes will be animated.
   * @default false
   */
  animatedStripes?: boolean;

  /**
   * If `true`, the progress indicator edge will have value of border radius the same as the `rounded` property.
   * @default true
   */
  roundedIndicatorEdge?: boolean;

  /**
   * If `true`, the label will be visible.
   *
   * Label provide an accessible name for root element using attribute `aria-labelledby`.
   *
   * If you don't want to use the built-in label pass atribuite `aria-label` or `aria-labelledby` to identify the element to screen readers.
   */
  label?: ReactNode;

  /**
   * A function to generate value label or any react node to render instead. If not provided, content of the value label will be the numeric value as a percentage of the max value.
   */
  valueLabel?: (value: number, max: number) => ReactNode;

  /**
   * If `true`, the value label will be visible. You can replace default content using property `valueLabel`.
   * @default false
   */
  showValueLabel?: boolean;

  /**
   * A function to get the accessible text representing the current value in a human-readable format. If not provided, the value text will be read as the numeric value as a percentage of the max value.
   */
  valueText?: (value: number, max: number) => string;

  /**
   * The size of the progress.
   * @default "md"
   */
  size?: Size;

  /**
   * The color of the progress indicator.
   * @default "primary"
   */
  color?: Exclude<Color, 'neutral'>;

  /**
   * The background color of the progress.
   * @default "neutral"
   */
  backgroundColor?: Color;

  /**
   * The value of the progress border radius.
   * @default "full"
   */
  rounded?: Extract<Rounded, 'none' | 'squared' | 'full'>;

  /**
   * The duration of the stripes animation in ms.
   * @default 1000
   */
  stripesAnimationDuration?: number;

  /**
   * The duration of the indicator width transition in ms.
   * @default 600
   */
  widthTransitionDuration?: number;

  /**
   * The safe animation duration in ms. On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), this value will be used as the duration of the animation.
   * @default 1000
   */
  indeterminateSafeAnimationDuration?: number;

  /**
   * The reduce animation duration in ms. On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), this value will be used as the duration of the animation.
   * @default 4000
   */
  indeterminateReduceAnimationDuration?: number;

  /**
   * Override progress root element default styles.
   */
  rootClassName?: string;

  /**
   * Override progress root element default inline style.
   */
  rootStyle?: CSSProperties;

  /**
   * Override progress label wrapper element default styles.
   */
  labelWrapperClassName?: string;

  /**
   * Override progress label wrapper element default inline style.
   */
  labelWrapperStyle?: CSSProperties;

  /**
   * Override progress label element default styles.
   */
  labelClassName?: string;

  /**
   * Override progress label element default inline style.
   */
  labelStyle?: CSSProperties;

  /**
   * Override progress value label element default styles.
   */
  valueLabelClassName?: string;

  /**
   * Override progress value label element default inline style.
   */
  valueLabelStyle?: CSSProperties;

  /**
   * Override progress track element default styles.
   */
  trackClassName?: string;

  /**
   * Override progress track element default inline style.
   */
  trackStyle?: CSSProperties;

  /**
   * Override progress indicator element default styles.
   */
  indicatorClassName?: string;

  /**
   * Override progress indicator element default inline style.
   */
  indicatorStyle?: CSSProperties;
}

export interface IndicatorElementStyle extends CSSProperties {
  '--progress-stripes-animation-duration'?: string;
  '--progress-width-transition-duration'?: string;
  '--progress-indeterminate-safe-animation-duration'?: string;
  '--progress-indeterminate-reduce-animation-duration'?: string;
}
