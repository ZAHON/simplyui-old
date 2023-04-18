import type { TabsListProps } from './tabs-list.types';
import { forwardRef } from 'react';
import { List } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils';
import { useTabsContext } from '../tabs-context/tabs-context';
import { tabsListStyles } from './tabs-list.styles';

const defaultProps: Partial<TabsListProps> = {
  position: 'left',
  loop: true,
};

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(function TabsList(props, ref) {
  const { size, position, grow, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const { variant } = useTabsContext();

  return (
    <List
      ref={ref}
      className={twMerge(tabsListStyles({ variant, size, position, grow }), className)}
      {...others}
    >
      {children}
    </List>
  );
});

TabsList.displayName = 'TabsList';
