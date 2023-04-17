import type { NativeSelectIconProps } from './native-select-icon.types';
import { render } from '@testing-library/react';
import { NativeSelectIcon } from './native-select-icon';

function NativeSelectIconTest(props: Partial<NativeSelectIconProps>) {
  return <NativeSelectIcon size="md" iconSize={undefined} {...props} />;
}

function getIconElement(container: HTMLElement) {
  return container.querySelector('svg');
}

describe('NativeSelectIcon', () => {
  it('should have role="presentation"', () => {
    const { container } = render(<NativeSelectIconTest />);
    expect(getIconElement(container)).toHaveAttribute('role', 'presentation');
  });

  it('should have focusable="false"', () => {
    const { container } = render(<NativeSelectIconTest />);
    expect(getIconElement(container)).toHaveAttribute('focusable', 'false');
  });

  it('should have aria-hidden="true"', () => {
    const { container } = render(<NativeSelectIconTest />);
    expect(getIconElement(container)).toHaveAttribute('aria-hidden', 'true');
  });

  it('should support custom icon size when iconSize property provided as number', () => {
    const iconSize = 10;

    const { container } = render(<NativeSelectIconTest iconSize={iconSize} />);
    expect(getIconElement(container)).toHaveStyle({
      height: `${iconSize}px`,
      width: `${iconSize}px`,
    });
  });

  it('should support custom icon size when iconSize property provided as string', () => {
    const iconSize = '10rem';

    const { container } = render(<NativeSelectIconTest iconSize={iconSize} />);
    expect(getIconElement(container)).toHaveStyle({ height: iconSize, width: iconSize });
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    const { container } = render(<NativeSelectIconTest className={className} />);
    expect(getIconElement(container)).toHaveClass(className);
  });
});
