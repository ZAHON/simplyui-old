import { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from './alert';

describe('Alert', () => {
  describe('Root element', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<Alert ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have role="alert"', () => {
      render(<Alert />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Alert className={className} />);
      expect(screen.getByRole('alert')).toHaveClass(className);
    });

    it('should have style handed over by style property', () => {
      const style = { color: 'red' };

      render(<Alert style={style} />);
      expect(screen.getByRole('alert')).toHaveStyle(style);
    });

    describe('Accessibility', () => {
      it('should have not accessible name when title property not provided', () => {
        render(<Alert />);
        expect(screen.getByRole('alert')).not.toHaveAccessibleName();
      });

      it('should have accessible name when title property provided', () => {
        render(<Alert title="Alert title" />);
        expect(screen.getByRole('alert')).toHaveAccessibleName();
      });

      it('should have not accessible description when children property not provided', () => {
        render(<Alert />);
        expect(screen.getByRole('alert')).not.toHaveAccessibleDescription();
      });

      it('should have accessible description when children property provided', () => {
        render(<Alert>Alert description</Alert>);
        expect(screen.getByRole('alert')).toHaveAccessibleDescription();
      });
    });
  });

  describe('Title element', () => {
    const alertTitleContent = 'Alert title';

    it('should have class name handed over by titleClassName property', () => {
      const titleClassName = 'test';

      render(<Alert title={alertTitleContent} titleClassName={titleClassName} />);
      expect(screen.getByText(alertTitleContent)).toHaveClass(titleClassName);
    });

    it('should have style handed over by titleStyle property', () => {
      const titleStyle = { color: 'red' };

      render(<Alert title={alertTitleContent} titleStyle={titleStyle} />);
      expect(screen.getByText(alertTitleContent)).toHaveStyle(titleStyle);
    });
  });

  describe('Description Element', () => {
    const alertDescriptionContent = 'Alert description';

    it('should have class name handed over by descriptionClassName property', () => {
      const descriptionClassName = 'test';

      render(<Alert descriptionClassName={descriptionClassName}>{alertDescriptionContent}</Alert>);
      expect(screen.getByText(alertDescriptionContent)).toHaveClass(descriptionClassName);
    });

    it('should have style handed over by titleStyle property', () => {
      const descriptionStyle = { color: 'red' };

      render(<Alert descriptionStyle={descriptionStyle}>{alertDescriptionContent}</Alert>);
      expect(screen.getByText(alertDescriptionContent)).toHaveStyle(descriptionStyle);
    });
  });

  describe('Content wrapper element', () => {
    const alertProps = {
      title: 'Alert title',
      children: 'Alert description',
    };

    function getContentWrapperElement() {
      // eslint-disable-next-line testing-library/no-node-access
      return screen.getByText(alertProps.title).parentElement;
    }

    it('should have class name handed over by contentWrapperClassName property', () => {
      const contentWrapperClassName = 'test';

      render(<Alert contentWrapperClassName={contentWrapperClassName} {...alertProps} />);
      expect(getContentWrapperElement()).toHaveClass(contentWrapperClassName);
    });

    it('should have style handed over by contentWrapperStyle property', () => {
      const contentWrapperStyle = { color: 'red' };

      render(<Alert contentWrapperStyle={contentWrapperStyle} {...alertProps} />);
      expect(getContentWrapperElement()).toHaveStyle(contentWrapperStyle);
    });
  });

  describe('Icon wrapper element', () => {
    const alertIcon = 'Alert icon';

    it('should have class name handed over by iconWrapperClassName property', () => {
      const iconWrapperClassName = 'test';

      render(<Alert iconWrapperClassName={iconWrapperClassName} icon={alertIcon} />);
      expect(screen.getByText(alertIcon)).toHaveClass(iconWrapperClassName);
    });

    it('should have style handed over by iconWrapperStyle property', () => {
      const iconWrapperStyle = { color: 'red' };

      render(<Alert iconWrapperStyle={iconWrapperStyle} icon={alertIcon} />);
      expect(screen.getByText(alertIcon)).toHaveStyle(iconWrapperStyle);
    });
  });

  describe('Close button element', () => {
    it('should have accessible name provided by closeButtonLabel property', () => {
      render(<Alert closeButtonLabel="Close alert" closeButton />);
      expect(screen.getByRole('button')).toHaveAccessibleName();
    });

    it('should support two icon type provided by closeButtonIconType property', () => {
      const { rerender } = render(<Alert closeButtonIconType="x-mark" closeButton />);
      // eslint-disable-next-line testing-library/no-node-access
      const closeButtonWithXMarkIcon = screen.getByRole('button').children[0];

      rerender(<Alert closeButtonIconType="x-circle" closeButton />);
      // eslint-disable-next-line testing-library/no-node-access
      const closeButtonWithXCircleIcon = screen.getByRole('button').children[0];

      expect(closeButtonWithXMarkIcon).not.toEqual(closeButtonWithXCircleIcon);
    });

    it('should call onClose handler when is clicked', async () => {
      const onClose = vi.fn();

      render(<Alert closeButton onClose={onClose} />);

      const user = userEvent.setup();
      const closeButtonElement = screen.getByRole('button');

      await user.click(closeButtonElement);
      expect(onClose).toHaveBeenCalled();
    });

    it('should have class name handed over by closeButtonClassName property', () => {
      const closeButtonClassName = 'test';

      render(<Alert closeButtonClassName={closeButtonClassName} closeButton />);
      expect(screen.getByRole('button')).toHaveClass(closeButtonClassName);
    });

    it('should have style handed over by closeButtonStyle property', () => {
      const closeButtonStyle = { color: 'red' };

      render(<Alert closeButtonStyle={closeButtonStyle} closeButton />);
      expect(screen.getByRole('button')).toHaveStyle(closeButtonStyle);
    });
  });
});
