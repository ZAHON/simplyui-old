import { render, screen } from '@testing-library/react';
import { Progress } from './progress';

const defaultProps = {
  value: 50,
  min: 0,
  max: 100,
};

describe('Progress', () => {
  describe('Root Element', () => {
    it('should have class name handed over when property rootClassName provided', () => {
      const rootClassName = 'test';

      render(<Progress {...defaultProps} rootClassName={rootClassName} />);
      expect(screen.getByRole('progressbar')).toHaveClass(rootClassName);
    });

    it('should have style handed over when property rootStyle provided', () => {
      const rootStyle = { backgroundColor: 'red' };

      render(<Progress {...defaultProps} rootStyle={rootStyle} />);
      expect(screen.getByRole('progressbar')).toHaveStyle(rootStyle);
    });

    describe('Accessibility', () => {
      it('should have attribute aria-valuenow with value provided by property value', () => {
        render(<Progress {...defaultProps} />);
        expect(screen.getByRole('progressbar')).toHaveAttribute(
          'aria-valuenow',
          defaultProps.value.toString()
        );
      });

      it('should have attribute aria-valuemin with value provided by property min', () => {
        render(<Progress {...defaultProps} />);
        expect(screen.getByRole('progressbar')).toHaveAttribute(
          'aria-valuemin',
          defaultProps.min.toString()
        );
      });

      it('should have attribute aria-valuemax with value provided by property max', () => {
        render(<Progress {...defaultProps} />);
        expect(screen.getByRole('progressbar')).toHaveAttribute(
          'aria-valuemax',
          defaultProps.max.toString()
        );
      });

      it('should have attribute aria-valuetext with value in the default format when property valueText not provided', () => {
        const valueText = `${(defaultProps.value * 100) / defaultProps.max}%`;

        render(<Progress {...defaultProps} />);
        expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuetext', valueText);
      });

      it('should have attribute aria-valuetext with value provided by property valueText', () => {
        const valueText = (value: number, max: number) => `${value} / ${max}`;

        render(<Progress {...defaultProps} valueText={valueText} />);
        expect(screen.getByRole('progressbar')).toHaveAttribute(
          'aria-valuetext',
          valueText(defaultProps.value, defaultProps.max)
        );
      });

      it('should not have attribute aria-labelledby when property label not provided', () => {
        render(<Progress {...defaultProps} />);
        expect(screen.getByRole('progressbar')).not.toHaveAttribute('aria-labelledby');
      });

      it('should have attribute aria-labelledby when property label provided', () => {
        render(<Progress {...defaultProps} label="loading..." />);
        expect(screen.getByRole('progressbar')).toHaveAttribute('aria-labelledby');
        expect(screen.getByRole('progressbar')).toHaveAccessibleName();
      });

      it('should support aria-labelledby provided by user ', () => {
        render(
          <div>
            <Progress {...defaultProps} aria-labelledby="progress-label" />
            <span id="progress-label">Progress label</span>
          </div>
        );

        expect(screen.getByRole('progressbar')).toHaveAttribute('aria-labelledby');
        expect(screen.getByRole('progressbar')).toHaveAccessibleName();
      });

      describe('Indeterminate', () => {
        it('should have not attribute aria-valuetext when property indeterminate provided', () => {
          render(<Progress {...defaultProps} indeterminate={true} />);
          expect(screen.getByRole('progressbar')).not.toHaveAttribute('aria-valuetext');
        });

        it('should have not attribute aria-valuenow when property indeterminate provided', () => {
          render(<Progress {...defaultProps} indeterminate={true} />);
          expect(screen.getByRole('progressbar')).not.toHaveAttribute('aria-valuenow');
        });
      });
    });
  });

  describe('Label wrapper element', () => {
    const propsToRenderLabelWrapper = {
      label: 'Loading...',
      showValueLabel: true,
    };

    function getLabelWrapperElement() {
      // eslint-disable-next-line testing-library/no-node-access
      return screen.getByRole('progressbar').children[0];
    }

    it('should not render when properties label and showValueLabel not provided', () => {
      render(<Progress {...defaultProps} />);
      // eslint-disable-next-line testing-library/no-node-access
      expect(screen.getByRole('progressbar').children).toHaveLength(1);
    });

    it('should render when property label provided', () => {
      render(<Progress {...defaultProps} label={propsToRenderLabelWrapper.label} />);
      // eslint-disable-next-line testing-library/no-node-access
      expect(screen.getByRole('progressbar').children).toHaveLength(2);
    });

    it('should render when property showValueLabel provided', () => {
      render(
        <Progress {...defaultProps} showValueLabel={propsToRenderLabelWrapper.showValueLabel} />
      );
      // eslint-disable-next-line testing-library/no-node-access
      expect(screen.getByRole('progressbar').children).toHaveLength(2);
    });

    it('should render when properties label and showValueLabel provided', () => {
      render(<Progress {...defaultProps} {...propsToRenderLabelWrapper} />);
      // eslint-disable-next-line testing-library/no-node-access
      expect(screen.getByRole('progressbar').children).toHaveLength(2);
    });

    it('should have class name handed over when property labelWrapperClassName provided', () => {
      const labelWrapperClassName = 'test';

      render(
        <Progress
          {...defaultProps}
          {...propsToRenderLabelWrapper}
          labelWrapperClassName={labelWrapperClassName}
        />
      );
      expect(getLabelWrapperElement()).toHaveClass(labelWrapperClassName);
    });

    it('should have style handed over when property labelWrapperStyle provided', () => {
      const labelWrapperStyle = { backgroundColor: 'red' };

      render(
        <Progress
          {...defaultProps}
          {...propsToRenderLabelWrapper}
          labelWrapperStyle={labelWrapperStyle}
        />
      );
      expect(getLabelWrapperElement()).toHaveStyle(labelWrapperStyle);
    });
  });

  describe('Label element', () => {
    const label = 'Loading...';

    it('should not render when property label not provided', () => {
      render(<Progress {...defaultProps} />);
      expect(screen.queryByText(label)).not.toBeInTheDocument();
    });

    it('should render when property label provided', () => {
      render(<Progress {...defaultProps} label={label} />);
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('should have class name handed over when property labelClassName provided', () => {
      const labelClassName = 'test';

      render(<Progress {...defaultProps} label={label} labelClassName={labelClassName} />);
      expect(screen.getByText(label)).toHaveClass(labelClassName);
    });

    it('should have style handed over when property labelStyle provided', () => {
      const labelStyle = { backgroundColor: 'red' };

      render(<Progress {...defaultProps} label={label} labelStyle={labelStyle} />);
      expect(screen.getByText(label)).toHaveStyle(labelStyle);
    });
  });

  describe('Value label element', () => {
    const defaultValueLabel = `${(defaultProps.value * 100) / defaultProps.max}%`;

    it('should not render when property showValueLabel not provided', () => {
      render(<Progress {...defaultProps} />);
      expect(screen.queryByText(defaultValueLabel)).not.toBeInTheDocument();
    });

    it('should not render when properties showValueLabel and indeterminate provided', () => {
      render(<Progress {...defaultProps} showValueLabel indeterminate />);
      expect(screen.queryByText(defaultValueLabel)).not.toBeInTheDocument();
    });

    it('should render when property showValueLabel provided', () => {
      render(<Progress {...defaultProps} showValueLabel />);
      expect(screen.getByText(defaultValueLabel)).toBeInTheDocument();
    });

    it('should have content provided by property valueLabel', () => {
      const valueLabel = (value: number, max: number) => `${value} / ${max}`;

      render(<Progress {...defaultProps} showValueLabel valueLabel={valueLabel} />);
      expect(
        screen.getByText(valueLabel(defaultProps.value, defaultProps.max))
      ).toBeInTheDocument();
    });

    it('should have class name handed over when property valueLabelClassName provided', () => {
      const valueLabelClassName = 'test';

      render(
        <Progress {...defaultProps} showValueLabel valueLabelClassName={valueLabelClassName} />
      );
      expect(screen.getByText(defaultValueLabel)).toHaveClass(valueLabelClassName);
    });

    it('should have style handed over when property valueLabelStyle provided', () => {
      const valueLabelStyle = { backgroundColor: 'red' };

      render(<Progress {...defaultProps} showValueLabel valueLabelStyle={valueLabelStyle} />);
      expect(screen.getByText(defaultValueLabel)).toHaveStyle(valueLabelStyle);
    });
  });

  describe('Track element', () => {
    function getTrackElement() {
      // eslint-disable-next-line testing-library/no-node-access
      return screen.getByRole('progressbar').children[0];
    }

    it('should have class name handed over when property trackClassName provided', () => {
      const trackClassName = 'test';

      render(<Progress {...defaultProps} trackClassName={trackClassName} />);
      expect(getTrackElement()).toHaveClass(trackClassName);
    });

    it('should have style handed over when property trackStyle provided', () => {
      const trackStyle = { backgroundColor: 'red' };

      render(<Progress {...defaultProps} trackStyle={trackStyle} />);
      expect(getTrackElement()).toHaveStyle(trackStyle);
    });
  });

  describe('Indicator Element', () => {
    function getIndicatorElement() {
      // eslint-disable-next-line testing-library/no-node-access
      return screen.getByRole('progressbar').children[0].children[0];
    }

    it('should have class name handed over when property indicatorClassName provided', () => {
      const indicatorClassName = 'test';

      render(<Progress {...defaultProps} indicatorClassName={indicatorClassName} />);
      expect(getIndicatorElement()).toHaveClass(indicatorClassName);
    });

    it('should have style handed over when property indicatorStyle provided', () => {
      const indicatorStyle = { backgroundColor: 'red' };

      render(<Progress {...defaultProps} indicatorStyle={indicatorStyle} />);
      expect(getIndicatorElement()).toHaveStyle(indicatorStyle);
    });

    describe('Animated', () => {
      it('should not have attribute data-animated when property animated not provided', () => {
        render(<Progress {...defaultProps} animated={false} />);
        expect(getIndicatorElement()).not.toHaveAttribute('data-animated');
      });

      it('should have attribute data-animated when property animated provided', () => {
        render(<Progress {...defaultProps} animated={true} />);
        expect(getIndicatorElement()).toHaveAttribute('data-animated');
      });
    });

    describe('Animated stripes', () => {
      it('should not have attribute data-animated-stripes when property animatedStripes not provided', () => {
        render(<Progress {...defaultProps} animatedStripes={false} />);
        expect(getIndicatorElement()).not.toHaveAttribute('data-animated-stripes');
      });

      it('should have attribute data-animated-stripes when property animatedStripes provided', () => {
        render(<Progress {...defaultProps} animatedStripes={true} />);
        expect(getIndicatorElement()).toHaveAttribute('data-animated-stripes');
      });
    });

    describe('Indeterminate', () => {
      it('should not have attribute data-indeterminate when property indeterminate not provided', () => {
        render(<Progress {...defaultProps} indeterminate={false} />);
        expect(getIndicatorElement()).not.toHaveAttribute('data-indeterminate');
      });

      it('should have attribute data-indeterminate when property indeterminate provided', () => {
        render(<Progress {...defaultProps} indeterminate={true} />);
        expect(getIndicatorElement()).toHaveAttribute('data-indeterminate');
      });
    });

    describe('Striped', () => {
      it('should not have attribute data-striped when properties striped and indeterminate provided', () => {
        render(<Progress {...defaultProps} striped={true} indeterminate={true} />);
        expect(getIndicatorElement()).not.toHaveAttribute('data-striped');
      });

      it('should not have attribute data-striped when property indeterminate provided', () => {
        render(<Progress {...defaultProps} indeterminate={true} />);
        expect(getIndicatorElement()).not.toHaveAttribute('data-striped');
      });

      it('should not have attribute data-striped when property striped not provided', () => {
        render(<Progress {...defaultProps} striped={false} />);
        expect(getIndicatorElement()).not.toHaveAttribute('data-striped');
      });

      it('should have attribute data-striped when property striped provided', () => {
        render(<Progress {...defaultProps} striped={true} />);
        expect(getIndicatorElement()).toHaveAttribute('data-striped');
      });
    });
  });
});
