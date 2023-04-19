import { cva } from 'class-variance-authority';

export const tableStyles = cva(
  [
    'w-full',
    'table-auto',
    'text-left',

    '[&_tbody_tr]:motion-safe:transition-color',
    '[&_tbody_tr]:motion-safe:duration-150',

    '[&_caption]:text-neutral-11',

    '[&_thead_tr_th]:text-neutral-11',
    '[&_thead_tr_th]:font-medium',

    '[&_tbody_tr_td]:text-neutral-12',

    '[&_tfoot_tr_th]:text-neutral-11',
    '[&_tfoot_tr_th]:font-medium',
  ],
  {
    variants: {
      withHeadAccent: {
        true: ['[&_thead_tr_th]:bg-neutral-3'],
      },
      withFootAccent: {
        true: ['[&_tfoot_tr_th]:bg-neutral-3'],
      },
      highlightOnHover: {
        true: ['hover:[&_tbody_tr]:bg-neutral-4'],
      },
      withRowBorders: {
        true: [
          '[&_thead_tr_th]:border-b',
          '[&_thead_tr_th]:border-b-neutral-4',

          '[&_tbody_tr_td]:border-t',
          '[&_tbody_tr_td]:border-t-neutral-4',

          '[&_tfoot_tr_th]:border-t',
          '[&_tfoot_tr_th]:border-t-neutral-4',
        ],
      },
      withColumnBorders: {
        true: [
          '[&_thead_tr_th]:border-r',
          '[&_thead_tr_th]:border-r-neutral-4',
          'last:[&_thead_tr_th]:border-r-0',

          '[&_tbody_td]:border-r',
          '[&_tbody_td]:border-r-neutral-4',
          'last:[&_tbody_td]:border-r-0',

          '[&_tfoot_tr_th]:border-r',
          '[&_tfoot_tr_th]:border-r-neutral-4',
          'last:[&_tfoot_tr_th]:border-r-0',
        ],
      },
      withBorder: {
        true: ['border', 'border-neutral-4'],
      },
      variant: {
        simple: ['[&_tbody_tr]:bg-transparent'],
        'striped-odd': ['odd:[&_tbody_tr]:bg-neutral-2', 'even:[&_tbody_tr]:bg-transparent'],
        'striped-even': ['even:[&_tbody_tr]:bg-neutral-2', 'odd:[&_tbody_tr]:bg-transparent'],
      },
      size: {
        xs: ['text-xs'],
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg'],
        xl: ['text-xl'],
      },
      layout: {
        auto: ['table-auto'],
        fixed: ['table-fixed'],
      },
      horizontalSpacing: {
        none: ['[&_thead_tr_th]:px-0', '[&_tbody_tr_td]:px-0', '[&_tfoot_tr_th]:px-0'],
        xs: ['[&_thead_tr_th]:px-2.5', '[&_tbody_tr_td]:px-2.5', '[&_tfoot_tr_th]:px-2.5'],
        sm: ['[&_thead_tr_th]:px-3', '[&_tbody_tr_td]:px-3', '[&_tfoot_tr_th]:px-3'],
        md: ['[&_thead_tr_th]:px-4', '[&_tbody_tr_td]:px-4', '[&_tfoot_tr_th]:px-4'],
        lg: ['[&_thead_tr_th]:px-5', '[&_tbody_tr_td]:px-5', '[&_tfoot_tr_th]:px-5'],
        xl: ['[&_thead_tr_th]:px-6', '[&_tbody_tr_td]:px-6', '[&_tfoot_tr_th]:px-6'],
      },
      verticalSpacing: {
        none: [
          '[&_caption]:my-0',
          '[&_thead_tr_th]:py-0',
          '[&_tbody_tr_td]:py-0',
          '[&_tfoot_tr_th]:py-0',
        ],
        xs: [
          '[&_caption]:my-2.5',
          '[&_thead_tr_th]:py-2.5',
          '[&_tbody_tr_td]:py-2.5',
          '[&_tfoot_tr_th]:py-2.5',
        ],
        sm: [
          '[&_caption]:my-3',
          '[&_thead_tr_th]:py-3',
          '[&_tbody_tr_td]:py-3',
          '[&_tfoot_tr_th]:py-3',
        ],
        md: [
          '[&_caption]:my-4',
          '[&_thead_tr_th]:py-4',
          '[&_tbody_tr_td]:py-4',
          '[&_tfoot_tr_th]:py-4',
        ],
        lg: [
          '[&_caption]:my-5',
          '[&_thead_tr_th]:py-5',
          '[&_tbody_tr_td]:py-5',
          '[&_tfoot_tr_th]:py-5',
        ],
        xl: [
          '[&_caption]:my-6',
          '[&_thead_tr_th]:py-6',
          '[&_tbody_tr_td]:py-6',
          '[&_tfoot_tr_th]:py-6',
        ],
      },
      captionSide: {
        top: ['caption-top', '[&_caption]:mt-0'],
        bottom: ['caption-bottom', '[&_caption]:mb-0'],
      },
    },
  }
);
