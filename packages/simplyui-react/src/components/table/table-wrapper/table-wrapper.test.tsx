import type { TableWrapperProps } from './table-wrapper.types';
import { render, screen } from '@testing-library/react';
import { TableWrapper } from './table-wrapper';

const testId = 'table-wrapper';

function TableWrapperTest(props: Partial<TableWrapperProps>) {
  return (
    <TableWrapper data-testid={testId} {...props}>
      Test
    </TableWrapper>
  );
}

describe('TableWrapper', () => {
  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<TableWrapperTest className={className} />);
    expect(screen.getByTestId(testId)).toHaveClass(className);
  });
});
