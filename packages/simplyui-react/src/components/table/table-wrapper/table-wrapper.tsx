import type { TableWrapperProps } from './table-wrapper.types';
import { twMerge } from 'tailwind-merge';
import { tableWrapperStyles } from './table-wrapper.styles';

export function TableWrapper(props: TableWrapperProps) {
  const { className, children, ...others } = props;

  return (
    <div className={twMerge(tableWrapperStyles(), className)} {...others}>
      {children}
    </div>
  );
}
