import type { TableHTMLAttributes, ReactNode } from 'react';
import type { TableWrapperProps } from './table-wrapper/table-wrapper.types';
import type { Size } from '../../types';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /**
   * The content of the table.
   */
  children: ReactNode;

  /**
   * The font size of the text inside table.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the table.
   * @default "simple"
   */
  variant?: 'simple' | 'striped-odd' | 'striped-even';

  /**
   * If `true`, rows will be have hover color.
   * @default false
   */
  highlightOnHover?: boolean;

  /**
   * If `true`, table will have border.
   * @default false
   */
  withBorder?: boolean;

  /**
   * If `true`, columns will be have border.
   * @default false
   */
  withColumnBorders?: boolean;

  /**
   * If `true`, rows will be have border.
   * @default true
   */
  withRowBorders?: boolean;

  /**
   * If `true`, `<tbody>` element will be have decorative accent.
   * @default false
   */
  withHeadAccent?: boolean;

  /**
   * If `true`, `<tfoot>` element will be have decorative accent.
   * @default false
   */
  withFootAccent?: boolean;

  /**
   * The layout of the table.
   * @default "auto"
   */
  layout?: 'auto' | 'fixed';

  /**
   * The value of the horizontal cells spacing.
   * @default "xs"
   */
  horizontalSpacing?: Size | 'none';

  /**
   * The value of the vertical cells spacing.
   * @default "xs"
   */
  verticalSpacing?: Size | 'none';

  /**
   * The position of the `<caption>` element.
   * @default "top"
   */
  captionSide?: 'bottom' | 'top';

  /**
   * Props to forward to the table wrapper element.
   */
  wrapperProps?: Omit<TableWrapperProps, 'children'>;
}
