import { screen, render } from '@testing-library/react';
import { Button } from './button';

const buttonContent = 'Button';
const leftIcon = 'left-icon';
const rightIcon = 'right-icon';

describe('Button', () => {
  describe('Root element', () => {
    it('should be disabled when property disabled provided', () => {
      render(<Button disabled={true}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toBeDisabled;
    });

    it('should be disabled when property loading provided', () => {
      render(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toBeDisabled;
    });

    it('should have loading content when properties loading and loadingContent provided', () => {
      const loadingContent = 'Loading';

      const { rerender } = render(<Button>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toBeInTheDocument();
      expect(screen.queryByText(loadingContent)).not.toBeInTheDocument();

      rerender(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toBeInTheDocument();
      expect(screen.queryByText(loadingContent)).not.toBeInTheDocument();

      rerender(
        <Button loading={true} loadingContent={loadingContent}>
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(buttonContent)).not.toBeInTheDocument();
      expect(screen.getByText(loadingContent)).toBeInTheDocument();
    });

    it('should not include left icon when property leftIcon not provided', () => {
      render(<Button>{buttonContent}</Button>);
      expect(screen.queryByText(leftIcon)).not.toBeInTheDocument();
    });

    it('should include left icon when property leftIcon provided', () => {
      render(<Button leftIcon={leftIcon}>{buttonContent}</Button>);
      expect(screen.getByText(leftIcon)).toBeInTheDocument();
    });

    it('should not include right icon when property rightIcon not provided', () => {
      render(<Button>{buttonContent}</Button>);
      expect(screen.queryByText(rightIcon)).not.toBeInTheDocument();
    });

    it('should include right icon when property rightIcon provided', () => {
      render(<Button rightIcon={rightIcon}>{buttonContent}</Button>);
      expect(screen.getByText(rightIcon)).toBeInTheDocument();
    });

    it('should not include loader when property loading not provided', () => {
      render(<Button>{buttonContent}</Button>);
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });

    it('should include loader when property loading provided', () => {
      render(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should include custom loader when properties loading and loader provided', () => {
      function CustomLoader() {
        return <span>Loader</span>;
      }

      const { rerender } = render(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.queryByText('Loader')).not.toBeInTheDocument();

      rerender(
        <Button loading={true} loader={<CustomLoader />}>
          {buttonContent}
        </Button>
      );
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(screen.getByText('Loader')).toBeInTheDocument();
    });

    it('should have class name handed over when property className provided', () => {
      const className = 'test';

      render(<Button className={className}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toHaveClass(className);
    });

    it('should have style handed over when property style provided', () => {
      const style = { backgroundColor: 'red' };

      render(<Button style={style}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toHaveStyle(style);
    });
  });

  describe('Left icon wrapper element', () => {
    it('should include loader when property loading provided and property loaderPosition is set to left', () => {
      const { rerender } = render(<Button>{buttonContent}</Button>);
      expect(screen.queryByText(leftIcon)).not.toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      rerender(
        <Button loading={true} loaderPosition="left">
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(leftIcon)).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();

      rerender(<Button leftIcon={leftIcon}>{buttonContent}</Button>);
      expect(screen.getByText(leftIcon)).toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      rerender(
        <Button leftIcon={leftIcon} loading={true} loaderPosition="left">
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(leftIcon)).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should have class name handed over when property leftIconClassName provided', () => {
      const leftIconClassName = 'test';

      render(
        <Button leftIcon={leftIcon} leftIconClassName={leftIconClassName}>
          {buttonContent}
        </Button>
      );
      expect(screen.getByText(leftIcon)).toHaveClass(leftIconClassName);
    });

    it('should have style handed over when property leftIconStyle provided', () => {
      const leftIconStyle = { backgroundColor: 'red' };

      render(
        <Button leftIcon={leftIcon} leftIconStyle={leftIconStyle}>
          {buttonContent}
        </Button>
      );
      expect(screen.getByText(leftIcon)).toHaveStyle(leftIconStyle);
    });
  });

  describe('Right icon wrapper element', () => {
    it('should include loader when property loading provided and property loaderPosition is set to right', () => {
      const { rerender } = render(<Button>{buttonContent}</Button>);
      expect(screen.queryByText(rightIcon)).not.toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      rerender(
        <Button loading={true} loaderPosition="right">
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(rightIcon)).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();

      rerender(<Button rightIcon={rightIcon}>{buttonContent}</Button>);
      expect(screen.getByText(rightIcon)).toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      rerender(
        <Button rightIcon={rightIcon} loading={true} loaderPosition="right">
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(rightIcon)).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should have class name handed over when property rightIconClassName provided', () => {
      const rightIconClassName = 'test';

      render(
        <Button rightIcon={rightIcon} rightIconClassName={rightIconClassName}>
          {buttonContent}
        </Button>
      );
      expect(screen.getByText(rightIcon)).toHaveClass(rightIconClassName);
    });

    it('should have style handed over when property rightIconStyle provided', () => {
      const rightIconStyle = { backgroundColor: 'red' };

      render(
        <Button rightIcon={rightIcon} rightIconStyle={rightIconStyle}>
          {buttonContent}
        </Button>
      );
      expect(screen.getByText(rightIcon)).toHaveStyle(rightIconStyle);
    });
  });
});
