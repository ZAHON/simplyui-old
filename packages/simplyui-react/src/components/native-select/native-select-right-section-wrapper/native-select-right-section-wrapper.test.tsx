import { NativeSelectRightSectionWrapperProps } from './native-select-right-section-wrapper.types';
import { render, screen } from '@testing-library/react';
import { NativeSelectRightSectionWrapper } from './native-select-right-section-wrapper';

const nativeSelectRightSectionWrapperContent = 'Test';

function NativeSelectRightSectionWrapperTest(props: Partial<NativeSelectRightSectionWrapperProps>) {
  return (
    <NativeSelectRightSectionWrapper size="md" {...props}>
      {nativeSelectRightSectionWrapperContent}
    </NativeSelectRightSectionWrapper>
  );
}

describe('NativeSelectRightSectionWrapper', () => {
  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<NativeSelectRightSectionWrapperTest className={className} />);
    expect(screen.getByText(nativeSelectRightSectionWrapperContent)).toHaveClass(className);
  });
});
