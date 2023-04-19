import type { TableProps } from './table.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { TableWrapper } from './table-wrapper/table-wrapper';
import { tableStyles } from './table.styles';

const defaultProps: Partial<TableProps> = {
  size: 'md',
  variant: 'simple',
  layout: 'auto',
  horizontalSpacing: 'xs',
  verticalSpacing: 'xs',
  captionSide: 'top',
  withRowBorders: true,
};

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(props, ref) {
  const {
    size,
    variant,
    withBorder,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    withHeadAccent,
    withFootAccent,
    layout,
    horizontalSpacing,
    verticalSpacing,
    captionSide,
    className,
    wrapperProps,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <TableWrapper {...wrapperProps}>
      <table
        ref={ref}
        className={twMerge(
          tableStyles({
            size,
            withBorder,
            variant,
            highlightOnHover,
            withColumnBorders,
            withRowBorders,
            layout,
            horizontalSpacing,
            verticalSpacing,
            captionSide,
            withHeadAccent,
            withFootAccent,
          }),
          className
        )}
        {...others}
      >
        {children}
      </table>
    </TableWrapper>
  );
});

Table.displayName = 'Table';
