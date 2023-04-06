import type { KbdProps } from './kbd.types';
import { render, screen } from '@testing-library/react';
import { Kbd } from './kbd';

function KbdComponent(props: Omit<KbdProps, 'children'>) {
  return <Kbd {...props}>Enter</Kbd>;
}

function getKbdElement() {
  return screen.getByText('Enter');
}

describe('Kbd', () => {
  it('should have class name handed over when property className provided', () => {
    const className = 'test';

    render(<KbdComponent className={className} />);
    expect(getKbdElement()).toHaveClass(className);
  });

  it('should have style handed over when property style provided', () => {
    const style = { backgroundColor: 'red' };

    render(<KbdComponent style={style} />);
    expect(getKbdElement()).toHaveStyle(style);
  });
});
