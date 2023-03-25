import { cva } from 'class-variance-authority';

export const fieldDescriptionStyles = cva([
  'text-xs',
  'cursor-default',
  'font-light',
  'text-neutral-12',

  'motion-safe:transition',
  'motion-safe:duration-150',

  'data-[disabled]:opacity-40',
  'data-[disabled]:select-none',
]);
