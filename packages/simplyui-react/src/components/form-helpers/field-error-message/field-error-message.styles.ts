import { cva } from 'class-variance-authority';

export const fieldErrorMessageStyles = cva([
  'text-xs',
  'cursor-default',
  'font-light',
  'text-error-11',

  'motion-safe:transition',
  'motion-safe:duration-150',

  'data-[disabled]:opacity-40',
  'data-[disabled]:select-none',
]);
