import type { TableProps } from './table.types';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './table';

function TableTest(props: Partial<TableProps>) {
  return (
    <Table {...props}>
      <caption>Some elements from periodic table</caption>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>Helium</td>
          <td>He</td>
          <td>4.0026</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Carbon</td>
          <td>C</td>
          <td>12.011</td>
        </tr>
      </tbody>
    </Table>
  );
}

describe('Table', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLTableElement>();

    render(
      <Table ref={ref}>
        <caption>Table test</caption>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<TableTest className={className} />);
    expect(screen.getByRole('table')).toHaveClass(className);
  });
});
